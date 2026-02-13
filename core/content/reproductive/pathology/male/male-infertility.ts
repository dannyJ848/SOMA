import { EducationalContent } from '../../../types';

export const maleInfertilityContent: EducationalContent = {
  id: 'reproductive-male-infertility',
  type: 'condition',
  name: 'Male Infertility',
  alternateNames: ['Male factor infertility', 'Oligospermia', 'Azoospermia', 'Male subfertility'],
  levels: {
    1: {
      level: 1,
      summary: 'Male infertility means a man is having difficulty helping his partner become pregnant. It is very common and is a factor in about half of couples who cannot conceive.',
      explanation: `Male infertility happens when there is a problem with the sperm or the system that delivers sperm, making it hard to start a pregnancy.

**How Common Is It?**
- About 1 in 7 couples have trouble getting pregnant
- Male factors contribute in about half of these cases
- Many men with infertility can still become fathers with treatment

**What Can Cause Male Infertility:**

**Problems with Sperm**
- Too few sperm (low count)
- Sperm that don't move well (poor motility)
- Sperm with abnormal shapes
- No sperm at all (rare)

**What Can Affect Sperm:**
- Varicocele (enlarged veins in the scrotum) - most common treatable cause
- Infections
- Hormone problems
- Certain medications
- Heat exposure (hot tubs, laptops on lap)
- Smoking, heavy drinking, drug use
- Being overweight
- Previous surgery or injury

**When to See a Doctor:**
- After trying for a year without pregnancy (or 6 months if partner is over 35)
- If you have known risk factors
- If there are problems with erection or ejaculation

**What Happens at the Doctor:**
- History and physical exam
- Semen analysis (test to check sperm)
- Blood tests for hormones
- Sometimes ultrasound or other tests

**Treatment Depends on the Cause:**
- Lifestyle changes (quit smoking, reduce alcohol, healthy weight)
- Treating infections
- Surgery for varicocele or blockages
- Hormone treatments
- Assisted reproduction (IUI, IVF, ICSI)

**Good News:**
- Many causes are treatable
- Even with very low sperm counts, advanced techniques can help
- Most couples can achieve pregnancy with appropriate treatment`,
      keyTerms: [
        { term: 'Sperm', definition: 'Male reproductive cells needed to fertilize an egg' },
        { term: 'Semen analysis', definition: 'A test that checks how many sperm there are and how well they move' },
        { term: 'Varicocele', definition: 'Enlarged veins in the scrotum that can affect sperm production' },
        { term: 'IVF', definition: 'In vitro fertilization; a treatment where eggs and sperm are combined in a lab' },
      ],
      analogies: [
        'Sperm are like swimmers in a race - they need to be numerous, good swimmers, and shaped correctly to reach the finish line (egg)',
        'A varicocele is like varicose veins but in the scrotum - it makes the area too warm for healthy sperm production',
      ],
      patientCounselingPoints: [
        'Male infertility is common - you are not alone',
        'It is not a reflection of masculinity',
        'Many causes can be treated successfully',
        'A semen analysis is an important first step',
      ],
    },
    2: {
      level: 2,
      summary: 'Male infertility is evaluated through semen analysis and categorized by sperm production disorders, transport obstruction, or dysfunction, with treatment ranging from lifestyle modification to assisted reproductive technologies.',
      explanation: `Male factor infertility contributes to approximately 50% of infertility cases. Systematic evaluation can identify treatable causes in many men.

**Semen Analysis - WHO 2021 Criteria:**

| Parameter | Lower Reference Limit |
|-----------|----------------------|
| Volume | ≥1.4 mL |
| Concentration | ≥16 million/mL |
| Total count | ≥39 million per ejaculate |
| Motility (total) | ≥42% |
| Progressive motility | ≥30% |
| Morphology | ≥4% normal forms |

**Terminology:**
- Oligozoospermia: Low sperm count
- Asthenozoospermia: Poor motility
- Teratozoospermia: Abnormal morphology
- Azoospermia: No sperm in ejaculate
- OAT syndrome: Combination of oligo-astheno-teratozoospermia

**Categories of Male Infertility:**

**1. Pre-testicular (Hormonal)**
- Hypogonadotropic hypogonadism
- Hyperprolactinemia
- Exogenous testosterone/steroids (shuts down sperm production)
- Thyroid disorders

**2. Testicular (Primary)**
- Varicocele (35-40% of infertile men)
- Cryptorchidism (undescended testes)
- Klinefelter syndrome (47,XXY)
- Y chromosome microdeletions
- Testicular trauma or torsion
- Cancer treatment (chemo, radiation)
- Infections (mumps orchitis)

**3. Post-testicular (Obstruction/Dysfunction)**
- Ejaculatory duct obstruction
- Congenital absence of vas deferens (CAVD) - associated with CFTR mutations
- Vasectomy
- Retrograde ejaculation
- Erectile dysfunction

**Varicocele:**
- Most common correctable cause
- More common on left side (anatomy of gonadal vein)
- Mechanism: Increased testicular temperature, oxidative stress
- Grading:
  - Grade I: Palpable with Valsalva
  - Grade II: Palpable without Valsalva
  - Grade III: Visible
- Repair indicated if: Palpable varicocele + abnormal semen + infertility

**Evaluation:**

*All men*
- At least 2 semen analyses (2-7 days abstinence)
- Physical exam (testicular size, varicocele, vas deferens)

*Additional testing based on findings*
- Hormones: FSH, LH, testosterone (if low count or azoospermia)
- Scrotal ultrasound (confirm varicocele, assess testes)
- Transrectal ultrasound (if low volume suggests obstruction)
- Genetic testing (karyotype, Y-microdeletions, CFTR)

**Treatment:**

| Condition | Treatment |
|-----------|-----------|
| Varicocele | Surgical repair or embolization |
| Hypogonadotropic hypogonadism | Gonadotropins (hCG + FSH) |
| Obstruction | Surgical reconstruction or sperm retrieval |
| Retrograde ejaculation | Medications or sperm retrieval from urine |
| Unexplained/untreatable | IUI or IVF/ICSI |`,
      keyTerms: [
        { term: 'Oligozoospermia', definition: 'Low sperm concentration (<16 million/mL)' },
        { term: 'Azoospermia', definition: 'Complete absence of sperm in the ejaculate' },
        { term: 'Varicocele', definition: 'Dilated veins of the pampiniform plexus; most common correctable cause of male infertility' },
        { term: 'ICSI', definition: 'Intracytoplasmic sperm injection; direct injection of single sperm into egg' },
        { term: 'Y chromosome microdeletion', definition: 'Genetic cause of azoospermia or severe oligospermia affecting AZF regions' },
      ],
      examples: [
        'A man with small, firm testes, gynecomastia, and azoospermia should be tested for Klinefelter syndrome (47,XXY)',
        'A man using testosterone supplementation for bodybuilding may have severe oligospermia or azoospermia due to HPG axis suppression',
      ],
    },
    3: {
      level: 3,
      summary: 'Male infertility evaluation integrates semen analysis, hormonal profiling, imaging, and genetic testing to classify etiology and guide treatment, with surgical sperm retrieval and ART enabling paternity in severe cases.',
      explanation: `**Spermatogenesis Review:**

**Timeline**
- Full cycle: ~74 days (64 days spermatogenesis + 10-14 days epididymal transit)
- Daily production: ~100-200 million sperm
- Interventions take 2-3 months to show effect

**Hormonal Control**
- GnRH pulses from hypothalamus
- FSH → Sertoli cells → Support spermatogenesis
- LH → Leydig cells → Testosterone production
- Testosterone → Required locally for spermatogenesis
- Inhibin B → Negative feedback on FSH

**Azoospermia Evaluation:**

**Obstructive vs. Non-Obstructive**

| Feature | Obstructive (OA) | Non-Obstructive (NOA) |
|---------|------------------|----------------------|
| FSH | Normal | Elevated |
| Testicular size | Normal | Often small |
| Causes | CAVD, vasectomy, infection | Genetic, varicocele, idiopathic |
| Prognosis | Sperm retrieval successful | Variable success |

**Evaluation Protocol**
1. Confirm azoospermia (centrifuge pellet)
2. Semen volume and pH
   - Low volume + acidic: Ejaculatory duct obstruction or CAVD
3. Hormones: FSH, LH, testosterone
4. Genetic testing:
   - Karyotype (Klinefelter, translocations)
   - Y chromosome microdeletion
   - CFTR mutations (if CAVD suspected)

**Y Chromosome Microdeletions:**

*AZF Regions*
- AZFa: Sertoli cell only syndrome; no sperm on retrieval
- AZFb: Maturation arrest; very poor prognosis
- AZFc: Most common; variable phenotype; sperm retrieval often successful
- Combination deletions: Poor prognosis

**Genetic Counseling**
- AZFc deletions will be transmitted to male offspring
- May counsel about PGT or using donor sperm

**Klinefelter Syndrome (47,XXY):**
- Most common chromosomal cause of male infertility
- Phenotype: Tall, small firm testes, gynecomastia
- FSH very elevated, testosterone low-normal
- Historically considered sterile
- Now: Micro-TESE retrieves sperm in 50-70%
- Consider sperm cryopreservation in adolescence

**Varicocele Pathophysiology:**

*Mechanisms of Damage*
- Elevated testicular temperature
- Reflux of adrenal/renal metabolites
- Increased reactive oxygen species
- Hypoxia

*Evidence for Repair*
- Meta-analyses show improvement in pregnancy rates
- Best evidence for clinical (palpable) varicoceles
- Microsurgical subinguinal approach preferred
- Alternative: Percutaneous embolization

**Surgical Sperm Retrieval:**

**For Obstructive Azoospermia**
- PESA: Percutaneous epididymal sperm aspiration
- MESA: Microsurgical epididymal sperm aspiration
- TESA: Testicular sperm aspiration
- High success rates

**For Non-Obstructive Azoospermia**
- Micro-TESE (microsurgical testicular sperm extraction)
- Optical magnification to identify areas of active spermatogenesis
- Success rate: 40-60% in NOA
- Better outcomes with prior hormonal optimization

**Medical Treatment:**

**For Hypogonadotropic Hypogonadism**
- hCG (1,500-3,000 IU 2-3x/week): Stimulates Leydig cells
- FSH (75-150 IU 2-3x/week): Stimulates Sertoli cells
- May take 6-12+ months to see sperm

**Empiric Therapy (Limited Evidence)**
- Clomiphene citrate: Raises LH, FSH, testosterone
- Anastrozole: Aromatase inhibitor; raises T:E ratio
- Antioxidants (controversial evidence)`,
      keyTerms: [
        { term: 'Micro-TESE', definition: 'Microsurgical testicular sperm extraction; uses optical magnification to find sperm in NOA' },
        { term: 'AZF regions', definition: 'Azoospermia factor regions on Y chromosome; deletions cause spermatogenic failure' },
        { term: 'Inhibin B', definition: 'Hormone from Sertoli cells; marker of spermatogenic function; low in NOA' },
        { term: 'CAVD', definition: 'Congenital absence of the vas deferens; associated with CFTR mutations' },
        { term: 'Sertoli cell only', definition: 'Testicular histology showing only Sertoli cells without germ cells; causes NOA' },
      ],
      examples: [
        'A man with azoospermia, normal FSH, palpable vas, and normal testicular size has obstructive azoospermia and excellent prognosis for sperm retrieval',
        'AZFa deletion has the worst prognosis for sperm retrieval; genetic counseling should discuss donor sperm option',
      ],
    },
    4: {
      level: 4,
      summary: 'Advanced male infertility management incorporates molecular genetics, proteomics of sperm function, surgical microsurgery techniques, and optimization strategies for ART outcomes, with emerging research in testicular stem cells and in vitro spermatogenesis.',
      explanation: `**Molecular Biology of Spermatogenesis:**

**Germ Cell Development**
- Spermatogonial stem cells (SSCs): Self-renew and differentiate
- Spermatogonia → Spermatocytes → Spermatids → Spermatozoa
- Meiosis produces haploid cells
- Spermiogenesis: Dramatic morphologic changes
  - Acrosome formation
  - Nuclear condensation (histone → protamine)
  - Flagellum development
  - Cytoplasm shedding

**Key Genes in Spermatogenesis**
| Gene | Function | Mutation Phenotype |
|------|----------|-------------------|
| DAZ | RNA binding | Oligospermia/azoospermia |
| SYCP3 | Meiotic synaptonemal complex | Azoospermia |
| TEX11 | Meiotic recombination | Azoospermia |
| DPY19L2 | Acrosome formation | Globozoospermia |
| DNAH1 | Flagellar dynein | Asthenozoospermia |
| AURKC | Meiosis II | Large-headed sperm |

**Sperm DNA Integrity:**

**Types of Damage**
- Single-strand breaks
- Double-strand breaks
- Oxidative base damage
- Protamine deficiency

**Assessment Methods**
- Sperm chromatin structure assay (SCSA)
- TUNEL assay
- Comet assay
- Sperm chromatin dispersion test

**Clinical Significance**
- High DNA fragmentation associated with:
  - Reduced natural conception
  - IVF failure
  - Early pregnancy loss
- Not well correlated with standard semen parameters
- May be indication for ICSI over IVF

**Oxidative Stress:**
- ROS generated by leukocytes and abnormal sperm
- Overwhelms antioxidant defenses
- Damages membranes, DNA, mitochondria
- Varicocele, infection, toxins increase ROS
- Antioxidant therapy: Mixed evidence (Cochrane review)

**Advanced Genetic Testing:**

**Whole Exome/Genome Sequencing**
- Identifying novel monogenic causes
- Up to 40% of unexplained NOA may have genetic basis
- Expanding list of causative genes

**Epigenetic Factors**
- DNA methylation patterns
- Histone modifications
- Imprinting defects
- May affect offspring health (transgenerational)

**Microsurgery Techniques:**

**Vasovasostomy (Vasectomy Reversal)**
- Microsurgical anastomosis
- Patency: 75-99%
- Pregnancy: 30-75% (depends on obstruction duration)
- Modified one-layer or two-layer techniques

**Vasoepididymostomy**
- For epididymal obstruction
- More technically demanding
- Patency: 60-90%

**Micro-TESE Optimization**
- Pre-operative hormonal optimization
  - Clomiphene or hCG + FSH
  - Aromatase inhibitor if high E2
- Intraoperative mapping
- Cryopreservation of retrieved sperm
- Concurrent fresh vs. frozen ICSI debate

**ART Considerations:**

**When to Use ICSI**
- Severe oligospermia (<5 million/mL)
- Poor morphology (<4% normal)
- Prior fertilization failure
- Surgically retrieved sperm
- DNA fragmentation concerns

**Sperm Selection Techniques**
- MACS (magnetic-activated cell sorting): Removes apoptotic sperm
- PICSI (physiologic ICSI): Selects by hyaluronan binding
- IMSI: High magnification selection
- Microfluidic devices: Select motile, morphologically normal

**Emerging Approaches:**

**Spermatogonial Stem Cell Transplantation**
- Autologous transplant after cancer treatment (experimental)
- Requires cryopreservation before gonadotoxic therapy

**In Vitro Spermatogenesis**
- Differentiation of SSCs or iPSCs to sperm in culture
- Achieved in mice, not yet in humans
- Ethical considerations

**Testicular Tissue Cryopreservation**
- For prepubertal boys facing gonadotoxic treatment
- No mature sperm yet
- Future use: Transplantation or in vitro maturation`,
      keyTerms: [
        { term: 'DNA fragmentation index', definition: 'Measure of sperm DNA damage; high levels associated with infertility and pregnancy loss' },
        { term: 'Protamines', definition: 'Basic proteins that replace histones in sperm nuclei for DNA compaction' },
        { term: 'Globozoospermia', definition: 'Round-headed sperm lacking acrosome; caused by DPY19L2 mutations; requires ICSI with AOA' },
        { term: 'Vasovasostomy', definition: 'Microsurgical reconnection of vas deferens after vasectomy' },
        { term: 'MACS', definition: 'Magnetic-activated cell sorting; technique to remove apoptotic sperm before ICSI' },
      ],
      clinicalNotes: 'High sperm DNA fragmentation despite normal standard semen parameters may explain unexplained infertility or recurrent pregnancy loss. Consider DNA fragmentation testing in couples with repeated ART failure. ICSI using testicular sperm (TESE) may reduce DNA damage compared to ejaculated sperm in men with high fragmentation.',
    },
    5: {
      level: 5,
      summary: 'Evidence-based male infertility management requires systematic evaluation per guidelines, integration of genetic testing, selection of optimal surgical or ART approaches based on etiology and prognosis, and consideration of emerging technologies and ethical implications.',
      explanation: `**Evaluation Protocol per AUA/ASRM Guidelines:**

**Initial Assessment**
- Reproductive history (prior paternity, timing of infertility)
- Medical history (cryptorchidism, infections, cancer treatment, medications)
- Surgical history (hernia repair, orchidopexy, vasectomy)
- Sexual history (frequency, timing, ED/ejaculatory dysfunction)
- Family history (CF, infertility)
- Exposures (heat, toxins, steroids)

**Physical Examination**
- Testicular volume (Prader orchidometer: Normal >15 mL)
- Consistency (soft in NOA, firm in Klinefelter)
- Varicocele assessment
- Presence of vas deferens bilaterally
- Epididymal fullness (obstruction)
- Secondary sex characteristics

**Semen Analysis Protocol**
- 2-7 days abstinence
- Collection by masturbation
- Analysis within 1 hour
- At least 2 samples, 2-4 weeks apart
- Report per WHO 2021 standards

**Advanced Workup:**

**Hormonal Testing Indications**
- Sperm concentration <10 million/mL
- Impaired sexual function
- Clinical signs of hypogonadism

| Test | When to Order | Interpretation |
|------|---------------|----------------|
| FSH | All with low count | High = testicular failure |
| LH | With FSH | Helps classify hypogonadism |
| Testosterone | AM level | Low = hypogonadism |
| Estradiol | If high FSH, obese | Aromatization |
| Prolactin | If low T or hypogonadism | Adenoma if elevated |
| TSH | If symptomatic | Thyroid dysfunction |

**Genetic Testing Indications**
- Azoospermia or severe oligospermia (<5 million/mL)
- CAVD on exam
- Clinical features of genetic syndrome

| Test | Indication | Implications |
|------|------------|--------------|
| Karyotype | Azoospermia, small testes | Klinefelter, translocations |
| Y microdeletion | NOA, severe oligospermia | Prognosis, genetic counseling |
| CFTR | CAVD or CUAVD | CF carrier status, offspring risk |

**Management Algorithm:**

**Correctable Causes**
1. Varicocele: Repair if palpable + abnormal SA + infertility
2. Hypogonadotropic hypogonadism: Gonadotropin therapy
3. Obstruction: Reconstruction or sperm retrieval
4. Ejaculatory dysfunction: Treat underlying cause

**When to Proceed to ART**
- Failed medical/surgical treatment
- Severe male factor (ICSI likely needed regardless)
- Female factor coexists requiring IVF
- Advanced maternal age (time pressure)

**IUI vs IVF/ICSI:**
| Parameter | IUI Candidate | IVF/ICSI |
|-----------|---------------|----------|
| Total motile count | >5-10 million | <5 million |
| Morphology | >4% | <4% |
| Female factor | Mild or none | Tubal, ovulatory |
| Duration of infertility | <3 years | >3 years |
| Prior treatment | None | Failed IUI |

**Prognosis Counseling:**

**Factors Affecting Outcome**
- Etiology (obstructive > non-obstructive)
- Genetic findings (AZFc > AZFa)
- Testicular histology (hypospermatogenesis > Sertoli cell only)
- Female partner factors (age, reserve)

**Sperm Retrieval Success Rates**
| Condition | Method | Success |
|-----------|--------|---------|
| Obstructive azoospermia | MESA/TESE | >95% |
| NOA - Klinefelter | Micro-TESE | 50-70% |
| NOA - post-chemo | Micro-TESE | 40-60% |
| NOA - AZFc deletion | Micro-TESE | 50-70% |
| NOA - AZFa/b | Micro-TESE | <10% |

**Special Considerations:**

**Fertility Preservation**
- Before cancer treatment: Semen cryopreservation
- Prepubertal: Testicular tissue cryopreservation (experimental)
- Before vasectomy: Discuss sperm banking

**Testosterone and Fertility**
- Exogenous testosterone SUPPRESSES spermatogenesis
- Recovery time variable (3-12+ months)
- May be incomplete in some men
- Counsel all men on TRT about fertility impact

**Medications Affecting Fertility**
| Drug | Effect | Reversibility |
|------|--------|---------------|
| Exogenous testosterone | Severe suppression | Usually reversible |
| Finasteride/dutasteride | Mild decrease | Reversible |
| SSRIs | Ejaculatory dysfunction | Reversible |
| Alpha-blockers | Retrograde ejaculation | Reversible |
| Chemotherapy | Variable | Often permanent |

**Shared Decision Making**
- Success rates and realistic expectations
- Multiple treatment options often exist
- Financial considerations
- Emotional support and counseling
- Consider donor sperm when appropriate`,
      keyTerms: [
        { term: 'Total motile sperm count', definition: 'Volume x concentration x motility; key parameter for IUI candidacy' },
        { term: 'CAVD', definition: 'Congenital absence of vas deferens; associated with CFTR mutations; sperm retrieval required' },
        { term: 'Prader orchidometer', definition: 'Set of graduated ellipsoids for measuring testicular volume; normal >15 mL' },
        { term: 'Fertility preservation', definition: 'Sperm or tissue cryopreservation before gonadotoxic treatment or electively' },
        { term: 'Hypospermatogenesis', definition: 'Reduced but present spermatogenesis on biopsy; better micro-TESE prognosis than Sertoli cell only' },
      ],
      clinicalNotes: 'The AUA/ASRM guidelines recommend genetic testing (karyotype and Y-microdeletion) for all men with NOA or severe oligospermia (<5 million/mL). CFTR testing is indicated when vas deferens is absent. Results inform prognosis and have implications for offspring, including the certainty of transmitting Y chromosome deletions to male children. Preimplantation genetic testing (PGT) can be offered to avoid transmission of certain genetic conditions.',
    },
  },
  media: [],
  citations: [
    {
      id: 'ref-1',
      type: 'article',
      title: 'AUA/ASRM Guidelines: Diagnosis and Treatment of Male Infertility',
      source: 'Journal of Urology/Fertility and Sterility',
      authors: ['Schlegel, P.N.', 'et al.'],
      url: 'https://www.auanet.org/guidelines',
    },
    {
      id: 'ref-2',
      type: 'article',
      title: 'WHO Laboratory Manual for Examination of Human Semen, 6th Edition',
      source: 'World Health Organization',
      authors: ['WHO'],
      url: 'https://www.who.int/publications/i/item/9789240030787',
    },
  ],
  crossReferences: [
    { targetId: 'reproductive-fertility', targetType: 'process', relationship: 'related', label: 'Fertility' },
    { targetId: 'reproductive-hormones', targetType: 'process', relationship: 'related', label: 'Reproductive Hormones' },
    { targetId: 'reproductive-erectile-dysfunction', targetType: 'condition', relationship: 'related', label: 'Erectile Dysfunction' },
  ],
  tags: {
    systems: ['reproductive'],
    topics: ['pathology', 'urology', 'infertility', 'ART'],
    keywords: ['male infertility', 'azoospermia', 'oligospermia', 'varicocele', 'ICSI', 'sperm retrieval'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['obstetrics-gynecology', 'surgery'],
    },
  },
  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
