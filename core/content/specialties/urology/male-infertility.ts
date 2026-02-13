/**
 * Male Infertility - Comprehensive Educational Content
 *
 * Covers causes, evaluation, and treatment of male infertility
 * including semen analysis, hormonal assessment, and management
 * strategies for subfertile men.
 */

import { EducationalContent } from '../../types';

export const maleInfertility: EducationalContent = {
  id: 'condition-male-infertility',
  type: 'condition',
  name: 'Male Infertility',
  alternateNames: [
    'Male Subfertility',
    'Male Factor Infertility',
    'Impaired Male Fertility',
  ],

  levels: {
    1: {
      level: 1,
      summary: 'Male infertility means a man has trouble getting his partner pregnant. It usually happens because the sperm aren\'t healthy enough or there aren\'t enough of them.',
      explanation: `**What is Male Infertility?**

Male infertility means a man has difficulty fathering a child. This happens when there are problems with the sperm - the male reproductive cells that join with a woman's egg to create a baby.

**Understanding Sperm**

Sperm are the tiny cells made in a man's testicles. To successfully fertilize a woman's egg, sperm need to:
- Be healthy and normally shaped
- Be able to swim well
- Be present in sufficient numbers
- Be able to penetrate the egg

**How Common Is It?**

Infertility affects about 1 in 7 couples. In about half of these cases, the man contributes to the fertility problem. Male infertility alone accounts for about 20-30% of infertility cases.

**Common Causes**

**Problems with Sperm Production:**
- Not enough sperm (low sperm count)
- Sperm that don't swim well (low motility)
- Abnormally shaped sperm (poor morphology)
- No sperm at all (azoospermia)

**Blockages:**
- Tubes that carry sperm can be blocked
- Sperm can't get out
- Often from infections or previous surgeries

**Varicocele:**
- Enlarged veins in the scrotum (like varicose veins)
- Can increase temperature in testicles
- May affect sperm production

**Hormone Problems:**
- Hormones control sperm production
- Problems with hormones can reduce sperm

**Lifestyle Factors:**
- Smoking, alcohol, drug use
- Heat exposure (hot tubs, saunas)
- Certain medications
- Obesity
- Stress

**Medical Conditions:**
- Diabetes
- Infections
- Previous surgeries (especially in groin area)
- Cancer treatments

**How Is It Diagnosed?**

**Semen Analysis:**
- The main test for male infertility
- Man provides a semen sample (usually in a cup)
- Laboratory checks:
  - How many sperm are present
  - How well they swim
  - What they look like

**Physical Examination:**
- Doctor checks testicles, penis
- Looks for varicocele
- Checks overall health

**Blood Tests:**
- Hormone levels
- Genetic testing in some cases

**Treatment Options**

**Lifestyle Changes:**
- Stop smoking, limit alcohol
- Avoid hot tubs and saunas
- Maintain healthy weight
- Reduce stress
- Exercise moderately

**Medications:**
- Hormone treatments if hormone problem
- Antibiotics if infection present
- Sometimes vitamins/antioxidants

**Surgery:**
- Fix varicocele (varicocelectomy)
- Unblock sperm tubes
- Retrieve sperm directly from testicle

**Assisted Reproductive Technology:**
- IUI: Placing sperm directly into uterus
- IVF: Fertilizing egg outside body, then implanting
- ICSI: Injecting single sperm into egg

**When to See a Doctor**

If you've been trying to conceive for:
- 12 months or more (if woman <35)
- 6 months or more (if woman ≥35)
- Or anytime if you have concerns about your fertility

**Remember:**
- Many causes of male infertility are treatable
- Lifestyle changes can help
- Medical advances offer many options
- You're not alone - this is common`,
      keyTerms: [
        { term: 'sperm', definition: 'Male reproductive cells that fertilize a woman\'s egg to create a baby' },
        { term: 'semen', definition: 'Fluid that contains sperm; produced during ejaculation' },
        { term: 'semen analysis', definition: 'Test that examines sperm count, movement, and shape' },
        { term: 'varicocele', definition: 'Enlarged veins in the scrotum that can affect sperm production', pronunciation: 'var-ih-koh-seel' },
        { term: 'azoospermia', definition: 'No sperm in semen; requires further evaluation' },
      ],
      analogies: [
        'Sperm need to be like Olympic swimmers - strong, fast, and enough in numbers to reach the finish line (the egg).',
        'A varicocele is like a traffic jam that slows down sperm production by increasing temperature.',
      ],
      examples: [
        'A man with a varicocele may have low sperm count, but surgery can often improve this.',
        'Some men have no sperm in their semen, but sperm can still be retrieved directly from the testicle for use in IVF.',
      ],
    },
    2: {
      level: 2,
      summary: 'Male infertility affects about 15% of couples and is due to abnormal sperm production, function, or delivery. Evaluation includes semen analysis, hormonal assessment, and sometimes genetic testing. Treatment ranges from lifestyle modification to assisted reproductive technologies.',
      explanation: `## Prevalence and Impact

**Statistics:**
- Infertility affects 10-15% of couples
- Male factor contributes in 50% of cases
- Sole male factor in 20-30% of cases
- Increasing prevalence globally

**Definition:**
- Inability to achieve pregnancy after ≥12 months of unprotected intercourse
- Earlier evaluation (6 months) if female partner ≥35
- Documented by abnormal semen parameters or functional sperm disorder

## Classification

**Primary vs. Secondary:**
- Primary: Never achieved pregnancy
- Secondary: Previously achieved pregnancy (spontaneous or with treatment)

**Etiologic Categories:**

| Category | Causes | Examples |
|----------|--------|----------|
| Pre-testicular | Hormonal | Hypogonadism, pituitary disorders |
| Testicular | Sperm production | Varicocele, infection, genetic |
| Post-testicular | Transport/obstruction | Vasectomy, ejaculatory duct obstruction |
| Idiopathic | Unknown | Most common category |

## Evaluation

### Semen Analysis (Primary Test)

**Collection Instructions:**
- Abstain 2-5 days (ideally)
- Collect in sterile container
- Deliver to lab within 1 hour
- Keep at body temperature
- Avoid lubricants (can affect sperm)

**Normal Values (WHO 2021):**

| Parameter | Normal |
|-----------|--------|
| Volume | ≥1.5 mL |
| Sperm concentration | ≥16 million/mL |
| Total sperm count | ≥39 million |
| Motility (progressive) | ≥30% |
| Total motility | ≥40% |
| Morphology (strict) | ≥4% normal |
| Vitality | ≥58% live |
| White blood cells | <1 million/mL |

**Common Abnormalities:**
- **Oligospermia**: Low sperm count
- **Asthenospermia**: Poor motility
- **Teratospermia**: Abnormal morphology
- **Azoospermia**: No sperm in ejaculate

### Hormonal Evaluation

**Tests:**
- FSH (Follicle-Stimulating Hormone): Stimulates sperm production
- LH (Luteinizing Hormone): Stimulates testosterone production
- Testosterone: Required for sperm production
- Prolactin: Elevated levels can suppress testosterone
- TSH: Thyroid function

**Interpretation:**
| Pattern | FSH | LH | Testosterone | Implication |
|--------|-----|------------|---------------|-------------|
| Primary testicular failure | ↑ | ↑/N | ↓ | Testicular problem |
| Secondary hypogonadism | ↓/N | ↓/N | ↓ | Pituitary/hypothalamic |
| Androgen resistance | ↑ | ↑ | ↑ | Receptor problem |
| Normal | N | N | N | Idiopathic or obstruction |

### Physical Examination

**Findings:**
- Testicular size (normal: 15-25 mL)
- Varicocele
- Absent vas deferens (CF screening)
- Hypospadias
- Masses

## Common Causes

**Varicocele:**
- Enlarged pampiniform plexus veins
- Present in 15% general population, 40% of infertile men
- May increase scrotal temperature
- Impairs sperm production
- Most common correctable cause

**Infections:**
- Chlamydia, gonorrhea
- Prostatitis
- Epididymitis
- Mumps orchitis (if post-pubertal)

**Hormonal Disorders:**
- Hypogonadotropic hypogonadism
- Hyperprolactinemia
- Thyroid disorders
- Androgen resistance

**Genetic Causes:**
- Klinefelter syndrome (47,XXY)
- Y-chromosome microdeletions
- Cystic fibrosis mutations
- Chromosomal translocations

**Medications:**
- Testosterone therapy (paradoxically suppresses)
- Chemotherapy
- Anabolic steroids
- Some blood pressure medications
- Antidepressants

**Lifestyle Factors:**
- Smoking: Reduces count, motility, morphology
- Alcohol: Reduces testosterone, sperm quality
- Heat: Frequent sauna/hot tub use
- Obesity: Hormonal changes, increased temperature
- Stress: Hormonal effects`,
      keyTerms: [
        { term: 'oligospermia', definition: 'Low sperm count; fewer than 15 million sperm per mL', pronunciation: 'ol-ih-go-SPERM-ee-ah' },
        { term: 'asthenospermia', definition: 'Reduced sperm motility; sperm don\'t swim well', pronunciation: 'as-then-oh-SPERM-ee-ah' },
        { term: 'teratospermia', definition: 'High percentage of abnormally shaped sperm', pronunciation: 'ter-ah-toh-SPERM-ee-ah' },
        { term: 'hypogonadotropic hypogonadism', definition: 'Low testosterone with low/normal FSH/LH; pituitary problem' },
        { term: 'Klinefelter syndrome', definition: '47,XXY chromosomal condition causing male infertility' },
      ],
      analogies: [
        'Semen analysis is like a traffic report - it tells you how many sperm are on the road, how fast they\'re moving, and whether they\'re in good shape.',
        'The testicle is like a factory; problems can be with production (testicular) or shipping (post-testicular obstruction).',
      ],
    },
    3: {
      level: 3,
      summary: 'Male infertility evaluation requires systematic assessment including semen analysis, hormonal profiling, genetic testing, and physical examination. Etiologies include pre-testicular (endocrine), testicular (primary testicular failure), post-testicular (obstruction), and idiopathic causes with specific treatments for each category.',
      explanation: `## Detailed Evaluation

### Semen Analysis (Expanded)

**WHO 2021 Reference Values:**

| Parameter | Reference Value |
|-----------|-----------------|
| Semen volume | ≥1.5 mL |
| Sperm concentration | ≥16 million/mL |
| Total sperm number | ≥39 million/ejaculate |
| Total motility (PR + NP) | ≥40% |
| Progressive motility | ≥30% |
| Vitality | ≥58% live |
| Sperm morphology | ≥4% normal forms |
| Leukocytes | <1 million/mL |
| MAR IgG/IgA | <50% motile with beads |
| Indications for MAR | Agglutination, reduced motility |

**Quality Assessment:**
- Two samples, 2-4 weeks apart
- Standardized collection method
- Abstinence period 2-5 days
- Prompt processing

### Genetic Testing Indications

**Karyotype:**
- Severe oligospermia (<5 million/mL)
- Azoospermia
- Recurrent pregnancy loss

**Y Chromosome Microdeletion:**
- Azoospermia or severe oligospermia
- AZF regions: a, b, c
- Prognostic for sperm retrieval

**CFTR Mutation Analysis:**
- Congenital bilateral absence of vas deferens (CBAVD)
- Low volume, acidic pH, no fructose
- Partner testing required if mutations present

### Hormonal Evaluation

**Comprehensive Panel:**
- FSH: Testicular stimulation
- LH: Testosterone stimulation
- Testosterone (total and free)
- Prolactin: Dopamine antagonist
- TSH: Thyroid function
- Estradiol: Feedback inhibition
- Inhibin B: Sertoli cell function

**Patterns:**

| Condition | FSH | LH | Testosterone | Prolactin |
|-----------|-----|------------|---------------|-----------|
| Primary testicular failure | ↑ | ↑ | ↓ | N |
| Secondary hypogonadism | ↓/N | ↓ | ↓ | N |
| Hyperprolactinemia | ↓/N | ↓ | ↓ | ↑ |
| Androgen resistance | ↑ | ↑ | ↑ | N |

## Etiologies in Detail

### Pre-testicular (Endocrine)

**Hypogonadotropic Hypogonadism:**
- Kallmann syndrome (anosmia + HH)
- Pituitary tumors
- Hyperprolactinemia
- Systemic illness
- Exogenous androgens/testosterone

**Treatment:**
- hCG +/- hMG or FSH
- GnRH therapy (rare)
- Dopamine agonists for prolactinoma
- Discontinue exogenous androgens

### Testicular (Primary)

**Varicocele:**
- Grade I: Palpable with Valsalva
- Grade II: Palpable without Valsalva
- Grade III: Visible through scrotum

**Effect on Spermatogenesis:**
- Increased scrotal temperature
- Testicular hypoxia
- Reactive oxygen species
- Hormonal alterations

**Indications for Repair:**
- Palpable varicocele
- Abnormal semen parameters
- Duration of infertility
- No other explanation

**Genetic Causes:**
- Klinefelter (47,XXY): Small firm testes, gynecomastia
- Y microdeletions: AZFa, AZFb, AZFc
- CFTR mutations: CBAVD
- Noonan syndrome
- Myotonic dystrophy

**Orchitis:**
- Mumps: 30% infertility if post-pubertal
- Severe bilateral involvement

**Trauma:**
- Testicular torsion
- Scrotal injury
- Iatrogenic during surgery

**Radiation/Chemotherapy:**
- Germ cells highly sensitive
- Spermatogenesis recovery variable
- Sperm banking recommended before treatment

### Post-testicular (Obstructive)

**Congenital:**
- CBAVD (cystic fibrosis)
- Atresia of vas deferens

**Acquired:**
- Vasectomy (reversible with surgery)
- Infection scarring (chlamydia, gonorrhea, TB)
- Iatrogenic (hernia repair, orchiopexy)

**Ejaculatory Dysfunction:**
- Retrograde ejaculation
- Anejaculation
- Spinal cord injury
- Diabetes
- Autonomic medications

**Obstruction Levels:**
| Level | Cause | Sperm Retrieval Success |
|-------|--------|------------------------|
| Intra-testicular | Non-obstructive azoospermia | 50% |
| Epididymal | CBAVD, scarring | >90% |
| Vas deferens | Vasectomy, absent vas | Variable |
| Ejaculatory duct | Prostatic cyst | Surgical treatment |

## Diagnostic Procedures

**Transrectal Ultrasound:**
- Suspected ejaculatory duct obstruction
- Seminal vesicle abnormalities
- Prostatic cysts/masses

**Scrotal Ultrasound:**
- Testicular size and consistency
- Varicocele detection
- Testicular masses
- Epididymal abnormalities

**Testicular Biopsy:**
- Distinguish obstructive vs. non-obstructive azoospermia
- Sperm retrieval simultaneously possible
- Diagnostic and therapeutic

## Treatment Strategies

### Varicocele Repair

**Microsurgical Subinguinal:**
- Gold standard
- Recurrence rate <5%
- Improvement in semen: 60-70%
- Natural pregnancy: 30-40%

**Embolization:**
- Less invasive
- Similar outcomes
- More expensive

**Indications:**
- Palpable varicocele
- Abnormal semen
- Documented infertility
- Female partner fertility potential

### Medical Therapy

**Empiric:**
- Clomiphene citrate: Off-label, selective estrogen receptor modulator
- Anastrozole: Aromatase inhibitor for low T/E ratio
- hCG: Direct gonadal stimulation

**Evidence:**
- Limited for most agents
- May benefit specific hormonal abnormalities

### Assisted Reproductive Technology

**IUI (Intrauterine Insemination):**
- Washed sperm placed in uterus
- Indicated for mild male factor
- Pregnancy rate: 10-20% per cycle

**IVF (In Vitro Fertilization):**
- Eggs fertilized outside body
- Indicated for moderate male factor
- Pregnancy rate: 30-50% per cycle

**ICSI (Intracytoplasmic Sperm Injection):**
- Single sperm injected into egg
- Indicated for severe male factor
- Pregnancy rate: 40-60% per cycle`,
      keyTerms: [
        { term: 'MAR', definition: 'Mixed Agglutination Reaction; tests for sperm-coating antibodies' },
        { term: 'AZF', definition: 'Azoospermia Factor regions on Y chromosome; deletions cause infertility' },
        { term: 'CBAVD', definition: 'Congenital Bilateral Absence of the Vas Deferens; associated with CF mutations' },
        { term: 'hCG', definition: 'Human chorionic gonadotropin; stimulates testosterone production' },
        { term: 'retrograde ejaculation', definition: 'Sperm goes into bladder instead of out penis; caused by diabetes, spinal injury, medications' },
      ],
      clinicalNotes: 'Always check both partners simultaneously. Varicocele repair does not guarantee pregnancy. Sperm banking recommended before chemotherapy/radiation or vasectomy reversal.',
    },
    4: {
      level: 4,
      summary: 'Comprehensive male infertility management integrates evidence-based diagnostic algorithms, targeted therapy based on etiology, and appropriate use of assisted reproductive technologies. Genetic counseling, specialized testing, and multidisciplinary care optimize outcomes for complex cases.',
      explanation: `## Specialized Testing

**Anti-Sperm Antibody Testing:**
- Direct MAR test on sperm
- Indirect test on serum
- Clinically significant when >50% motile sperm coated
- Associated with genital tract inflammation, surgery, trauma

**DNA Fragmentation Index (DFI):**
- Measures DNA integrity in sperm
- High DFI (>30%) associated with:
  - Lower pregnancy rates
  - Higher miscarriage rates
  - Poor IVF outcomes
- Indications: Unexplained infertility, recurrent miscarriage

**Oxidative Stress Assessment:**
- ROS (reactive oxygen species) measurement
- Total antioxidant capacity
- Imbalance impairs sperm function
- Treatment: Antioxidants

**Sperm Aneuploidy Screening:**
- FISH (fluorescence in situ hybridization)
- Chromosomal abnormalities in sperm
- Indicated in recurrent pregnancy loss, severe male factor
- Predicts IVF/ICSI outcomes

## Advanced Management

### Non-Obstructive Azoospermia (NOA)

**Sperm Retrieval Techniques:**

| Technique | Description | Success Rate |
|-----------|-------------|--------------|
| TESE | Testicular sperm extraction | 40-50% |
| Micro-TESE | Microscopic TESE | 50-60% |
| MESA | Microsurgical epididymal sperm aspiration | Obstructive cases |
| TESA | Testicular sperm aspiration | Diagnostic |

**Micro-TESE:**
- Performed under general anesthesia
- Microscopic examination of seminiferous tubules
- Higher success than conventional TESE
- Lower complication rate
- Requires microsurgical expertise

**Predictors of Success:**
- FSH level (limited predictive value)
- Testicular volume
- Histology on biopsy
- Karyotype and Y microdeletion status

### Genetic Counseling

**Klinefelter Syndrome (47,XXY):**
- Most common chromosomal cause
- Testicular failure typical
- Sperm retrieval possible in ~50%
- Genetic counseling required (offspring risk slightly increased)

**Y Chromosome Microdeletions:**
- AZFa deletions: No sperm found
- AZFb deletions: Rare sperm found
- AZFc deletions: Sperm found in ~70%
- Will be passed to male offspring

**CFTR Mutations:**
- If both partners carriers: 25% risk CF in child
- Preimplantation genetic testing (PGT-M) recommended
- Donor gametes alternative

### Hormonal Optimization

**Clomiphene Citrate:**
- SERM increases FSH, LH
- Off-label for male infertility
- Dose: 25-50 mg daily
- Monitor T, E2 levels
- Contraindicated in primary testicular failure

**Aromatase Inhibitors:**
- Anastrozole, Letrozole
- Indicated when T/E ratio low
- Dose: Anastrozole 1 mg daily
- Improves T/E ratio
- May improve semen parameters

**hCG Therapy:**
- Direct LH analog
- Dose: 2,000-3,000 IU 2-3x/week
- With or without FSH
- Indicated in secondary hypogonadism
- Expensive, requires injections

### Surgical Sperm Retrieval

**Indications:**
- Azoospermia
- Severe oligospermia with failed ICSI
- Ejaculatory dysfunction

**Timing:**
- Can be synchronized with IVF cycle
- Can be frozen and used later
- Fresh vs. frozen similar outcomes with ICSI

## Assisted Reproductive Technology Selection

**Mild Male Factor:**
- IUI with washed sperm
- 3-6 cycles before IVF
- Cost-effective first-line

**Moderate Male Factor:**
- IVF with conventional insemination
- Consider ICSI if parameters poor
- Success rate 30-50%

**Severe Male Factor:**
- IVF/ICSI required
- ICSI success: 40-60%
- Options if NOA: TESE/ICSI or donor sperm

**Azoospermia:**
- Evaluate for obstruction vs. non-obstruction
- Sperm retrieval if viable sperm present
- Donor sperm or adoption alternatives

## Counseling Considerations

**Prognostic Factors:**
- Female partner age (most important)
- Sperm parameters
- Duration of infertility
- Previous pregnancies
- Treatable causes identified

**Ethical Issues:**
- Posthumous sperm use
- Sperm banking before gonadotoxic therapy
- Multiple pregnancy risk with ART
- Preimplantation genetic testing

**Cost Considerations:**
- Diagnostic testing
- Treatment interventions
- ART cycles (expensive, not always covered)
- Insurance coverage varies`,
      keyTerms: [
        { term: 'DFI', definition: 'DNA Fragmentation Index; measures sperm DNA integrity' },
        { term: 'TESE', definition: 'Testicular Sperm Extraction; surgical retrieval of sperm from testicle' },
        { term: 'Micro-TESE', definition: 'Microscopic Testicular Sperm Extraction; higher sperm retrieval rate' },
        { term: 'MESA', definition: 'Microsurgical Epididymal Sperm Aspiration; for obstructive azoospermia' },
        { term: 'PGT-M', definition: 'Preimplantation Genetic Testing for Monogenic disorders' },
      ],
      clinicalNotes: 'Genetic testing essential before ICSI with severe male factor. Y microdeletions will be transmitted to male offspring. Consider sperm banking before any gonadotoxic treatment.',
    },
    5: {
      level: 5,
      summary: 'State-of-the-art male infertility care incorporates advanced genomic testing, microsurgical techniques, personalized hormonal therapy, and integration with reproductive technologies. Emerging research on sperm epigenetics, oxidative stress, and lifestyle modification continues to expand treatment options.',
      explanation: `## Advanced Diagnostic Approaches

### Omics in Male Infertility

**Sperm Epigenetics:**
- DNA methylation patterns
- Histone modifications
- Small non-coding RNAs
- Imprinting disorders
- Impacts embryonic development and offspring health

**Proteomics:**
- Seminal plasma proteins
- Biomarkers for fertility status
- Predictors of ART success
- Potential therapeutic targets

**Transcriptomics:**
- Testicular gene expression
- Spermatogenic failure patterns
- Treatment response prediction

### Novel Biomarkers

**Seminal Plasma Markers:**
- Fructose: Absence indicates seminal vesicle obstruction or atresia
- Alpha-glucosidase: Epididymal function marker
- Carnitine: Epididymal marker
- Neutral alpha-glucosidase: Epididymal function

**Sperm Function Tests:**
- Capacitation assays
- Acrosome reaction testing
- Sperm-oocyte interaction tests
- Hyaluronan binding assay

**Oxidative Stress Assessment:**
- ROS measurement by chemiluminescence
- Total antioxidant capacity
- DNA oxidation (8-OHdG)
- Mitochondrial membrane potential

## Therapeutic Innovations

### Antioxidant Therapy

**Rationale:**
- ROS impairs sperm function
- Oxidative stress present in 30-80% infertile men
- Antioxidants may improve parameters

**Evidence-Based Agents:**

| Antioxidant | Dose | Evidence |
|-------------|------|----------|
| Vitamin C | 500-1000 mg | Moderate |
| Vitamin E | 400 IU | Moderate |
| Selenium | 200 mcg | Moderate |
| Zinc | 25-50 mg | Moderate |
| CoQ10 | 200-400 mg | Good |
| Carnitine | 1-3 g | Good |
| N-acetylcysteine | 600 mg | Moderate |

**Cochrane Review:**
- Live birth increase: 3-4%
- Pregnancy increase: 5%
- Limited quality evidence
- Individualized therapy recommended

### Microsurgical Advances

**Micro-TESE Improvements:**
- Optical magnification enhancement
- Intraoperative ultrasound guidance
- Fluorescence techniques
- Higher success rates, lower complications

**Vasectomy Reversal:**
- Microsurgical vasovasostomy
- Patency rate >90%
- Pregnancy rate: 40-60%
- Vasoepididymostomy for epididymal obstruction

**Varicocele Repair Advances:**
- Microscopic subinguinal approach (gold standard)
- Arterial and lymphatic preservation
- Reduced recurrence
- Improved outcomes

## Assisted Reproduction Innovations

### ICSI Enhancements

**Sperm Selection:**
- IMSI (intracytoplasmic morphologically selected sperm injection)
- PICSI (physiological ICSI): Hyaluronan binding
- MACS (magnetic-activated cell sorting)
- Microfluidic sperm sorting

**Testicular Sperm "Maturation":**
- In vitro techniques to improve sperm quality
- Motility enhancement
- DNA fragmentation reduction

### Emerging Technologies

**In Vitro Spermatogenesis:**
- Stem cell-derived sperm
- Experimental, ethical concerns
- Potential for azoospermic men
- Distant clinical reality

**Artificial Gametes:**
- Derived from stem cells
- Research phase
- Significant ethical considerations

## Lifestyle and Environmental Factors

**Evidence-Based Modifications:**

| Intervention | Evidence | Effect |
|--------------|----------|--------|
| Smoking cessation | Strong | Improves parameters |
| Weight loss | Moderate | Improves hormonal profile |
| Heat avoidance | Moderate | Improves motility |
| Exercise | Moderate | Improves overall health |
| Stress reduction | Emerging | May improve parameters |
| Sleep optimization | Emerging | Hormonal effects |

**Environmental Exposures:**
- Endocrine disruptors (phthalates, BPA)
- Pesticides
- Heavy metals
- Radiation
- Occupational exposures (heat, chemicals)

## Guidelines and Clinical Practice

**AUA/ASRM Guidelines (2020):**
- Semen analysis first test
- Endocrine evaluation if indicated
- Consider genetic testing for severe oligospermia/azoospermia
- Varicocele repair if palpable and abnormal semen
- ART for severe male factor

**EAU Guidelines (2021):**
- Similar to AUA/ASRM
- Emphasis on both partners evaluation
- Cost-effectiveness considerations

## Research Frontiers

**Gene Therapy:**
- CFTR gene therapy for CBAVD
- Y chromosome microdeletion correction
- Experimental approaches

**Stem Cell Therapy:**
- Spermatogonial stem cell transplantation
- Induced pluripotent stem cells
- Clinical trials ongoing

**Nanotechnology:**
- Drug delivery systems
- Sperm separation technologies
- Diagnostic applications`,
      keyTerms: [
        { term: 'epigenetics', definition: 'Heritable changes in gene expression without DNA sequence changes' },
        { term: 'IMSI', definition: 'Intracytoplasmic Morphologically Selected Sperm Injection; high-magnification sperm selection' },
        { term: 'PICSI', definition: 'Physiologic ICSI; selects mature sperm using hyaluronan binding' },
        { term: 'MACS', definition: 'Magnetic-Activated Cell Sorting; separates apoptotic from non-apoptotic sperm' },
        { term: 'endocrine disruptors', definition: 'Chemicals that interfere with hormone systems; affect fertility' },
      ],
      clinicalNotes: `Practice recommendations:

1. **Evaluate both partners simultaneously**: Infertility is a couple's issue

2. **Genetic counseling before ICSI**: Essential for Y microdeletions, CF mutations

3. **Lifestyle first**: Optimize modifiable factors before expensive treatments

4. **Sperm banking**: Before gonadotoxic treatments, or during sperm retrieval

5. **Varicocele repair**: Consider in palpable varicocele with abnormal semen

6. **ART timeline**: Don't delay female partner's treatment for extensive male evaluation

7. **Psychological support**: Infertility causes significant stress for both partners`,
    },
  },

  media: [
    {
      id: 'sperm-structure',
      type: 'image',
      filename: 'sperm-structure.jpg',
      title: 'Sperm Structure and Morphology',
      description: 'Normal sperm anatomy and common abnormalities',
    },
    {
      id: 'varicocele-grades',
      type: 'diagram',
      filename: 'varicocele-grading.svg',
      title: 'Varicocele Grading',
      description: 'Clinical grades of varicocele and appearance',
    },
    {
      id: 'male-infertility-algorithm',
      type: 'diagram',
      filename: 'male-infertility-evaluation-algorithm.svg',
      title: 'Male Infertility Evaluation Algorithm',
      description: 'Systematic approach to evaluating male infertility',
    },
  ],

  citations: [
    {
      id: 'who-seman-2021',
      type: 'article',
      title: 'WHO Laboratory Manual for the Examination and Processing of Human Semen',
      source: 'World Health Organization',
    },
    {
      id: 'aau-asrm-2020',
      type: 'article',
      title: 'AUA/ASRM Guidelines on Male Infertility',
      authors: ['American Urological Association', 'American Society for Reproductive Medicine'],
      source: 'Fertility and Sterility',
    },
    {
      id: 'eau-guidelines-2021',
      type: 'article',
      title: 'EAU Guidelines on Sexual and Reproductive Health',
      authors: ['European Association of Urology'],
      source: 'EAU Guidelines',
    },
  ],

  crossReferences: [
    { targetId: 'structure-urinary-tract-anatomy', targetType: 'structure', relationship: 'related', label: 'Urinary Tract Anatomy' },
    { targetId: 'condition-erectile-dysfunction', targetType: 'condition', relationship: 'related', label: 'Erectile Dysfunction' },
    { targetId: 'condition-benign-prostatic-hyperplasia', targetType: 'condition', relationship: 'related', label: 'BPH' },
  ],

  tags: {
    systems: ['reproductive', 'urinary'],
    topics: ['urology', 'reproductive medicine', 'infertility', 'andrology'],
    keywords: ['infertility', 'semen analysis', 'varicocele', 'azoospermia', 'ICSI', 'sperm'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['surgery', 'obgyn', 'family medicine'],
    },
  },

  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default maleInfertility;
