import { EducationalContent } from '../../types';

export const menstrualCycleContent: EducationalContent = {
  id: 'reproductive-menstrual-cycle',
  type: 'process',
  name: 'Menstrual Cycle',
  alternateNames: ['Monthly cycle', 'Menstruation', 'Period cycle', 'Ovarian cycle'],
  levels: {
    1: {
      level: 1,
      summary: 'The menstrual cycle is a monthly process that prepares the body for pregnancy, lasting about 28 days on average.',
      explanation: `The menstrual cycle is your body's way of getting ready for pregnancy each month. Think of it like your body preparing a cozy bed for a potential baby.

**What happens during the cycle:**

1. **Days 1-5 (Period)**: The uterus sheds its lining, which comes out as blood. This is called your period.

2. **Days 6-14 (Building up)**: Your body starts building a new, thick lining in the uterus, like making a soft bed.

3. **Day 14 (Ovulation)**: An egg is released from the ovary. This is called ovulation - the egg travels down the fallopian tube hoping to meet a sperm.

4. **Days 15-28 (Waiting)**: If the egg isn't fertilized, the thick lining isn't needed, and the cycle starts over with a new period.

Most cycles last between 21-35 days, and periods typically last 3-7 days. It's normal for cycles to be a bit irregular, especially when you first start having periods.`,
      keyTerms: [
        { term: 'Menstruation', definition: 'The monthly bleeding that happens when the uterus lining sheds; also called a period' },
        { term: 'Ovulation', definition: 'When an egg is released from the ovary, usually around the middle of the cycle' },
        { term: 'Uterus', definition: 'The organ where a baby grows during pregnancy; also called the womb' },
        { term: 'Ovary', definition: 'The organ that stores and releases eggs' },
      ],
      analogies: [
        'The menstrual cycle is like your body redecorating a room each month - if no guest (baby) arrives, it clears out the decorations and starts fresh',
      ],
      patientCounselingPoints: [
        'Periods are a normal part of growing up for people with uteruses',
        'Cycle length can vary and that is usually normal',
        'Cramping and mood changes are common but severe pain should be checked by a doctor',
      ],
    },
    2: {
      level: 2,
      summary: 'The menstrual cycle involves coordinated hormonal changes that regulate egg development, ovulation, and preparation of the uterus for potential pregnancy.',
      explanation: `The menstrual cycle is controlled by hormones and involves both the ovaries and the uterus working together over approximately 28 days.

**The Four Phases:**

**1. Menstrual Phase (Days 1-5)**
- The uterine lining (endometrium) sheds because pregnancy didn't occur
- Hormone levels (estrogen and progesterone) are at their lowest
- Bleeding typically lasts 3-7 days

**2. Follicular Phase (Days 1-13)**
- Overlaps with menstruation
- FSH (follicle-stimulating hormone) from the brain stimulates the ovary
- Several follicles (fluid-filled sacs containing eggs) begin to develop
- One follicle becomes dominant and produces increasing amounts of estrogen
- Estrogen causes the uterine lining to thicken

**3. Ovulation (Day 14)**
- A surge of LH (luteinizing hormone) triggers release of the mature egg
- The egg travels into the fallopian tube
- This is when pregnancy is most likely to occur
- Some people feel mild pain (mittelschmerz) during ovulation

**4. Luteal Phase (Days 15-28)**
- The empty follicle becomes the corpus luteum
- Corpus luteum produces progesterone to maintain the uterine lining
- If no pregnancy occurs, the corpus luteum breaks down
- Hormone levels drop, triggering the next period

**Tracking Your Cycle:**
- Day 1 is always the first day of bleeding
- Ovulation typically occurs 14 days before the next period
- Fertile window is approximately 5 days before ovulation through 1 day after`,
      keyTerms: [
        { term: 'Follicular phase', definition: 'The first half of the cycle when follicles develop in the ovary' },
        { term: 'Luteal phase', definition: 'The second half of the cycle after ovulation when the corpus luteum produces progesterone' },
        { term: 'Endometrium', definition: 'The lining of the uterus that thickens each cycle and sheds during menstruation' },
        { term: 'Corpus luteum', definition: 'The structure formed from the empty follicle after ovulation that produces progesterone' },
        { term: 'FSH', definition: 'Follicle-stimulating hormone; triggers follicle development in the ovary' },
        { term: 'LH', definition: 'Luteinizing hormone; triggers ovulation' },
      ],
      examples: [
        'If your period starts on January 1st (Day 1) and you have a 28-day cycle, ovulation would occur around January 14th (Day 14)',
        'Many people notice changes in cervical mucus around ovulation - it becomes clearer and more stretchy',
      ],
    },
    3: {
      level: 3,
      summary: 'The menstrual cycle is regulated by the hypothalamic-pituitary-ovarian axis through negative and positive feedback loops involving GnRH, FSH, LH, estrogen, and progesterone.',
      explanation: `The menstrual cycle represents a sophisticated neuroendocrine process involving coordinated signaling between the hypothalamus, anterior pituitary, and ovaries.

**Hormonal Regulation:**

**Hypothalamic-Pituitary Control**
- GnRH (gonadotropin-releasing hormone) is released in pulses from the hypothalamus
- GnRH stimulates the anterior pituitary to release FSH and LH
- Pulse frequency and amplitude of GnRH vary throughout the cycle

**Follicular Phase Dynamics**
- Rising FSH recruits a cohort of primordial follicles
- Follicles progress through primary, secondary, and antral stages
- The dominant follicle develops the most FSH receptors and produces the most estrogen
- Non-dominant follicles undergo atresia
- Estrogen exerts negative feedback on FSH (preventing multiple ovulations)
- Granulosa cells produce estrogen via aromatization of androgens

**The LH Surge and Ovulation**
- When estrogen exceeds a threshold (~200 pg/mL for 50+ hours), feedback switches to positive
- This triggers the LH surge (10-20 fold increase)
- LH surge induces resumption of meiosis in the oocyte
- Ovulation occurs 34-36 hours after LH surge onset
- The oocyte is released with the corona radiata and zona pellucida

**Luteal Phase Physiology**
- Granulosa and theca cells luteinize to form the corpus luteum
- Corpus luteum secretes progesterone (and some estrogen)
- Progesterone transforms the proliferative endometrium to secretory
- Progesterone maintains negative feedback on GnRH/LH
- Without hCG from implantation, corpus luteum regresses after ~14 days
- Progesterone withdrawal triggers menstruation

**Endometrial Changes**
- Proliferative phase: Estrogen drives glandular growth and vascularization
- Secretory phase: Progesterone induces glandular coiling and secretion
- Menstrual phase: Spiral arteries constrict, leading to ischemia and shedding`,
      keyTerms: [
        { term: 'GnRH', definition: 'Gonadotropin-releasing hormone; hypothalamic hormone that controls pituitary gonadotropin release', pronunciation: 'gee-en-ar-aych' },
        { term: 'Aromatization', definition: 'Enzymatic conversion of androgens to estrogens by aromatase enzyme' },
        { term: 'Atresia', definition: 'Degeneration and reabsorption of ovarian follicles that do not ovulate' },
        { term: 'Granulosa cells', definition: 'Cells surrounding the oocyte that produce estrogen and support egg development' },
        { term: 'Theca cells', definition: 'Outer follicular cells that produce androgens for conversion to estrogen' },
        { term: 'Corona radiata', definition: 'Layer of granulosa cells surrounding the oocyte after ovulation' },
      ],
      examples: [
        'The two-cell, two-gonadotropin model: LH stimulates theca cells to produce androgens, which granulosa cells convert to estrogen under FSH influence',
        'Emergency contraception works partly by disrupting the LH surge when given before ovulation',
      ],
    },
    4: {
      level: 4,
      summary: 'The menstrual cycle involves intricate molecular signaling including steroidogenic enzyme regulation, paracrine factors, and precise temporal coordination of endocrine events across the hypothalamic-pituitary-ovarian axis.',
      explanation: `The menstrual cycle exemplifies complex endocrine physiology with multiple levels of regulation and feedback.

**Molecular Mechanisms of Folliculogenesis:**

**Primordial to Primary Transition**
- Independent of gonadotropins (gonadotropin-independent phase)
- Regulated by local factors: Kit ligand, GDF-9, BMP-15
- Anti-Müllerian hormone (AMH) from small antral follicles inhibits primordial recruitment

**Antral Follicle Development**
- Becomes FSH-dependent (gonadotropin-dependent phase)
- FSH induces aromatase (CYP19A1) expression in granulosa cells
- Activin enhances FSH receptor expression
- Inhibin B provides negative feedback to FSH

**Dominant Follicle Selection**
- Occurs around cycle day 5-7
- Dominant follicle expresses more FSH receptors and produces more estradiol
- LH receptors appear on granulosa cells of dominant follicle
- Local IGF-1 amplifies gonadotropin action
- Follicular fluid creates optimal microenvironment

**LH Surge Molecular Events:**
- GnRH pulse frequency increases
- Kisspeptin neurons in AVPV are activated by high estrogen
- Progesterone receptor activation is required for surge
- LH surge activates EGFR signaling cascade
- Prostaglandins (PGE2) and proteases facilitate follicle rupture
- Cumulus expansion through hyaluronic acid synthesis

**Corpus Luteum Function:**
- Characterized by vascularization and increased steroidogenesis
- StAR protein rate-limits cholesterol transport to mitochondria
- 3β-HSD and P450scc convert cholesterol to progesterone
- LH maintains corpus luteum via cAMP/PKA pathway
- Luteolysis involves PGF2α, immune cell infiltration, and apoptosis

**Endometrial Molecular Changes:**
- Proliferative: ER-α mediates estrogen-driven proliferation
- Window of implantation: Days 20-24, regulated by progesterone
- Pinopodes appear during implantation window
- Leukemia inhibitory factor (LIF) and integrins critical for implantation
- Decidualization: Stromal cell transformation for pregnancy support

**Menstruation Mechanisms:**
- Progesterone withdrawal activates NF-κB and cytokine production
- Matrix metalloproteinases (MMPs) degrade extracellular matrix
- Vasoconstriction via endothelin and prostaglandins
- Tissue hypoxia and cell death
- Concurrent repair initiated by residual estrogen`,
      keyTerms: [
        { term: 'StAR protein', definition: 'Steroidogenic acute regulatory protein; rate-limiting step in steroid hormone synthesis by transporting cholesterol into mitochondria' },
        { term: 'Kisspeptin', definition: 'Neuropeptide that stimulates GnRH release and is essential for puberty and fertility' },
        { term: 'Anti-Müllerian hormone', definition: 'Produced by granulosa cells; inhibits primordial follicle recruitment and is a marker of ovarian reserve', pronunciation: 'an-tee mull-AIR-ee-an' },
        { term: 'Decidualization', definition: 'Progesterone-induced transformation of endometrial stromal cells in preparation for implantation' },
        { term: 'Pinopodes', definition: 'Progesterone-induced uterine epithelial projections that appear during the implantation window' },
      ],
      clinicalNotes: 'AMH levels are used clinically to assess ovarian reserve before fertility treatments. Low AMH suggests diminished ovarian reserve, while very high AMH may indicate PCOS.',
    },
    5: {
      level: 5,
      summary: 'Clinical understanding of the menstrual cycle encompasses assessment of cycle disorders, fertility optimization, and therapeutic interventions targeting specific phases of the hypothalamic-pituitary-ovarian axis.',
      explanation: `**Clinical Assessment of Menstrual Function:**

**History and Physical Findings**
- Cycle length (normal: 24-38 days per FIGO 2018)
- Flow duration (normal: 4.5-8 days)
- Flow volume (normal: 5-80 mL; >80 mL = heavy menstrual bleeding)
- Intermenstrual bleeding, postcoital bleeding, dysmenorrhea
- Signs of hyperandrogenism, thyroid dysfunction, hyperprolactinemia

**Laboratory Evaluation**
- Day 3 FSH, LH, estradiol: Ovarian reserve screening (FSH >10 suggests diminished reserve)
- AMH: Gonadotropin-independent ovarian reserve marker
- Day 21 (mid-luteal) progesterone: Confirms ovulation (>3 ng/mL)
- TSH, prolactin: Rule out secondary causes of cycle dysfunction
- Androgens if hyperandrogenism suspected

**Imaging**
- Transvaginal ultrasound: Antral follicle count, endometrial thickness
- Saline-infusion sonohysterography: Intrauterine pathology
- HSG or HyCoSy: Tubal patency

**Cycle Abnormalities - FIGO Classification:**
- Amenorrhea: Primary (no menarche by 15) or secondary (no menses for 3+ cycles)
- Oligomenorrhea: Cycles >38 days
- Polymenorrhea: Cycles <24 days
- Heavy menstrual bleeding: >80 mL or clinically significant
- Intermenstrual bleeding: Between expected menses

**Therapeutic Manipulation of the Cycle:**

**Ovulation Induction**
- Letrozole: First-line for PCOS (aromatase inhibitor, less multiple gestation risk)
- Clomiphene citrate: SERM, blocks estrogen feedback
- Gonadotropins: Direct FSH/LH stimulation (requires monitoring for OHSS)
- GnRH agonist trigger: Reduces OHSS risk in IVF

**Cycle Suppression**
- Combined hormonal contraceptives: Suppress HPO axis
- Progestin-only methods: Primarily local endometrial effect
- GnRH agonists: Initial flare then downregulation
- GnRH antagonists: Immediate suppression

**Luteal Phase Support**
- Progesterone supplementation in IVF (corpus luteum removed or suppressed)
- Vaginal, IM, or oral formulations
- hCG for additional luteal support (increases OHSS risk)

**Current Research Directions:**
- Kisspeptin analogs for ovulation induction
- In vitro activation (IVA) for diminished ovarian reserve
- Endometrial receptivity arrays for implantation timing
- Single-cell transcriptomics of follicular and endometrial cells`,
      keyTerms: [
        { term: 'OHSS', definition: 'Ovarian hyperstimulation syndrome; iatrogenic complication of ovulation induction characterized by vascular permeability and fluid shifts', pronunciation: 'oh-aych-ess-ess' },
        { term: 'Antral follicle count', definition: 'Ultrasound count of 2-10mm follicles on cycle days 2-4; correlates with ovarian reserve' },
        { term: 'Letrozole', definition: 'Third-generation aromatase inhibitor used as first-line ovulation induction in PCOS' },
        { term: 'GnRH agonist trigger', definition: 'Use of GnRH agonist instead of hCG to trigger ovulation in IVF, inducing endogenous LH surge with lower OHSS risk' },
        { term: 'Endometrial receptivity array', definition: 'Gene expression test to identify optimal implantation window timing' },
      ],
      clinicalNotes: 'The 2018 FIGO recommendations redefined normal cycle parameters: length 24-38 days (previously 21-35), variation cycle-to-cycle up to 7-9 days. "Irregular" now means >20 day variation over 12 months. These evidence-based parameters better reflect population norms and reduce overdiagnosis of menstrual disorders.',
    },
  },
  media: [],
  citations: [
    {
      id: 'ref-1',
      type: 'textbook',
      title: 'Williams Gynecology',
      authors: ['Hoffman, B.', 'Schorge, J.', 'Halvorson, L.'],
      source: 'McGraw-Hill',
      chapter: 'Chapter 15: Reproductive Endocrinology',
      license: 'Proprietary',
    },
    {
      id: 'ref-2',
      type: 'article',
      title: 'The FIGO recommendations on terminologies and definitions for normal and abnormal uterine bleeding',
      source: 'International Journal of Gynecology & Obstetrics',
      authors: ['Munro, M.G.', 'et al.'],
      url: 'https://doi.org/10.1002/ijgo.12666',
    },
  ],
  crossReferences: [
    { targetId: 'reproductive-hormones', targetType: 'process', relationship: 'related', label: 'Reproductive Hormones' },
    { targetId: 'reproductive-fertility', targetType: 'process', relationship: 'related', label: 'Fertility' },
    { targetId: 'reproductive-pcos', targetType: 'condition', relationship: 'related', label: 'PCOS' },
  ],
  tags: {
    systems: ['reproductive'],
    topics: ['physiology', 'endocrinology', 'fertility'],
    keywords: ['menstruation', 'ovulation', 'hormones', 'FSH', 'LH', 'estrogen', 'progesterone', 'endometrium'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['obstetrics-gynecology'],
    },
  },
  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
