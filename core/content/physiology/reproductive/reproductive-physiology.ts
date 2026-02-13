/**
 * Reproductive Physiology - Comprehensive Educational Content
 *
 * Covers male and female reproductive physiology:
 * - Spermatogenesis and testosterone regulation (HPG axis)
 * - Oogenesis and the menstrual cycle (follicular, ovulatory, luteal phases)
 * - Fertilization and implantation
 * - Pregnancy physiology (hCG, placental hormones, maternal adaptations)
 * - Lactation physiology (prolactin, oxytocin)
 */

import { EducationalContent } from '../../types';

export const reproductivePhysiology: EducationalContent = {
  id: 'physiology-reproductive-system',
  type: 'process',
  name: 'Reproductive Physiology',
  nameEs: 'Fisiologia Reproductiva',
  alternateNames: [
    'Human Reproduction',
    'Reproductive Endocrinology',
    'HPG Axis Physiology',
  ],

  levels: {
    1: {
      level: 1,
      summary:
        'The reproductive system lets humans create new life. Special hormones from the brain control how the male and female bodies prepare for and support pregnancy.',
      explanation: `## How Your Body Prepares for New Life

### The Brain is in Charge

Just like with other body systems, a small area in your brain called the **hypothalamus** sends signals to the **pituitary gland**. Together they tell the reproductive organs what to do by sending chemical messengers called hormones.

### The Male Reproductive System

Males make tiny cells called **sperm** inside their testicles. This process starts during puberty and continues throughout life.

- The brain sends hormones called **LH** and **FSH** to the testicles
- The testicles make **testosterone**, the main male hormone
- Testosterone causes a deeper voice, facial hair, and muscle growth during puberty
- Sperm take about **10 weeks** to fully develop
- Millions of sperm are made every day

### The Female Reproductive System

Females are born with all the eggs they will ever have. Starting at puberty, one egg usually matures each month.

- The brain sends **LH** and **FSH** to the ovaries
- The ovaries make **estrogen** and **progesterone**
- Estrogen causes breast development and wider hips during puberty
- Each month the body prepares for a possible pregnancy -- this is the **menstrual cycle**
- If no pregnancy occurs, the uterus lining sheds (a period), and the cycle starts over

### How Pregnancy Begins

- A sperm cell meets an egg cell -- this is called **fertilization**
- The fertilized egg travels to the uterus and attaches to the wall -- this is **implantation**
- A special organ called the **placenta** grows to feed and protect the developing baby
- Pregnancy lasts about **9 months** (40 weeks)

### Feeding the Baby: Breast Milk

After birth, the mother's body makes breast milk.

- A hormone called **prolactin** tells the breasts to make milk
- Another hormone called **oxytocin** helps push the milk out when the baby nurses
- Oxytocin is sometimes called the "bonding hormone" because it helps mother and baby feel close`,
      keyTerms: [
        { term: 'sperm', definition: 'The tiny male reproductive cell made in the testicles' },
        { term: 'egg (ovum)', definition: 'The female reproductive cell stored in the ovaries', pronunciation: 'OH-vum' },
        { term: 'testosterone', definition: 'The main male hormone that causes puberty changes and sperm production', pronunciation: 'tess-TOSS-ter-own' },
        { term: 'estrogen', definition: 'The main female hormone that causes puberty changes and prepares the body for pregnancy', pronunciation: 'ESS-troh-jen' },
        { term: 'menstrual cycle', definition: 'The monthly process where the female body prepares for pregnancy; lasts about 28 days', pronunciation: 'MEN-stroo-ul' },
        { term: 'placenta', definition: 'A special organ that grows during pregnancy to feed and protect the baby', pronunciation: 'plah-SEN-tah' },
        { term: 'prolactin', definition: 'A hormone that tells the breasts to make milk after a baby is born', pronunciation: 'pro-LAK-tin' },
      ],
      analogies: [
        'The menstrual cycle is like preparing a guest room each month -- the uterus sets up a soft lining in case a fertilized egg arrives. If no guest comes, the room is cleared out and prepared fresh for next month.',
        'The placenta works like a supply station between mother and baby -- it delivers food and oxygen to the baby and takes away waste, without mixing their blood together.',
        'Prolactin and oxytocin work like a factory team -- prolactin makes the milk (the factory worker) and oxytocin delivers it (the delivery driver).',
      ],
      examples: [
        'Puberty usually begins between ages 8-13 in girls and 9-14 in boys, when the brain starts sending reproductive hormones.',
        'A woman who is breastfeeding may notice milk flow when she hears her baby cry -- that is oxytocin at work.',
      ],
      patientCounselingPoints: [
        'Everyone goes through puberty at different times, and that is completely normal.',
        'The menstrual cycle length can vary from person to person; not everyone has a 28-day cycle.',
      ],
    },

    2: {
      level: 2,
      summary:
        'The hypothalamic-pituitary-gonadal (HPG) axis controls reproductive function in both sexes. Males produce sperm continuously via spermatogenesis regulated by testosterone. Females undergo a monthly menstrual cycle with follicular, ovulatory, and luteal phases driven by estrogen and progesterone.',
      explanation: `## The HPG Axis and Reproductive Hormones

### Hypothalamic-Pituitary-Gonadal Axis

The **hypothalamus** releases **GnRH** (gonadotropin-releasing hormone), which tells the pituitary to release two key hormones:

- **FSH** (follicle-stimulating hormone): stimulates gamete development
- **LH** (luteinizing hormone): triggers hormone production and ovulation

Like other hormone axes, the HPG axis uses **negative feedback** -- when sex hormone levels rise, they signal back to reduce GnRH, FSH, and LH.

### Male Reproductive Physiology

**Spermatogenesis** occurs in the **seminiferous tubules** of the testes:
- FSH acts on **Sertoli cells** (nurse cells that support sperm development)
- LH acts on **Leydig cells** to produce testosterone
- The process takes about 74 days from stem cell to mature sperm
- Sertoli cells also produce **inhibin**, which feeds back to suppress FSH

**Testosterone effects:**
- Development of male reproductive organs
- Secondary sex characteristics (voice deepening, body hair, muscle mass)
- Maintenance of libido and sperm production
- Bone density and red blood cell production

### Female Reproductive Physiology

The **menstrual cycle** averages 28 days with three phases:

**1. Follicular Phase (Days 1-13):**
- FSH stimulates several ovarian follicles to grow
- Growing follicles produce increasing amounts of **estrogen**
- Usually one dominant follicle emerges
- Estrogen causes the uterine lining (endometrium) to thicken

**2. Ovulation (Day 14):**
- Rising estrogen triggers a surge of **LH** from the pituitary
- The LH surge causes the dominant follicle to release its egg
- This is the most fertile time of the cycle

**3. Luteal Phase (Days 15-28):**
- The empty follicle becomes the **corpus luteum**
- The corpus luteum produces **progesterone** and estrogen
- Progesterone makes the endometrium receptive for implantation
- If no pregnancy occurs, the corpus luteum degrades, hormones drop, and menstruation begins

### Fertilization and Early Pregnancy

- Fertilization occurs in the **fallopian tube**
- The fertilized egg (zygote) divides as it travels to the uterus
- **Implantation** occurs about 6-7 days after fertilization
- The embryo produces **hCG** (human chorionic gonadotropin), which rescues the corpus luteum
- hCG is detected by pregnancy tests

### Pregnancy Hormones

- The **placenta** takes over hormone production by about week 10
- It produces estrogen, progesterone, and **hPL** (human placental lactogen)
- These hormones maintain the uterine lining and support fetal growth

### Lactation

- **Prolactin** from the anterior pituitary stimulates milk production
- **Oxytocin** from the posterior pituitary causes the "let-down reflex" (milk ejection)
- Suckling by the infant stimulates both prolactin and oxytocin release
- Prolactin also suppresses GnRH, which is why breastfeeding can delay return of menstruation`,
      keyTerms: [
        { term: 'GnRH', definition: 'Gonadotropin-releasing hormone; released by the hypothalamus to control FSH and LH from the pituitary', pronunciation: 'gon-AD-oh-TRO-pin' },
        { term: 'spermatogenesis', definition: 'The process of sperm cell development in the seminiferous tubules, taking about 74 days', pronunciation: 'sper-MAT-oh-JEN-eh-sis' },
        { term: 'Sertoli cells', definition: 'Nurse cells in the testes that support and nourish developing sperm; produce inhibin', pronunciation: 'ser-TOE-lee' },
        { term: 'Leydig cells', definition: 'Cells in the testes that produce testosterone in response to LH', pronunciation: 'LY-dig' },
        { term: 'corpus luteum', definition: 'The structure that forms from the empty follicle after ovulation; produces progesterone', pronunciation: 'KOR-pus LOO-tee-um' },
        { term: 'hCG', definition: 'Human chorionic gonadotropin; hormone made by the embryo that maintains the corpus luteum and is detected by pregnancy tests' },
        { term: 'endometrium', definition: 'The inner lining of the uterus that thickens each cycle and sheds during menstruation', pronunciation: 'en-doh-MEE-tree-um' },
      ],
      analogies: [
        'The LH surge at ovulation is like a starting pistol -- estrogen builds up slowly (the countdown), and when it reaches a critical level, LH fires to release the egg.',
        'The corpus luteum is like a temporary factory -- it runs for about two weeks making progesterone, then shuts down unless hCG from a pregnancy keeps it going.',
      ],
      examples: [
        'Pregnancy tests detect hCG in urine, which is why they work about two weeks after fertilization when hCG levels are high enough.',
        'Birth control pills contain synthetic estrogen and progesterone that suppress the LH surge, preventing ovulation.',
      ],
    },

    3: {
      level: 3,
      summary:
        'Reproductive physiology integrates pulsatile GnRH signaling, gonadotropin regulation of gametogenesis and steroidogenesis, the hormonal orchestration of the menstrual cycle with dual feedback mechanisms, fertilization and implantation biology, placental endocrinology, and the neuroendocrine regulation of lactation.',
      explanation: `## Neuroendocrine Control of Reproduction

### GnRH Pulsatility and Gonadotropin Regulation

GnRH is secreted in a **pulsatile fashion** from the arcuate nucleus of the hypothalamus into the hypophyseal portal system. Pulse frequency determines which gonadotropin predominates:

- **Fast pulses (~every 60 min)**: favor LH secretion
- **Slow pulses (~every 2-4 hours)**: favor FSH secretion
- **Continuous GnRH**: paradoxically downregulates both LH and FSH (basis for GnRH agonist therapy)

### Male Reproductive Endocrinology

**Spermatogenesis pathway:**
1. **Spermatogonia** (diploid stem cells) undergo mitosis
2. **Primary spermatocytes** undergo meiosis I -> secondary spermatocytes
3. Meiosis II produces **spermatids** (haploid)
4. **Spermiogenesis**: spermatids differentiate into mature spermatozoa (acrosome formation, flagellum development, cytoplasm shedding)
5. **Capacitation** occurs in the female reproductive tract (cholesterol removal from membrane, hyperactivated motility)

**Hormonal regulation:**
- LH -> Leydig cells -> testosterone production via cholesterol side-chain cleavage (CYP11A1) and 17-beta-hydroxysteroid dehydrogenase
- Testosterone acts locally at high concentration on Sertoli cells to support spermatogenesis
- FSH -> Sertoli cells -> production of androgen-binding protein (ABP), inhibin B, and anti-Mullerian hormone (AMH)
- **Inhibin B** selectively suppresses FSH (negative feedback)
- Testosterone and its metabolite **estradiol** (via aromatase) suppress GnRH and LH

### The Menstrual Cycle: Integrated Hormonal Dynamics

**Follicular Phase:**
- Rising FSH recruits a cohort of antral follicles
- Granulosa cells express FSH receptors and produce estradiol via **aromatase** (CYP19A1) from androgen precursors provided by theca cells (**two-cell, two-gonadotropin model**)
- The dominant follicle has the most FSH receptors and produces the most estradiol
- Rising estradiol suppresses FSH (negative feedback), causing atresia of non-dominant follicles
- Estradiol stimulates endometrial proliferation (proliferative phase)

**Ovulatory Phase:**
- When estradiol exceeds a **threshold (~200 pg/mL for >48 hours)**, it switches to **positive feedback** on the pituitary
- This triggers the **LH surge** (10-fold increase) and smaller FSH surge
- LH surge induces: resumption of oocyte meiosis (arrested at prophase I since fetal life), follicular wall rupture, luteinization of granulosa/theca cells
- Ovulation occurs **34-36 hours** after LH surge onset

**Luteal Phase:**
- Corpus luteum produces progesterone (peak ~7 days post-ovulation) and estradiol
- Progesterone converts the endometrium to **secretory phase**: stromal edema, glandular secretion, spiral artery development
- Progesterone exerts negative feedback on GnRH pulsatility (slows pulse frequency, favoring FSH)
- Without hCG rescue, luteolysis occurs at ~14 days; hormone withdrawal triggers menstruation

### Fertilization and Implantation

**Fertilization:**
- Sperm undergo the **acrosome reaction** at the zona pellucida (release of hyaluronidase and acrosin)
- Sperm penetrates zona pellucida and fuses with oocyte membrane
- **Cortical reaction** releases enzymes that harden the zona (block to polyspermy)
- Oocyte completes meiosis II; pronuclei fuse (syngamy)

**Implantation (days 6-10 post-fertilization):**
- Blastocyst hatches from zona pellucida
- **Trophoblast** differentiates into cytotrophoblast and syncytiotrophoblast
- Syncytiotrophoblast invades endometrial stroma and produces **hCG**
- hCG maintains corpus luteum -> continued progesterone production
- Endometrial stromal cells undergo **decidualization** (under progesterone influence)

### Placental Endocrinology

By weeks 8-10, the **fetoplacental unit** assumes steroidogenic function:
- **hCG**: peaks at 10-12 weeks, maintains corpus luteum early, stimulates fetal testicular testosterone in male fetuses
- **Progesterone**: placenta takes over production; essential for uterine quiescence
- **Estrogens (estriol E3)**: requires fetal adrenal DHEA-S as precursor (fetoplacental cooperation)
- **hPL (human placental lactogen)**: increases maternal insulin resistance to divert glucose to the fetus; promotes lipolysis

**Maternal adaptations to pregnancy:**
- Blood volume increases ~45%; cardiac output increases ~40%
- Respiratory: increased tidal volume (progesterone-mediated), mild respiratory alkalosis
- Renal: GFR increases ~50%, decreased creatinine threshold
- Immune: shift toward Th2 dominance (tolerance of fetal allograft)

### Lactation Physiology

**Mammary development:** Estrogen drives ductal growth; progesterone drives lobulo-alveolar development during pregnancy.

**Prolactin** (anterior pituitary):
- Primary lactogenic hormone; stimulates milk protein synthesis (casein, lactalbumin)
- Tonically inhibited by **dopamine** from the hypothalamus
- Suckling reflex reduces dopamine -> prolactin release
- Prolactin suppresses GnRH -> **lactational amenorrhea**

**Oxytocin** (posterior pituitary):
- Stimulates myoepithelial cell contraction -> milk ejection (let-down)
- Also stimulates uterine contraction (involution after delivery)
- Released by suckling, infant cries, and psychogenic stimuli
- Inhibited by stress and catecholamines`,
      keyTerms: [
        { term: 'two-cell two-gonadotropin model', definition: 'Theca cells (LH-driven) produce androgens that granulosa cells (FSH-driven) aromatize to estradiol; explains ovarian estrogen synthesis' },
        { term: 'capacitation', definition: 'Biochemical maturation of sperm in the female tract involving cholesterol removal and hyperactivated motility, required for fertilization', pronunciation: 'kah-PAS-ih-TAY-shun' },
        { term: 'acrosome reaction', definition: 'Release of enzymes from the sperm head that digest the zona pellucida to allow penetration of the oocyte', pronunciation: 'AK-roh-soam' },
        { term: 'syncytiotrophoblast', definition: 'Multinucleated outer layer of the trophoblast that invades the endometrium and produces hCG', pronunciation: 'sin-SIT-ee-oh-TROF-oh-blast' },
        { term: 'decidualization', definition: 'Progesterone-driven transformation of endometrial stromal cells into glycogen-rich decidual cells that support implantation' },
        { term: 'fetoplacental unit', definition: 'Cooperative steroidogenic system where the fetal adrenal provides DHEA-S and the placenta converts it to estrogens' },
        { term: 'lactational amenorrhea', definition: 'Suppression of menstruation during breastfeeding due to prolactin-mediated inhibition of GnRH pulsatility' },
        { term: 'aromatase (CYP19A1)', definition: 'Enzyme that converts androgens to estrogens; critical in granulosa cells for estradiol production', pronunciation: 'ah-ROM-ah-tays' },
      ],
      clinicalNotes: 'The two-cell two-gonadotropin model explains why both LH and FSH are required for follicular estrogen production. Polycystic ovary syndrome (PCOS) features excess LH relative to FSH, driving theca cell androgen overproduction with insufficient aromatization. Clomiphene citrate (selective estrogen receptor modulator) blocks estrogen negative feedback at the hypothalamus, increasing FSH to stimulate follicular recruitment. GnRH agonists given continuously downregulate gonadotropins -- used in endometriosis, precocious puberty, and prostate cancer. Progesterone supplementation in the luteal phase is standard in assisted reproduction to support implantation.',
    },

    4: {
      level: 4,
      summary:
        'Advanced reproductive physiology encompasses GnRH pulsatile dynamics and kisspeptin signaling, molecular mechanisms of steroidogenesis and gametogenesis, the immunology of implantation and maternal-fetal tolerance, placental hormone signaling pathways, and the neuroendocrine circuits governing parturition and lactation.',
      explanation: `## Molecular Reproductive Endocrinology

### GnRH Pulse Generator and Kisspeptin

**Kisspeptin-Neurokinin B-Dynorphin (KNDy) neurons** in the arcuate nucleus are the GnRH pulse generator:
- **Kisspeptin** (KISS1/KISS1R): most potent known stimulator of GnRH; mutations in KISS1R cause hypogonadotropic hypogonadism
- **Neurokinin B** (TAC3/TACR3): stimulates kisspeptin release; mutations also cause hypogonadotropic hypogonadism
- **Dynorphin**: opioid peptide that terminates each GnRH pulse
- Estrogen and progesterone regulate KNDy neuron activity: estrogen suppresses arcuate KNDy neurons (negative feedback) but stimulates AVPV kisspeptin neurons (positive feedback for LH surge, in females only)

**GnRH receptor signaling:**
- GnRH-R is a Gq-coupled GPCR -> PLC -> IP3/DAG -> PKC activation
- Pulsatile activation induces gonadotropin gene transcription; continuous activation causes receptor internalization and downregulation

### Steroidogenesis: Molecular Pathways

**Ovarian steroidogenesis (follicular phase):**
- Theca interna: LH -> cAMP/PKA -> StAR protein -> cholesterol to mitochondria -> CYP11A1 (side-chain cleavage) -> pregnenolone -> CYP17A1 (17-alpha-hydroxylase/17,20-lyase) -> androstenedione
- Granulosa: FSH -> cAMP/PKA -> CYP19A1 (aromatase) -> androstenedione converted to estrone -> 17-beta-HSD -> estradiol
- FSH upregulates aromatase and LH receptor expression on granulosa cells (key to dominant follicle selection)

**Luteal steroidogenesis:**
- LH surge induces expression of StAR and CYP11A1 in luteinized granulosa cells
- Progesterone synthesis does not require CYP17A1 (stops at pregnenolone -> progesterone via 3-beta-HSD)
- Luteal progesterone: 25-40 mg/day (vs. 1-2 mg/day follicular)

**Testicular steroidogenesis:**
- LH -> Leydig cell cAMP -> StAR -> CYP11A1 -> CYP17A1 -> androstenedione -> 17-beta-HSD -> testosterone
- 5-alpha-reductase converts testosterone to **DHT** (more potent; drives prostate, external genitalia, male-pattern hair)
- Aromatase converts testosterone to estradiol (important for bone epiphyseal closure, lipid metabolism)

### Oocyte Maturation and Meiotic Arrest

- Oocytes arrest at **prophase I (dictyate stage)** from fetal life until ovulation
- Arrest maintained by **high cAMP** via GPR3 signaling and gap junction transfer from cumulus cells
- LH surge disrupts gap junctions -> cAMP drops -> CDK1/cyclin B activation -> germinal vesicle breakdown -> meiosis I completion
- Oocyte arrests again at **metaphase II** (maintained by CSF/Emi2) until fertilization triggers Ca2+ oscillations -> APC activation -> meiosis II completion

### Implantation: Molecular Window

**Window of implantation (days 20-24 of cycle):**
- Endometrial receptivity markers: **pinopodes** (surface projections), integrins (alpha-v-beta-3), LIF (leukemia inhibitory factor), HOXA10/HOXA11 transcription factors
- Progesterone and estrogen prime endometrial receptivity
- Blastocyst hatching: zona thinning by uterine proteases and embryonic factors
- **L-selectin** on trophoblast binds endometrial ligands (initial attachment)
- Syncytiotrophoblast invasion: matrix metalloproteinases (MMPs) degrade extracellular matrix; invasion regulated by tissue inhibitors of metalloproteinases (TIMPs)

### Maternal-Fetal Immune Tolerance

- Trophoblast expresses **HLA-C, HLA-E, HLA-G** (not classical HLA-A or HLA-B) -> evades cytotoxic T cells
- **HLA-G** inhibits NK cells and promotes regulatory T cells (Tregs)
- Decidual NK cells (dNK, CD56bright CD16-) are non-cytotoxic; promote spiral artery remodeling and angiogenesis
- **Progesterone** promotes Th2 shift and Treg expansion (immunosuppressive milieu)
- Failure of immune tolerance -> recurrent pregnancy loss, preeclampsia

### Parturition Physiology

**Progesterone withdrawal hypothesis:**
- In humans, circulating progesterone does not drop; instead, **functional progesterone withdrawal** occurs via increased progesterone receptor isoform A (PR-A, dominant-negative) relative to PR-B
- Inflammatory cascade: IL-1, IL-6, TNF-alpha increase in myometrium and membranes
- **CRH** from placenta increases exponentially near term -> stimulates fetal cortisol -> promotes lung maturation and prostaglandin production
- **Oxytocin receptors** upregulated in myometrium near term; oxytocin drives rhythmic contractions
- Prostaglandins (PGE2, PGF2-alpha) soften cervix and stimulate contractions (positive feedback loop: Ferguson reflex)

### Lactation: Neuroendocrine Circuits

**Prolactin regulation:**
- Tonically inhibited by tuberoinfundibular dopamine (TIDA) neurons
- Suckling activates spinal afferents -> inhibits TIDA neurons -> prolactin release
- TRH, VIP, and serotonin stimulate prolactin
- Prolactin acts via JAK2/STAT5 pathway to activate milk protein gene transcription (casein, alpha-lactalbumin)
- During pregnancy, high estrogen stimulates lactotroph hyperplasia but progesterone blocks prolactin action on the breast (removal of progesterone at delivery permits lactation)

**Oxytocin neuroendocrine reflex:**
- Suckling -> afferent signal to hypothalamic paraventricular and supraoptic nuclei -> pulsatile oxytocin from posterior pituitary
- Oxytocin contracts myoepithelial cells surrounding alveoli -> milk ejection
- Conditioned response: milk let-down can occur with infant cry or anticipation`,
      keyTerms: [
        { term: 'kisspeptin', definition: 'Neuropeptide encoded by KISS1 gene that is the most potent known stimulator of GnRH release; mutations in its receptor (KISS1R) cause hypogonadotropic hypogonadism', pronunciation: 'KISS-pep-tin' },
        { term: 'KNDy neurons', definition: 'Arcuate nucleus neurons co-expressing kisspeptin, neurokinin B, and dynorphin that constitute the GnRH pulse generator', pronunciation: 'CAN-dee' },
        { term: 'DHT (dihydrotestosterone)', definition: 'Potent androgen formed from testosterone by 5-alpha-reductase; drives prostate growth, external genitalia development, and male-pattern hair', pronunciation: 'dy-HY-dro-tess-TOSS-ter-own' },
        { term: 'pinopodes', definition: 'Progesterone-dependent surface projections on endometrial epithelium marking the window of implantation', pronunciation: 'PIN-oh-poads' },
        { term: 'HLA-G', definition: 'Non-classical MHC class I molecule expressed by trophoblast that inhibits NK cell cytotoxicity and promotes immune tolerance at the maternal-fetal interface' },
        { term: 'Ferguson reflex', definition: 'Positive feedback loop where cervical stretching stimulates oxytocin release, intensifying uterine contractions during labor' },
        { term: 'functional progesterone withdrawal', definition: 'Shift in progesterone receptor isoform ratio (PR-A > PR-B) near term that reduces progesterone signaling without a drop in circulating levels, facilitating labor onset' },
      ],
      clinicalNotes: `Kisspeptin physiology has direct therapeutic implications: kisspeptin analogs can trigger oocyte maturation in IVF with lower ovarian hyperstimulation syndrome (OHSS) risk compared to hCG triggers. Loss-of-function mutations in KISS1R or TAC3/TACR3 present as isolated hypogonadotropic hypogonadism with absent puberty. 5-alpha-reductase inhibitors (finasteride, dutasteride) block DHT formation for BPH and androgenetic alopecia but are teratogenic (risk of ambiguous genitalia in male fetuses). Aromatase inhibitors (letrozole) are increasingly used for ovulation induction in PCOS as first-line over clomiphene. Preeclampsia is associated with defective spiral artery remodeling by dNK cells and inadequate trophoblast invasion, leading to placental ischemia and endothelial dysfunction. Cabergoline (dopamine agonist) suppresses prolactin in hyperprolactinemia; metoclopramide (dopamine antagonist) can enhance lactation.`,
    },

    5: {
      level: 5,
      summary:
        'State-of-the-art reproductive physiology encompasses single-cell omics of gametogenesis, precision ART technologies, reproductive immunology paradigms, endocrine disruptor mechanisms, and emerging therapies for infertility including in vitro gametogenesis and uterine transplantation.',
      explanation: `## Cutting-Edge Reproductive Physiology

### Precision ART and Ovarian Stimulation

**Controlled ovarian stimulation protocols:**
- GnRH antagonist protocol (standard): recombinant FSH + GnRH antagonist (cetrorelix/ganirelix) to prevent premature LH surge; final trigger with hCG or GnRH agonist
- GnRH agonist trigger: induces endogenous LH/FSH surge, dramatically reduces OHSS risk; enables "freeze-all" strategy with deferred embryo transfer
- **Kisspeptin-54** as novel trigger: physiologic LH surge without sustained luteolysis; phase 2 trials show promise for OHSS-free IVF (Abbara et al., 2020)
- **Dual trigger** (GnRH agonist + low-dose hCG): optimizes oocyte maturation in suboptimal responders

**Preimplantation genetic testing (PGT):**
- PGT-A (aneuploidy): trophectoderm biopsy + NGS; reduces miscarriage in advanced maternal age but debated for all-comers (STAR trial showed no benefit in good-prognosis patients)
- PGT-M (monogenic disorders): PCR-based linkage analysis for single-gene diseases
- Non-invasive PGT: cell-free DNA in spent culture media; early validation studies show 80-85% concordance with trophectoderm biopsy
- **Polygenic risk scoring** of embryos: commercially available but ethically debated; limited predictive power for complex traits

### In Vitro Gametogenesis (IVG)

- Mouse proof-of-concept achieved: iPSC -> primordial germ cell-like cells (PGCLCs) -> functional oocytes -> live pups (Hikabe et al., 2016)
- Human progress: iPSCs reliably differentiated to PGCLCs; complete in vitro oogenesis not yet achieved
- Potential applications: fertility preservation, same-sex biological parenthood, mitochondrial replacement
- **Ethical framework needed**: unlimited oocyte generation, embryo selection at scale, consent and welfare concerns

### Reproductive Immunology: Current Paradigms

**Decidual immune microenvironment:**
- dNK cells (70% of decidual leukocytes): secrete VEGF, PlGF, and angiopoietins for spiral artery remodeling; KIR receptor-HLA-C interactions modulate invasion depth
- **KIR AA + HLA-C2** combination: associated with preeclampsia and recurrent miscarriage (insufficient trophoblast invasion)
- Decidual macrophages (M2-polarized): promote tissue remodeling and immune tolerance
- Tregs (FOXP3+): expand under progesterone; insufficient Treg expansion linked to recurrent pregnancy loss

**Immunotherapy in reproductive medicine:**
- Intralipid infusion and IVIG: widely used empirically for recurrent implantation failure; RCT evidence remains inconclusive
- Granulocyte colony-stimulating factor (G-CSF): intrauterine infusion for thin endometrium; mixed trial results
- Checkpoint inhibitor reproductive toxicity: anti-PD-1/PD-L1 therapy can disrupt pregnancy maintenance; PD-L1 is expressed on trophoblast

### Endocrine Disruptors and Reproductive Health

**Mechanisms of disruption:**
- **BPA (bisphenol A)**: estrogen receptor agonist; linked to diminished ovarian reserve, altered oocyte meiosis, decreased sperm quality; epigenetic effects via DNA methylation changes
- **Phthalates**: anti-androgenic; associated with reduced anogenital distance in males (phthalate syndrome), decreased testosterone
- **PFAS (forever chemicals)**: thyroid disruption, reduced fecundability, pregnancy-induced hypertension
- **Microplastics**: detected in human placenta, follicular fluid, and testicular tissue; biological effects under investigation

**Declining sperm counts:** Meta-analyses show ~50% decline in sperm concentration since 1970s (Levine et al., 2017; updated 2022); multifactorial causes including endocrine disruptors, obesity, heat exposure, and lifestyle factors.

### Uterine Transplantation

- First live birth from deceased donor uterus (Brazil, 2018); multiple live births from living donors (Sweden, Gothenburg series)
- Immunosuppression required throughout pregnancy; graft removed after 1-2 pregnancies
- Deceased donor programs expanding globally; bioengineered uterine scaffolds in preclinical development
- Potential future application for transgender women (requires extensive physiological preparation)

### Placental Biology: Emerging Understanding

**Placental single-cell atlas** (Vento-Tormo et al., Nature 2018):
- Identified novel trophoblast subtypes and their signaling to decidual immune cells
- Revealed CellPhoneDB-predicted receptor-ligand interactions governing implantation
- Extravillous trophoblast uses HLA-G/LILRB1 axis to communicate with decidual macrophages

**Placental mosaicism and cfDNA screening:**
- Non-invasive prenatal testing (NIPT) analyzes placental (not fetal) cfDNA -> confined placental mosaicism explains most false positives
- Genome-wide cfDNA analysis can detect microdeletions, but positive predictive value drops significantly for rare conditions

### Male Reproductive Frontiers

**Spermatogonial stem cell transplantation:**
- Prepubertal testicular tissue cryopreservation for boys undergoing gonadotoxic therapy
- In vitro spermatogenesis from frozen tissue: achieved in mouse; human trials pending
- CRISPR-mediated correction of spermatogonial stem cells for monogenic infertility (preclinical)

**Male contraception development:**
- Nestorone/testosterone gel (NES/T): phase 2b trial shows effective suppression of spermatogenesis with acceptable side effects
- DMAU (dimethandrolone undecanoate): oral androgen/progestin; phase 1 complete
- Non-hormonal targets: EPPIN (serine protease inhibitor on sperm surface), retinoic acid receptor antagonists, CatSper channel blockers`,
      keyTerms: [
        { term: 'in vitro gametogenesis (IVG)', definition: 'Generation of functional gametes (eggs or sperm) from pluripotent stem cells in culture; achieved in mice, under development in humans', pronunciation: 'gam-EE-toh-JEN-eh-sis' },
        { term: 'kisspeptin-54 trigger', definition: 'Novel IVF oocyte maturation trigger using the endogenous GnRH secretagogue kisspeptin, offering a physiologic LH surge with minimal OHSS risk' },
        { term: 'KIR-HLA-C interaction', definition: 'Natural killer cell immunogenetic receptor-ligand system at the maternal-fetal interface; specific combinations (KIR AA + HLA-C2) increase risk of preeclampsia' },
        { term: 'PGT-A', definition: 'Preimplantation genetic testing for aneuploidy; trophectoderm biopsy with NGS to select euploid embryos for transfer' },
        { term: 'non-invasive PGT', definition: 'Analysis of cell-free DNA shed into spent embryo culture media as a non-destructive alternative to trophectoderm biopsy' },
        { term: 'confined placental mosaicism', definition: 'Chromosomal abnormality present in placental tissue but not in the fetus; major cause of false-positive NIPT results' },
        { term: 'NES/T gel', definition: 'Nestorone (progestin) plus testosterone combination gel under clinical trial as a male hormonal contraceptive' },
      ],
      clinicalNotes: `Key translational and clinical considerations:

1. **GnRH agonist trigger** has transformed IVF safety by virtually eliminating severe OHSS; paired with freeze-all and programmed frozen embryo transfer, outcomes match or exceed fresh transfer in most populations.

2. **PGT-A controversy**: The STAR trial (2023) showed no significant improvement in live birth rates with PGT-A in good-prognosis patients <37 years. Mosaic embryo transfers show unexpectedly normal outcomes in many cases, challenging binary euploid/aneuploid classification.

3. **Endocrine disruptors** represent a population-level reproductive health threat. The Endocrine Society recommends minimizing BPA, phthalate, and PFAS exposure, particularly during pregnancy and early development. Declining sperm counts have prompted calls for systematic environmental reproductive toxicology monitoring.

4. **Reproductive immunology** remains controversial: while KIR-HLA-C genotyping has biological plausibility, routine "immune testing" panels for recurrent implantation failure lack validated cutoffs and RCT-supported interventions. The ESHRE guideline (2023) recommends against routine immunological testing.

5. **Male contraception** development is accelerating; the NES/T gel trial represents the most advanced reversible male hormonal contraceptive, with results expected by 2026. Non-hormonal approaches targeting CatSper channels and retinoic acid signaling are in early clinical development.`,
    },
  },

  media: [
    {
      id: 'hpg-axis-diagram',
      type: 'diagram',
      filename: 'hpg-axis-male-female.svg',
      title: 'Hypothalamic-Pituitary-Gonadal Axis',
      description: 'Comparative HPG axis in males (LH/Leydig/testosterone, FSH/Sertoli/inhibin) and females (follicular recruitment, LH surge, corpus luteum)',
    },
    {
      id: 'menstrual-cycle-hormones',
      type: 'diagram',
      filename: 'menstrual-cycle-hormones.svg',
      title: 'Menstrual Cycle Hormone Profiles',
      description: 'Integrated view of FSH, LH, estradiol, progesterone, and endometrial changes across follicular, ovulatory, and luteal phases',
    },
    {
      id: 'implantation-molecular',
      type: 'diagram',
      filename: 'implantation-molecular.svg',
      title: 'Molecular Events of Implantation',
      description: 'Blastocyst hatching, L-selectin adhesion, syncytiotrophoblast invasion, and decidualization with key molecular markers',
    },
    {
      id: 'lactation-neuroendocrine',
      type: 'diagram',
      filename: 'lactation-neuroendocrine.svg',
      title: 'Neuroendocrine Control of Lactation',
      description: 'Suckling reflex pathway showing prolactin release via dopamine inhibition and oxytocin-mediated milk ejection',
    },
  ],

  citations: [
    {
      id: 'openstax-ap-reproductive',
      type: 'textbook',
      title: 'Anatomy and Physiology 2e',
      authors: ['OpenStax'],
      source: 'OpenStax (Rice University)',
      chapter: '27-28',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e',
      license: 'CC BY 4.0',
    },
    {
      id: 'williams-obstetrics',
      type: 'textbook',
      title: 'Williams Obstetrics',
      authors: ['Cunningham FG', 'Leveno KJ', 'Dashe JS', 'Hoffman BL', 'Spong CY', 'Casey BM'],
      source: 'McGraw-Hill',
      chapter: '4-5, 8-9',
    },
    {
      id: 'speroff-clinical-gynecologic-endocrinology',
      type: 'textbook',
      title: 'Speroff Clinical Gynecologic Endocrinology and Infertility',
      authors: ['Fritz MA', 'Speroff L'],
      source: 'Wolters Kluwer',
      chapter: '1-6, 25-30',
    },
    {
      id: 'guyton-reproductive',
      type: 'textbook',
      title: 'Guyton and Hall Textbook of Medical Physiology',
      authors: ['Hall JE', 'Hall ME'],
      source: 'Elsevier',
      chapter: '81-83',
    },
  ],

  crossReferences: [
    { targetId: 'physiology-hormone-signaling-axes', targetType: 'process', relationship: 'parent', label: 'Hormone Signaling Axes' },
    { targetId: 'physiology-hormone-basics', targetType: 'concept', relationship: 'related', label: 'Hormone Basics' },
    { targetId: 'condition-pcos', targetType: 'condition', relationship: 'see-also', label: 'Polycystic Ovary Syndrome' },
    { targetId: 'condition-preeclampsia', targetType: 'condition', relationship: 'see-also', label: 'Preeclampsia' },
    { targetId: 'condition-infertility', targetType: 'condition', relationship: 'see-also', label: 'Infertility' },
  ],

  tags: {
    systems: ['reproductive', 'endocrine'],
    topics: ['physiology', 'reproductive endocrinology', 'obstetrics', 'fertility'],
    keywords: [
      'HPG axis', 'GnRH', 'spermatogenesis', 'oogenesis', 'menstrual cycle',
      'ovulation', 'LH surge', 'corpus luteum', 'fertilization', 'implantation',
      'hCG', 'placenta', 'pregnancy', 'progesterone', 'estrogen', 'testosterone',
      'prolactin', 'oxytocin', 'lactation', 'kisspeptin', 'ART', 'IVF',
    ],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['obstetrics', 'medicine', 'surgery'],
    },
  },

  createdAt: '2026-01-30T00:00:00.000Z',
  updatedAt: '2026-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default reproductivePhysiology;
