/**
 * Gonads - Endocrine Function (Anatomy)
 *
 * The ovaries and testes as endocrine organs producing sex hormones
 * (estrogen, progesterone, testosterone) for reproduction and development.
 */

import { EducationalContent } from '../../types';

export const GONADS_ENDOCRINE_ANATOMY: EducationalContent = {
  id: 'anatomy-gonads-endocrine',
  type: 'structure',
  name: 'Gonads (Endocrine Function)',
  alternateNames: ['Sex glands', 'Reproductive endocrine organs', 'Ovaries and Testes'],
  fmaId: 'FMA:18250',

  levels: {
    1: {
      level: 1,
      summary: 'The gonads are your sex glands - ovaries in females and testes in males - that make hormones controlling puberty, reproduction, and many other body functions.',
      explanation: `The gonads are special organs that do two important jobs:
1. Make reproductive cells (eggs in ovaries, sperm in testes)
2. Make sex hormones that control how your body develops

**In Females: Ovaries**
Girls have two ovaries (about the size of almonds) in their lower belly. The ovaries make:
- **Estrogen** - Helps develop breast, widens hips, starts menstrual cycle
- **Progesterone** - Prepares the body for pregnancy

**In Males: Testes**
Boys have two testes (testicles) in a sac called the scrotum. The testes make:
- **Testosterone** - Deepens voice, builds muscles, grows facial hair

**What Do These Hormones Do?**

*At Puberty:*
- Trigger growth spurts
- Develop adult body features
- Start ability to have children

*Throughout Life:*
- Maintain bone strength
- Affect mood and energy
- Keep reproductive organs healthy

**Fun Fact:** Before puberty, boys and girls have similar amounts of sex hormones. The big changes happen when the brain signals the gonads to "turn on" during puberty!`,
      keyTerms: [
        { term: 'gonads', definition: 'The sex glands - ovaries in females and testes in males' },
        { term: 'estrogen', definition: 'The main female hormone that develops female body characteristics' },
        { term: 'testosterone', definition: 'The main male hormone that develops male body characteristics' },
        { term: 'puberty', definition: 'The time when your body changes from a child to an adult' },
      ],
      analogies: [
        'The gonads are like factories with two production lines - one making reproductive cells and another making hormones.',
        'Sex hormones are like construction workers that build and maintain your adult body features.',
      ],
      examples: [
        'When a boy\'s voice "cracks" during puberty, it is testosterone from his testes changing his vocal cords.',
        'Monthly menstrual cycles in women are controlled by hormones from the ovaries.',
      ],
    },
    2: {
      level: 2,
      summary: 'The gonads (ovaries and testes) are endocrine glands regulated by the hypothalamic-pituitary-gonadal axis, producing sex steroids (estrogens, progesterone, testosterone) that control sexual development, reproduction, and influence bone, muscle, brain, and cardiovascular systems.',
      explanation: `**Overview:**
The gonads have dual functions:
- **Gametogenesis**: Production of reproductive cells (oocytes/sperm)
- **Steroidogenesis**: Production of sex hormones

**Female Gonads: Ovaries**

*Location:* Lateral pelvic wall, near fimbriae of fallopian tubes
*Size:* 3-5 cm long, 1.5-3 cm wide, ~7 grams each

*Hormone-Producing Structures:*
| Structure | Hormone | Timing |
|-----------|---------|--------|
| Granulosa cells | Estrogen (estradiol) | Follicular phase |
| Theca cells | Androgens (converted to estrogen) | All cycle |
| Corpus luteum | Progesterone, estrogen | Luteal phase |
| Stroma | Androgens | All cycle |

*Monthly Cycle:*
1. Follicular phase: Rising estrogen, developing follicle
2. Ovulation: LH surge triggers egg release
3. Luteal phase: Corpus luteum makes progesterone
4. If no pregnancy: Corpus luteum degenerates, hormones drop, menstruation

**Male Gonads: Testes**

*Location:* Scrotum (outside body for cooler temperature)
*Size:* 4-5 cm long, 2.5-3 cm wide, ~25 grams each

*Hormone-Producing Structures:*
| Structure | Hormone | Function |
|-----------|---------|----------|
| Leydig cells (interstitial) | Testosterone | Male characteristics, sperm production |
| Sertoli cells | Inhibin, AMH | Regulates FSH, supports sperm development |

**Hypothalamic-Pituitary-Gonadal (HPG) Axis:**

\`\`\`
Hypothalamus
    ↓ GnRH
Anterior Pituitary
    ↓ LH and FSH
Gonads
    ↓ Sex steroids
Target tissues + Negative feedback to hypothalamus/pituitary
\`\`\`

**Sex Hormone Actions:**

*Estrogen:*
- Develops female secondary sex characteristics
- Maintains bone density
- Protects cardiovascular system
- Affects mood and cognition

*Progesterone:*
- Prepares uterus for implantation
- Maintains early pregnancy
- Regulates menstrual cycle

*Testosterone:*
- Develops male secondary sex characteristics
- Builds muscle mass
- Maintains libido in both sexes
- Stimulates erythropoiesis`,
      keyTerms: [
        { term: 'HPG axis', definition: 'Hypothalamic-pituitary-gonadal axis; the hormonal feedback system controlling reproduction' },
        { term: 'Leydig cells', definition: 'Testicular cells that produce testosterone, located between seminiferous tubules' },
        { term: 'granulosa cells', definition: 'Ovarian follicle cells that produce estrogen and surround the developing egg' },
        { term: 'corpus luteum', definition: 'Structure formed from the follicle after ovulation that produces progesterone' },
        { term: 'GnRH', definition: 'Gonadotropin-releasing hormone from hypothalamus that controls LH and FSH release' },
        { term: 'inhibin', definition: 'Hormone from gonads that specifically inhibits FSH secretion' },
      ],
      analogies: [
        'The HPG axis works like a thermostat - when hormone levels are high enough, the system turns down production; when levels drop, production increases.',
      ],
    },
    3: {
      level: 3,
      summary: 'The gonads are steroidogenic organs with distinct cellular compartments (theca-granulosa in ovary, Leydig-Sertoli in testis) coordinated by LH and FSH, producing sex steroids via cholesterol-derived biosynthetic pathways regulated by both endocrine and paracrine mechanisms.',
      explanation: `**Ovarian Anatomy and Steroidogenesis:**

*Structural Organization:*
- Cortex: Contains follicles at various stages
- Medulla: Vascular connective tissue
- Surface: Germinal epithelium (misnomer - not germ cell origin)

*Follicle Development Stages:*
1. Primordial follicle: Oocyte + flat granulosa cells
2. Primary follicle: Cuboidal granulosa, zona pellucida forms
3. Secondary (preantral): Multiple granulosa layers, theca develops
4. Tertiary (antral): Fluid-filled antrum, two-cell system active
5. Graafian (preovulatory): Mature, ready for ovulation

*Two-Cell, Two-Gonadotropin Model:*
\`\`\`
LH → Theca cells → Androstenedione
                         ↓
FSH → Granulosa cells → Aromatase → Estradiol
\`\`\`

- Theca cells: Express LH receptors, produce androgens (androstenedione)
- Granulosa cells: Express FSH receptors, aromatize androgens to estrogens
- FSH induces aromatase (CYP19A1) expression

*Corpus Luteum:*
- Forms from collapsed follicle after ovulation
- Luteinized granulosa cells: Large, progesterone-producing
- Luteinized theca cells: Smaller, estrogen-producing
- Requires LH for maintenance
- Lifespan: ~14 days without pregnancy
- hCG from pregnancy maintains CL through first trimester

**Testicular Anatomy and Steroidogenesis:**

*Structural Organization:*
- Seminiferous tubules: 90% of testis, sperm production
- Interstitial tissue: Leydig cells, blood vessels, lymphatics
- Tunica albuginea: Fibrous capsule

*Leydig Cells:*
- Located between seminiferous tubules
- Express LH receptors
- Produce testosterone via:
\`\`\`
Cholesterol → Pregnenolone → 17-OH-Pregnenolone → DHEA → Androstenedione → Testosterone
              (CYP11A1)        (CYP17A1)          (CYP17A1)    (3β-HSD)        (17β-HSD)
\`\`\`
- Also produce small amounts of estradiol

*Sertoli Cells:*
- Line seminiferous tubules ("nurse cells" for sperm)
- Express FSH receptors
- Produce: Inhibin B, AMH, ABP, growth factors
- Form blood-testis barrier
- Express aromatase (local estrogen production)

**Hormone Transport and Metabolism:**

*Sex Hormone Binding Globulin (SHBG):*
- Liver-produced carrier protein
- Binds testosterone (high affinity), estradiol (moderate)
- Only free and albumin-bound hormone is bioactive
- SHBG increased by: Estrogen, hyperthyroidism, aging
- SHBG decreased by: Androgens, obesity, insulin resistance

*Peripheral Conversion:*
- Adipose tissue aromatase: Androgen → Estrogen
- 5α-reductase: Testosterone → DHT (more potent androgen)
- Skin, prostate, hair follicles express 5α-reductase

**Puberty Onset:**

*GnRH Pulse Generator Reactivation:*
- Fetal: Active HPG axis (mid-gestation surge)
- Infancy: "Mini-puberty" in first months of life
- Childhood: GnRH suppressed (central inhibition)
- Puberty: Disinhibition allows GnRH pulsatility

*Kisspeptin-GnRH Pathway:*
- Kisspeptin neurons in arcuate nucleus and AVPV
- Activate GnRH neurons via GPR54 (KISS1R)
- Required for puberty onset and fertility
- Kisspeptin/GPR54 mutations cause hypogonadotropic hypogonadism`,
      keyTerms: [
        { term: 'two-cell model', definition: 'Ovarian steroidogenesis requiring theca (LH) and granulosa (FSH) cell cooperation' },
        { term: 'aromatase', definition: 'CYP19A1 enzyme converting androgens to estrogens; expressed in granulosa cells and adipose tissue' },
        { term: 'SHBG', definition: 'Sex hormone-binding globulin; carrier protein affecting bioavailable testosterone and estrogen' },
        { term: '5α-reductase', definition: 'Enzyme converting testosterone to DHT; target of finasteride' },
        { term: 'kisspeptin', definition: 'Neuropeptide essential for GnRH release and puberty; mutations cause hypogonadism' },
        { term: 'inhibin B', definition: 'Sertoli cell hormone providing negative feedback to FSH' },
      ],
      clinicalNotes: 'Polycystic ovary syndrome (PCOS) involves excess ovarian androgen production and anovulation. Low SHBG (from obesity/insulin resistance) increases free androgens, worsening symptoms. In males, testosterone replacement with exogenous testosterone suppresses LH/FSH via negative feedback, causing testicular atrophy and infertility. hCG can be used to maintain testicular function during testosterone therapy.',
    },
    4: {
      level: 4,
      summary: 'Gonadal endocrine function involves intricate molecular regulation of steroidogenic enzyme expression, receptor-mediated signal transduction, and paracrine networks, with clinical relevance spanning disorders of sexual development, reproductive endocrinology, and hormone-dependent malignancies.',
      explanation: `**Molecular Regulation of Steroidogenesis:**

*Steroidogenic Acute Regulatory Protein (StAR):*
- Rate-limiting for steroidogenesis
- Transports cholesterol to inner mitochondrial membrane
- Acutely regulated by LH/hCG via cAMP
- Mutations cause lipoid CAH (46,XY DSD with female phenotype)

*Key Steroidogenic Enzymes:*

| Enzyme | Gene | Substrate → Product | Clinical Deficiency |
|--------|------|---------------------|---------------------|
| P450scc | CYP11A1 | Cholesterol → Pregnenolone | Lipoid CAH |
| 17α-hydroxylase | CYP17A1 | Pregnenolone → 17-OH-Pregnenolone | Hypertension, 46,XY DSD |
| 3β-HSD | HSD3B2 | DHEA → Androstenedione | Salt-wasting, ambiguous genitalia |
| 17β-HSD | HSD17B3 | Androstenedione → Testosterone | 46,XY DSD |
| 5α-reductase | SRD5A2 | Testosterone → DHT | 46,XY DSD, virilization at puberty |
| Aromatase | CYP19A1 | Androgens → Estrogens | Tall stature, osteoporosis, virilization |

**Sex Steroid Receptors:**

*Estrogen Receptors:*
- ERα (ESR1): Breast, uterus, bone, cardiovascular
- ERβ (ESR2): Ovary, brain, colon
- Nuclear receptors: Ligand binding → dimerization → DNA binding
- Also membrane-bound receptors for rapid non-genomic effects

*Androgen Receptor (AR):*
- X-linked gene
- Nuclear receptor, testosterone and DHT ligands
- DHT binds with higher affinity
- Mutations: Complete androgen insensitivity syndrome (CAIS)

*Progesterone Receptor (PR):*
- PR-A and PR-B isoforms
- Induced by estrogen in target tissues
- Important for uterine receptivity, pregnancy maintenance

**Disorders of Sexual Development (DSD):**

*46,XX DSD (Virilized Female):*
| Cause | Mechanism | Clinical |
|-------|-----------|----------|
| CAH (21-hydroxylase) | Adrenal androgen excess | Ambiguous genitalia, salt-wasting |
| Aromatase deficiency | Cannot convert androgens to estrogens | Virilization, tall stature |
| Maternal androgen exposure | Drug or tumor | Variable virilization |

*46,XY DSD (Undervirilized Male):*
| Cause | Mechanism | Clinical |
|-------|-----------|----------|
| Complete AIS | Nonfunctional AR | Female phenotype, testes, no uterus |
| 5α-reductase deficiency | Low DHT | Female at birth, virilization at puberty |
| 17β-HSD3 deficiency | Low testosterone synthesis | Similar to 5α-reductase |
| Leydig cell hypoplasia | LHCGR mutation | Female or ambiguous phenotype |

**Ovarian Reserve and Reproductive Aging:**

*Follicle Pool:*
- ~1-2 million oocytes at birth
- ~400,000 at puberty
- ~1,000 at menopause
- Only ~400 ovulated in lifetime

*Markers of Ovarian Reserve:*
| Marker | Source | Interpretation |
|--------|--------|----------------|
| AMH | Granulosa cells of growing follicles | Low = diminished reserve |
| Antral follicle count | Ultrasound | Low = diminished reserve |
| Day 3 FSH | Pituitary | High = diminished reserve |
| Day 3 estradiol | Ovary | High (with normal FSH) may mask diminished reserve |

*Menopause Transition:*
- Mean age: 51 years
- FSH and LH increase (loss of negative feedback)
- Estradiol decreases
- AMH becomes undetectable
- Symptoms: Hot flashes, sleep disturbance, vaginal atrophy

**Male Hypogonadism:**

*Classification:*
| Type | Location | LH/FSH | Testosterone | Examples |
|------|----------|--------|--------------|----------|
| Primary | Testis | High | Low | Klinefelter, orchitis, chemotherapy |
| Secondary | Pituitary | Low/normal | Low | Pituitary tumor, hyperprolactinemia |
| Tertiary | Hypothalamus | Low/normal | Low | Kallmann syndrome, stress |

*Late-Onset Hypogonadism:*
- Age-related decline in testosterone
- 1-2% per year after age 30
- SHBG increases → lower free testosterone
- Symptoms: Low libido, fatigue, decreased muscle mass
- Treatment controversy (cardiovascular safety)`,
      keyTerms: [
        { term: 'androgen insensitivity syndrome', definition: 'X-linked AR mutation causing 46,XY individuals to develop female phenotype' },
        { term: 'AMH', definition: 'Anti-Mullerian hormone; marker of ovarian reserve from granulosa cells' },
        { term: 'aromatase inhibitors', definition: 'Drugs blocking estrogen synthesis; used in breast cancer, ovulation induction' },
        { term: 'selective estrogen receptor modulators (SERMs)', definition: 'Drugs with tissue-specific ER agonist/antagonist activity (tamoxifen, raloxifene)' },
        { term: 'late-onset hypogonadism', definition: 'Age-related testosterone decline in men, also called andropause' },
        { term: 'DSD', definition: 'Disorders of sexual development; congenital conditions with atypical chromosomal, gonadal, or anatomic sex' },
      ],
      clinicalNotes: 'In PCOS, elevated LH:FSH ratio (>2:1) and excess ovarian androgens are characteristic. Metformin improves insulin sensitivity and may restore ovulation. Aromatase inhibitors (letrozole) are increasingly used for ovulation induction as first-line over clomiphene. In breast cancer, aromatase inhibitors are preferred in postmenopausal women. For premenopausal breast cancer, ovarian suppression (GnRH agonist) plus aromatase inhibitor improves outcomes over tamoxifen alone in high-risk patients.',
    },
    5: {
      level: 5,
      summary: 'Gonadal endocrine biology integrates developmental genetics, molecular endocrinology, and reproductive physiology with clinical applications spanning fertility preservation, hormone therapy optimization, transgender medicine, and management of hormone-sensitive cancers.',
      explanation: `**Sex Determination and Differentiation Genetics:**

*Genetic Sex Determination:*
- SRY (sex-determining region Y): Master switch for testis development
- Located on Y chromosome short arm
- Activates SOX9 → Sertoli cell differentiation
- SOX9 maintains itself via positive feedback

*Gonadal Differentiation Cascade:*
\`\`\`
46,XY: SRY → SOX9 → Testis
       ↓
     Sertoli cells → AMH → Mullerian regression
     Leydig cells → Testosterone → Wolffian development
                  → DHT → External male genitalia

46,XX: No SRY → WNT4/RSPO1/FOXL2 → Ovary
       ↓
     No AMH → Mullerian structures (uterus, tubes, upper vagina)
     No testosterone → Wolffian regression
     No DHT → Female external genitalia
\`\`\`

*Key Genes in Gonadal Development:*
| Gene | Role | Mutation Phenotype |
|------|------|-------------------|
| SRY | Testis determination | 46,XY gonadal dysgenesis |
| SOX9 | Sertoli cell differentiation | Campomelic dysplasia with 46,XY DSD |
| NR5A1 (SF1) | Gonad and adrenal development | DSD, adrenal insufficiency |
| WT1 | Genital ridge development | Denys-Drash, Frasier syndrome |
| WNT4 | Ovary differentiation, Mullerian development | 46,XX DSD with mullerian agenesis |
| FOXL2 | Granulosa cell differentiation | BPES, adult granulosa cell tumor |

**Fertility Preservation:**

*Female Options:*
| Method | Setting | Considerations |
|--------|---------|----------------|
| Embryo cryopreservation | Partner/donor sperm available | Most established |
| Oocyte cryopreservation | No partner, fertility preservation | Vitrification improved outcomes |
| Ovarian tissue cryopreservation | Prepubertal, no time for stimulation | Experimental, reimplantation |
| GnRH agonist cotreatment | During chemotherapy | May reduce gonadotoxicity |

*Male Options:*
| Method | Setting | Considerations |
|--------|---------|----------------|
| Sperm cryopreservation | Post-pubertal | Standard of care |
| Testicular tissue cryopreservation | Prepubertal | Experimental |
| Testicular sperm extraction (TESE) | Azoospermia | Can retrieve sperm for ICSI |

**Hormone Therapy Optimization:**

*Menopause Hormone Therapy (MHT):*
- Estrogen + Progestin (if uterus present) or Estrogen alone
- Transdermal preferred (lower VTE risk vs. oral)
- Start within 10 years of menopause or <60 years for cardiovascular benefit window
- Contraindications: History of breast cancer, VTE, stroke, MI, liver disease

*Testosterone Therapy in Men:*
- Formulations: Topical gel, injection (cypionate/enanthate), pellets
- Monitor: Testosterone levels (mid-normal), hematocrit (<54%), PSA
- May cause: Erythrocytosis, acne, suppressed spermatogenesis
- Concomitant hCG can preserve fertility

**Gender-Affirming Hormone Therapy:**

*Feminizing Therapy (MTF/Transfeminine):*
- Estradiol: Oral, transdermal, or injectable
- Anti-androgen: Spironolactone, bicalutamide, or GnRH agonist
- Effects: Breast development, fat redistribution, decreased facial/body hair
- Monitoring: Estradiol, testosterone (suppress to female range), prolactin

*Masculinizing Therapy (FTM/Transmasculine):*
- Testosterone: IM injection, transdermal, or SC
- Effects: Voice deepening, facial hair, clitoral growth, menses cessation
- Monitoring: Testosterone (male range), hematocrit, lipids

*Key Considerations:*
- Fertility counseling before therapy (gamete cryopreservation)
- Cardiovascular risk assessment
- Bone density monitoring
- Cancer screening per natal anatomy

**Hormone-Sensitive Cancers:**

*Estrogen Receptor-Positive Breast Cancer:*
- 70% of breast cancers are ER+
- Adjuvant endocrine therapy for 5-10 years
- Premenopausal: Tamoxifen +/- ovarian suppression
- Postmenopausal: Aromatase inhibitor (anastrozole, letrozole, exemestane)
- CDK4/6 inhibitors added for metastatic disease

*Prostate Cancer:*
- Androgen deprivation therapy (ADT): GnRH agonist or antagonist
- Initial GnRH agonist → testosterone flare → requires anti-androgen cover
- GnRH antagonist (degarelix): No flare
- Castration-resistant prostate cancer: Novel agents (abiraterone, enzalutamide)

*Ovarian Cancer:*
- Less hormone-dependent than breast/prostate
- Granulosa cell tumors produce estrogen
- May respond to aromatase inhibitors or GnRH agonists

**Emerging Therapies:**

*Oral GnRH Antagonists:*
- Elagolix, relugolix: Oral alternatives to injectable GnRH agonists
- Elagolix approved for endometriosis, uterine fibroids
- Relugolix approved for prostate cancer (no testosterone flare)

*Kisspeptin Analogs:*
- Potential for hypothalamic amenorrhea treatment
- Investigational for IVF trigger (alternative to hCG)
- May reduce OHSS risk

*Selective Progesterone Receptor Modulators (SPRMs):*
- Ulipristal acetate: Uterine fibroid treatment
- Mifepristone: Uterine fibroid, Cushing syndrome applications

**Neuroendocrine Control Updates:**

*GnRH Neuron Network:*
- GnRH neurons migrate from olfactory placode
- Kallmann syndrome: Anosmin-1 (KAL1) mutation → migration failure
- ~1500 GnRH neurons coordinate pulsatile release
- KNDy neurons (kisspeptin/neurokinin B/dynorphin) drive pulse generator

*Seasonal and Stress Effects:*
- Hypothalamic amenorrhea from energy deficit, stress
- Requires adequate leptin signaling to kisspeptin neurons
- GnRH pulse frequency determines LH:FSH ratio`,
      keyTerms: [
        { term: 'SRY', definition: 'Sex-determining region Y; master genetic switch for testis development' },
        { term: 'KNDy neurons', definition: 'Kisspeptin/neurokinin B/dynorphin neurons in arcuate nucleus driving GnRH pulse generator' },
        { term: 'gender-affirming hormone therapy', definition: 'Hormone treatment to develop secondary sex characteristics consistent with gender identity' },
        { term: 'aromatase inhibitor', definition: 'Drug blocking estrogen synthesis; anastrozole, letrozole, exemestane' },
        { term: 'castration-resistant prostate cancer', definition: 'Prostate cancer progressing despite testosterone at castrate levels' },
        { term: 'fertility preservation', definition: 'Procedures to save gametes or gonadal tissue before gonadotoxic treatment' },
      ],
      clinicalNotes: 'Fertility preservation should be discussed with all patients of reproductive age before gonadotoxic chemotherapy or radiation. AMH can be measured at any point in the menstrual cycle. In transgender patients, maintaining some estrogen exposure (from endogenous production or therapy) is important for bone health. Long-term testosterone use in transgender men may increase cardiovascular risk, requiring monitoring. Current guidelines recommend continuing cancer screening based on anatomy present regardless of gender identity.',
    },
  },

  media: [
    {
      id: 'ovary-anatomy-1',
      type: 'diagram',
      filename: 'ovary-follicle-development.svg',
      title: 'Ovarian Follicle Development',
      description: 'Stages of follicle maturation and hormone production',
    },
    {
      id: 'testis-anatomy-1',
      type: 'diagram',
      filename: 'testis-histology-diagram.svg',
      title: 'Testis Histological Organization',
      description: 'Seminiferous tubules, Leydig cells, and Sertoli cells',
    },
  ],

  citations: [
    {
      id: 'speroff-reproductive',
      type: 'textbook',
      title: 'Clinical Gynecologic Endocrinology and Infertility',
      authors: ['Speroff, L', 'Fritz, MA'],
      source: 'Lippincott Williams & Wilkins',
      license: 'Copyrighted',
    },
    {
      id: 'endocrine-society-testosterone',
      type: 'article',
      title: 'Testosterone Therapy in Men With Hypogonadism',
      source: 'Journal of Clinical Endocrinology and Metabolism',
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'anatomy-hypothalamus', targetType: 'structure', relationship: 'related', label: 'Hypothalamus (GnRH)' },
    { targetId: 'anatomy-pituitary-anterior', targetType: 'structure', relationship: 'related', label: 'Anterior Pituitary (LH/FSH)' },
    { targetId: 'physiology-reproductive-cycle', targetType: 'pathway', relationship: 'related', label: 'Menstrual Cycle' },
    { targetId: 'pathology-pcos', targetType: 'condition', relationship: 'see-also', label: 'PCOS' },
    { targetId: 'pathology-hypogonadism', targetType: 'condition', relationship: 'see-also', label: 'Hypogonadism' },
  ],

  tags: {
    systems: ['endocrine', 'reproductive'],
    structures: ['FMA:18250', 'gonads', 'ovary', 'testis'],
    topics: ['anatomy', 'reproductive endocrinology'],
    keywords: ['gonads', 'ovaries', 'testes', 'estrogen', 'testosterone', 'progesterone', 'puberty', 'fertility'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['endocrinology', 'obgyn', 'medicine'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
