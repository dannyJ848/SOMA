/**
 * Ovaries Anatomy
 *
 * Comprehensive anatomy of the ovaries including structure, function,
 * blood supply, development, and clinical correlations.
 */

import { EducationalContent } from '../../../types';

export const ovariesAnatomy: EducationalContent = {
  id: 'obgyn-anatomy-ovaries',
  type: 'structure',
  name: 'Ovaries',
  alternateNames: ['Female gonads', 'Ovarium'],
  fmaId: 'FMA:7209',

  levels: {
    1: {
      level: 1,
      summary: 'The ovaries are two small organs that store eggs and make important hormones for the body.',
      explanation: `The ovaries are two small, oval-shaped organs about the size of almonds located in a woman's lower belly.

**What the ovaries look like:**
- Size: About the size of a grape or almond (3-5 cm long)
- Shape: Oval, like a small egg
- Location: One on each side of the uterus

**What the ovaries do:**

1. **Store and release eggs:**
   - Girls are born with all their eggs (about 1-2 million!)
   - Starting at puberty, usually one egg is released each month
   - This is called ovulation

2. **Make hormones:**
   - Estrogen: Helps girls develop during puberty and keeps bones strong
   - Progesterone: Helps prepare the body for pregnancy

**Fun facts:**
- By the time a girl reaches puberty, she has about 300,000-400,000 eggs left
- A woman releases about 300-400 eggs during her lifetime
- Only one ovary usually releases an egg each month (they take turns!)`,
      keyTerms: [
        { term: 'ovaries', definition: 'Two small organs that hold eggs and make hormones' },
        { term: 'egg', definition: 'A tiny cell that can become a baby when joined with sperm' },
        { term: 'ovulation', definition: 'When an egg is released from the ovary' },
        { term: 'estrogen', definition: 'A hormone made by the ovaries that helps the body develop' },
      ],
      analogies: [
        'The ovaries are like two small storage rooms that hold thousands of tiny eggs, releasing one each month like a vending machine.',
        'Think of the ovaries as tiny factories that both store products (eggs) and manufacture chemicals (hormones) the body needs.',
      ],
      examples: [
        'When a girl goes through puberty, her ovaries start releasing eggs and making more hormones.',
        'If a woman has one ovary removed, the other ovary can still release eggs and make hormones.',
      ],
    },
    2: {
      level: 2,
      summary: 'The ovaries are paired female gonads that produce oocytes (eggs) for reproduction and synthesize steroid hormones (estrogen and progesterone) that regulate the menstrual cycle and secondary sexual characteristics.',
      explanation: `**Anatomy Overview:**

**Size and Location:**
- Dimensions: 3-5 cm long, 1.5-3 cm wide, 1-1.5 cm thick
- Weight: 5-8 grams each
- Position: Lateral to uterus, suspended from posterior broad ligament
- Location changes with age, pregnancy, and pelvic pathology

**External Structure:**
- Smooth surface in young girls
- Becomes irregular after puberty due to ovulation scars
- Covered by simple cuboidal epithelium (germinal epithelium)
- Tunica albuginea (white fibrous capsule) beneath surface

**Internal Structure:**

1. **Cortex (outer region):**
   - Contains follicles in various developmental stages
   - Primordial follicles: Smallest, contain immature eggs
   - Primary, secondary, tertiary follicles: Progressive maturation
   - Graafian follicle: Mature, ready to release egg
   - Corpus luteum: Forms after egg release

2. **Medulla (inner region):**
   - Contains blood vessels, lymphatics, nerves
   - Loose connective tissue
   - No follicles

**Supporting Structures:**
- **Mesovarium**: Attaches ovary to broad ligament
- **Ovarian ligament**: Connects ovary to uterus
- **Suspensory ligament**: Contains ovarian vessels; connects to pelvic wall

**Functions:**
1. **Gametogenesis**: Production and maturation of eggs (oocytes)
2. **Steroidogenesis**: Production of estrogen, progesterone, and some androgens`,
      keyTerms: [
        { term: 'follicle', definition: 'A fluid-filled sac in the ovary that contains a developing egg', pronunciation: 'FOLL-ih-kul' },
        { term: 'corpus luteum', definition: 'Structure that forms from follicle after egg release; produces progesterone', pronunciation: 'KOR-pus LOO-tee-um' },
        { term: 'oocyte', definition: 'Medical term for an egg cell', pronunciation: 'OH-oh-site' },
        { term: 'gonad', definition: 'An organ that produces reproductive cells; ovary in females, testis in males' },
      ],
      analogies: [
        'Follicles are like nests in the ovary, each protecting and nurturing a developing egg until it is ready to be released.',
        'The corpus luteum is like a temporary factory that sets up shop after ovulation to make progesterone for about two weeks.',
      ],
    },
    3: {
      level: 3,
      summary: 'The ovaries are paired intraperitoneal organs with dual functions of oogenesis and steroid hormone biosynthesis, featuring a cortex containing follicles at various maturational stages and a vascular medulla, supported by the mesovarium, ovarian ligament, and suspensory ligament.',
      explanation: `**Detailed Anatomy:**

**Gross Structure:**
- Position: Ovarian fossa (lateral pelvic wall)
- Bounded by: External iliac vessels (superiorly), internal iliac vessels (posteriorly), ureter (medially)
- Peritoneal covering: Only at mesovarium attachment; rest is intraperitoneal but not covered by peritoneum

**Histological Layers:**

1. **Surface epithelium (germinal epithelium):**
   - Simple cuboidal/low columnar
   - Misnomer: Does not produce germ cells
   - Site of origin for epithelial ovarian tumors

2. **Tunica albuginea:**
   - Dense connective tissue
   - Supports underlying cortex

3. **Cortex:**
   - Follicles in various stages:
     - Primordial: ~25 μm, single flat granulosa layer
     - Primary: Cuboidal granulosa, zona pellucida forming
     - Secondary: Multiple granulosa layers, theca forming
     - Antral (tertiary): Fluid-filled antrum, cumulus oophorus
     - Graafian (preovulatory): 20+ mm, ready for ovulation
   - Stroma: Spindle cells, steroidogenic capacity
   - Corpora lutea, corpora albicantia (regressed CL)

4. **Medulla:**
   - Hilar region with vessels and nerves
   - Remnant rete ovarii

**Ligamentous Support:**
| Ligament | Origin | Insertion | Contents |
|----------|--------|-----------|----------|
| Mesovarium | Posterior broad ligament | Ovarian hilum | Vessels, nerves |
| Ovarian ligament | Uterine cornu | Ovarian medial pole | Fibromuscular tissue |
| Suspensory (infundibulopelvic) | Pelvic sidewall | Ovarian lateral pole | Ovarian vessels, nerves |

**Blood Supply:**
- Ovarian artery: Direct from abdominal aorta (L2 level)
- Course: Retroperitoneal → suspensory ligament → mesovarium
- Anastomosis: With uterine artery at utero-ovarian junction

**Venous Drainage:**
- Pampiniform plexus → ovarian veins
- Right ovarian vein → IVC
- Left ovarian vein → Left renal vein

**Lymphatic Drainage:**
- Para-aortic lymph nodes (at level of renal vessels)
- Important for ovarian cancer staging

**Innervation:**
- Sympathetic: Ovarian plexus (from aortic plexus)
- T10-11 dermatome for referred pain`,
      keyTerms: [
        { term: 'zona pellucida', definition: 'Glycoprotein layer surrounding oocyte; site of sperm binding', pronunciation: 'ZOH-nuh peh-LOO-sih-duh' },
        { term: 'cumulus oophorus', definition: 'Mass of granulosa cells surrounding oocyte in mature follicle', pronunciation: 'KYOO-myoo-lus oh-OFF-or-us' },
        { term: 'theca cells', definition: 'Outer follicle cells that produce androgens for estrogen synthesis' },
        { term: 'pampiniform plexus', definition: 'Network of veins draining the ovary' },
      ],
      clinicalNotes: 'The suspensory ligament contains the ovarian vessels and must be carefully identified during oophorectomy. Left ovarian vein drainage to the left renal vein explains higher incidence of left varicocele and potential for left renal tumor compression affecting ovarian drainage.',
    },
    4: {
      level: 4,
      summary: 'Ovarian function involves intricate coordination between oocyte development, folliculogenesis, and steroidogenesis through the two-cell two-gonadotropin model, with hypothalamic-pituitary-ovarian axis regulation and intraovarian paracrine signaling.',
      explanation: `**Folliculogenesis:**

**Follicle Development Stages:**

1. **Primordial follicles:**
   - Oocyte arrested in prophase I (formed in fetal life)
   - Single layer of flat granulosa cells
   - Remain dormant until recruitment
   - Pool: ~300,000 at puberty

2. **Primary follicle:**
   - Triggered: Unknown initiating factors, PI3K/Akt pathway
   - Granulosa becomes cuboidal
   - Zona pellucida begins forming
   - Gonadotropin-independent

3. **Secondary follicle:**
   - Multiple granulosa layers
   - Theca interna/externa differentiate
   - Still gonadotropin-independent

4. **Antral (tertiary) follicle:**
   - FSH-dependent growth
   - Fluid-filled antrum
   - Theca develops LH receptors
   - Granulosa develops FSH receptors
   - Estrogen production begins

5. **Graafian (preovulatory) follicle:**
   - Dominant follicle (~20-25 mm)
   - LH surge triggers ovulation
   - Oocyte completes meiosis I

**Two-Cell Two-Gonadotropin Model:**

| Cell Type | Gonadotropin | Product | Pathway |
|-----------|--------------|---------|---------|
| Theca | LH | Androstenedione | Cholesterol → pregnenolone → DHEA → androstenedione |
| Granulosa | FSH | Estradiol | Androstenedione → estrone → estradiol (via aromatase) |

**Ovulation Mechanism:**
1. LH surge (positive feedback from high estradiol)
2. Resumption of meiosis I
3. Follicular wall breakdown (proteases, prostaglandins)
4. Stigma formation and rupture
5. Oocyte release with cumulus cells

**Corpus Luteum:**
- Forms from ruptured follicle
- Luteinized granulosa + theca cells
- Produces progesterone + estradiol
- Lifespan: 14 days (without hCG)
- hCG extends function in pregnancy (corpus luteum of pregnancy)

**Intraovarian Regulators:**

*Stimulatory:*
- IGF-1, EGF: Enhance gonadotropin action
- Activin: Increases FSH receptor expression

*Inhibitory:*
- AMH: Inhibits primordial follicle recruitment
- Inhibin B: Suppresses FSH (follicular phase)
- Inhibin A: Suppresses FSH (luteal phase)
- Follistatin: Binds/inactivates activins

**Oocyte Quality:**
- Age-dependent decline
- Increased aneuploidy with age
- Mitochondrial dysfunction
- Oxidative stress accumulation`,
      keyTerms: [
        { term: 'aromatase', definition: 'Enzyme (CYP19A1) that converts androgens to estrogens in granulosa cells' },
        { term: 'AMH', definition: 'Anti-Mullerian hormone; marker of ovarian reserve produced by small antral follicles' },
        { term: 'stigma', definition: 'Avascular area on follicle surface where rupture occurs during ovulation' },
        { term: 'luteinization', definition: 'Transformation of granulosa and theca cells into luteal cells after ovulation' },
      ],
      clinicalNotes: 'AMH is used to assess ovarian reserve in fertility evaluation. Levels decline with age and predict response to ovarian stimulation. Low AMH (<1 ng/mL) suggests diminished reserve. AFC (antral follicle count) on ultrasound provides complementary information.',
    },
    5: {
      level: 5,
      summary: 'Contemporary understanding of ovarian biology encompasses molecular mechanisms of follicle selection, oocyte meiotic competence, steroidogenic enzyme regulation, and clinical applications including ovarian reserve testing, controlled ovarian hyperstimulation, and fertility preservation strategies.',
      explanation: `**Molecular Regulation of Folliculogenesis:**

**Primordial Follicle Activation:**
- Dormancy maintained by: PTEN, FOXO3, TSC1/2
- Activation via PI3K/Akt/mTOR pathway
- KIT/KITL signaling
- Aberrant activation → premature ovarian insufficiency (POI)

**Dominant Follicle Selection:**
- FSH threshold concept
- Selected follicle: Higher FSH receptor expression
- Produces inhibin B → ↓FSH → atresia of other follicles
- Acquires LH receptors (granulosa)
- Positive estradiol feedback → LH surge

**Oocyte Meiotic Competence:**
- Prophase I arrest: High cAMP maintained by GPR3
- LH surge: ↓cAMP → CDK1/Cyclin B activation (MPF)
- Germinal vesicle breakdown (GVBD)
- Meiosis I completion → polar body I extrusion
- Arrest at metaphase II (CSF activity: Mos, MAPK)
- Fertilization triggers meiosis II completion

**Steroidogenic Regulation:**

*Theca cells:*
- LH → cAMP → StAR protein → cholesterol transport
- Side-chain cleavage (CYP11A1)
- 17α-hydroxylase/17,20-lyase (CYP17A1)
- Product: Androstenedione

*Granulosa cells:*
- FSH → aromatase (CYP19A1) induction
- Androgen substrate from theca
- 17β-HSD converts estrone → estradiol

**Ovarian Reserve Assessment:**

| Marker | Timing | Normal | Interpretation |
|--------|--------|--------|----------------|
| AMH | Any day | 1.0-4.0 ng/mL | Declines with age; predicts IVF response |
| AFC | Day 2-4 | 10-20 | Antral follicles 2-10mm bilaterally |
| FSH | Day 3 | <10 IU/L | Elevated suggests diminished reserve |
| Estradiol | Day 3 | <80 pg/mL | Elevated with FSH suggests poor reserve |
| Inhibin B | Day 3 | >45 pg/mL | Low levels concerning |

**Controlled Ovarian Hyperstimulation:**

*Protocols:*
- GnRH agonist long: Pituitary downregulation, then gonadotropins
- GnRH antagonist: Gonadotropins with antagonist to prevent LH surge
- Mild stimulation: Lower doses, fewer eggs, reduced OHSS risk

*Trigger options:*
- hCG: Standard, risk of OHSS
- GnRH agonist: Flare-up of endogenous LH; safer but weaker luteal phase
- Dual trigger: hCG + GnRH agonist

**Ovarian Hyperstimulation Syndrome (OHSS):**
- Pathophysiology: VEGF-mediated vascular permeability
- Risk factors: Young age, low BMI, PCOS, high AMH, many follicles
- Prevention: GnRH agonist trigger, freeze-all strategy, cabergoline
- Management: Fluid resuscitation, thromboprophylaxis, paracentesis

**Fertility Preservation:**

*Oocyte cryopreservation:*
- Vitrification (rapid freezing): Standard technique
- Survival rates: >90%
- Recommended for: Cancer patients, social indications

*Ovarian tissue cryopreservation:*
- Cortical strips frozen
- Orthotopic transplantation
- Live births reported
- Indications: Prepubertal patients, urgent treatment needed

*Ovarian transposition (oophoropexy):*
- Move ovaries out of radiation field
- Success depends on scatter radiation

**Ovarian Pathology Pearls:**

*Polycystic ovary morphology:*
- Rotterdam criteria: ≥12 antral follicles per ovary OR volume >10 mL
- 2018 update: ≥20 follicles/ovary with modern ultrasound
- Hyperandrogenism + ovulatory dysfunction + morphology = PCOS

*Primary ovarian insufficiency:*
- FSH >40 IU/L (two measurements, 1 month apart)
- <40 years of age
- Etiologies: Idiopathic (50%), autoimmune, genetic (FMR1, X abnormalities)

*Epithelial ovarian cancer origins:*
- Traditional: Surface epithelium transformation
- Current paradigm: Fallopian tube fimbrial origin (especially high-grade serous)
- STIC lesions: Serous tubal intraepithelial carcinoma
- Implications: Opportunistic salpingectomy at benign surgery

**Surgical Considerations:**
- Ovarian drilling: Laparoscopic ovarian diathermy for PCOS (ovulation induction resistant)
- Ovarian cystectomy: Stripping technique; concern for reserve impact
- Salpingo-oophorectomy: Prophylactic for BRCA mutation carriers`,
      keyTerms: [
        { term: 'STIC', definition: 'Serous tubal intraepithelial carcinoma; precursor lesion for high-grade serous ovarian cancer arising in fimbria' },
        { term: 'vitrification', definition: 'Ultra-rapid cryopreservation technique that prevents ice crystal formation; standard for oocyte/embryo freezing' },
        { term: 'OHSS', definition: 'Ovarian hyperstimulation syndrome; iatrogenic complication of gonadotropin stimulation with fluid shifts' },
        { term: 'MPF', definition: 'Maturation promoting factor (CDK1/Cyclin B); drives oocyte meiotic resumption' },
      ],
      clinicalNotes: 'Opportunistic salpingectomy at the time of benign gynecologic surgery is increasingly recommended to reduce ovarian cancer risk, as evidence supports fallopian tube fimbrial origin for high-grade serous carcinoma. For BRCA carriers, risk-reducing salpingo-oophorectomy is recommended by age 35-40 (BRCA1) or 40-45 (BRCA2).',
    },
  },

  media: [
    {
      id: 'ovary-anatomy-1',
      type: 'diagram',
      filename: 'ovary-cross-section.svg',
      title: 'Ovarian Cross-Section',
      description: 'Diagram showing cortex, medulla, and follicles at various stages',
    },
    {
      id: 'ovary-anatomy-2',
      type: 'diagram',
      filename: 'follicle-development.svg',
      title: 'Follicle Development Stages',
      description: 'Primordial through Graafian follicle development',
    },
  ],

  citations: [
    {
      id: 'williams-gyn-ovary',
      type: 'textbook',
      title: 'Reproductive Endocrinology',
      source: 'Williams Gynecology, 4th Edition',
      chapter: '15',
      license: 'Copyrighted',
    },
    {
      id: 'openstax-ovary',
      type: 'textbook',
      title: 'Anatomy and Physiology of the Ovary',
      source: 'OpenStax Anatomy and Physiology 2e',
      chapter: '27.2',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/27-2-anatomy-and-physiology-of-the-female-reproductive-system',
      license: 'CC BY 4.0',
    },
  ],

  crossReferences: [
    { targetId: 'obgyn-anatomy-female-reproductive-overview', targetType: 'structure', relationship: 'parent', label: 'Female Reproductive System' },
    { targetId: 'obgyn-physiology-ovarian-cycle', targetType: 'pathway', relationship: 'related', label: 'Ovarian Cycle' },
    { targetId: 'obgyn-conditions-pcos', targetType: 'condition', relationship: 'see-also', label: 'PCOS' },
    { targetId: 'obgyn-oncology-ovarian-cancer', targetType: 'condition', relationship: 'see-also', label: 'Ovarian Cancer' },
  ],

  tags: {
    systems: ['reproductive', 'endocrine'],
    structures: ['FMA:7209', 'ovary'],
    topics: ['anatomy', 'gynecology', 'endocrinology'],
    keywords: ['ovary', 'ovaries', 'follicle', 'oocyte', 'estrogen', 'progesterone'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['obgyn'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
