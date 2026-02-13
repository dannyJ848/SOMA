/**
 * Normal Menstrual Cycle - Comprehensive Educational Content
 *
 * The menstrual cycle is a remarkable monthly process that prepares the body
 * for potential pregnancy. Understanding this cycle empowers women to recognize
 * what's normal for them and identify when something might need attention.
 */

import { EducationalContent } from '../../content/types';
import { MenstrualCyclePhase, MenstrualHealthContent } from '../types';

export const NORMAL_MENSTRUAL_CYCLE: EducationalContent = {
  id: 'menstrual-cycle-normal',
  type: 'process',
  name: 'Normal Menstrual Cycle',
  alternateNames: ['Period', 'Monthly cycle', 'Menstruation'],

  levels: {
    1: {
      level: 1,
      summary: 'Your period is part of a monthly cycle where your body prepares for pregnancy, then resets if pregnancy does not happen.',
      explanation: `Every month, your body goes through a cycle that lasts about 28 days, though anywhere from 21 to 35 days is normal. Think of it like your body's monthly "reset" system.

**The Basic Process:**
Here is what happens each month:

1. **Your period starts** - The lining inside your uterus (the organ where a baby would grow) sheds because there is no pregnancy. This is the bleeding you see.

2. **Your body rebuilds** - After your period ends, your body builds up a new, fresh lining inside your uterus, like making a cozy bed.

3. **An egg is released** - Around the middle of your cycle, one of your ovaries releases a tiny egg. This is called ovulation.

4. **Waiting period** - The egg travels through a tube toward your uterus. If it meets a sperm, pregnancy can begin. If not, the cycle starts over.

**What is Normal:**
- Periods lasting 3-7 days
- Getting your period every 21-35 days
- Some cramping, especially on day 1-2
- Changes in mood or energy during different parts of the month

Your cycle is unique to you. What matters is understanding what is normal for YOUR body.`,
      keyTerms: [
        { term: 'period', definition: 'The bleeding that happens each month when the uterus lining sheds' },
        { term: 'uterus', definition: 'The organ inside your body where a baby would grow during pregnancy' },
        { term: 'ovaries', definition: 'Two small organs that store eggs and release one each month' },
        { term: 'ovulation', definition: 'When an egg is released from the ovary' },
      ],
      analogies: [
        'Your menstrual cycle is like nature preparing a garden each month - if no seed is planted, the garden is cleared and prepared fresh for the next month.',
        'Think of your uterus like a hotel room that gets completely refreshed each month for a potential guest (a fertilized egg).',
      ],
      examples: [
        'Many people first get their period between ages 10-15, though earlier or later can be normal.',
        'Athletes or people under stress may have cycles that are a bit longer or shorter.',
      ],
    },
    2: {
      level: 2,
      summary: 'The menstrual cycle is a coordinated hormonal process involving the ovaries and uterus that prepares for potential pregnancy each month.',
      explanation: `The menstrual cycle is controlled by hormones - chemical messengers that tell different parts of your body what to do. The main hormones involved are estrogen and progesterone, produced by your ovaries.

**The Four Phases:**

**Phase 1: Menstruation (Days 1-5)**
- The uterine lining (called the endometrium) sheds, causing bleeding
- Hormone levels are at their lowest
- You may feel tired or have cramps

**Phase 2: Follicular Phase (Days 1-13)**
- Overlaps with menstruation
- The pituitary gland in your brain releases FSH (follicle-stimulating hormone)
- This stimulates follicles in your ovaries, each containing an egg
- One follicle becomes dominant and matures
- Estrogen levels rise, rebuilding the uterine lining

**Phase 3: Ovulation (Day 14)**
- A surge of LH (luteinizing hormone) triggers the release of the mature egg
- The egg travels into the fallopian tube
- This is the fertile window - pregnancy is most likely around this time
- Some women feel a twinge or mild pain (called mittelschmerz)

**Phase 4: Luteal Phase (Days 15-28)**
- The empty follicle becomes the corpus luteum and produces progesterone
- Progesterone maintains the uterine lining for potential implantation
- If no pregnancy occurs, hormone levels drop
- This triggers the next period

**Tracking Your Cycle:**
Understanding your cycle helps you:
- Predict when your period will come
- Identify your fertile window
- Notice patterns in energy, mood, and physical symptoms
- Recognize when something seems off`,
      keyTerms: [
        { term: 'estrogen', definition: 'A hormone that helps build up the uterine lining and triggers ovulation', pronunciation: 'ES-tro-jen' },
        { term: 'progesterone', definition: 'A hormone that maintains the uterine lining after ovulation', pronunciation: 'pro-JES-ter-own' },
        { term: 'endometrium', definition: 'The lining of the uterus that thickens each cycle', pronunciation: 'en-do-MEE-tree-um' },
        { term: 'follicle', definition: 'A small sac in the ovary that contains a developing egg', pronunciation: 'FAH-li-kul' },
        { term: 'corpus luteum', definition: 'The structure formed from the follicle after the egg is released', pronunciation: 'KOR-pus LOO-tee-um' },
      ],
      analogies: [
        'Hormones are like text messages between your brain and ovaries, coordinating the whole monthly schedule.',
      ],
    },
    3: {
      level: 3,
      summary: 'The menstrual cycle involves coordinated hypothalamic-pituitary-ovarian axis signaling that regulates follicular development, ovulation, and endometrial preparation.',
      explanation: `The menstrual cycle represents a complex neuroendocrine feedback system involving the hypothalamus, anterior pituitary, and ovaries (the HPO axis), with the uterus as the target organ.

**Hormonal Control:**

**GnRH Pulsatility:**
The hypothalamus secretes gonadotropin-releasing hormone (GnRH) in pulses. The frequency and amplitude of these pulses determine which gonadotropin (FSH or LH) predominates:
- High-frequency pulses favor LH secretion
- Lower-frequency pulses favor FSH secretion

**The Follicular Phase:**
1. Rising FSH stimulates recruitment of a cohort of ovarian follicles
2. Follicles produce estradiol (E2), which:
   - Stimulates endometrial proliferation
   - Initially provides negative feedback on FSH
   - At high sustained levels, switches to positive feedback
3. One follicle becomes dominant (the Graafian follicle)
4. The dominant follicle produces increasing E2

**The Ovulatory Phase:**
1. Sustained high E2 triggers positive feedback
2. LH surge occurs (10-12x baseline)
3. LH surge induces:
   - Final oocyte maturation
   - Follicular rupture (ovulation) ~36 hours after surge onset
   - Luteinization of granulosa cells

**The Luteal Phase:**
1. Corpus luteum forms and secretes progesterone and estrogen
2. Progesterone transforms the endometrium to secretory phase
3. Without hCG from implantation, corpus luteum regresses
4. Hormone withdrawal triggers menstruation

**Endometrial Changes:**
- **Proliferative phase:** Estrogen-driven growth, straight glands
- **Secretory phase:** Progesterone-induced changes, coiled glands, glycogen secretion
- **Menstrual phase:** Ischemia, necrosis, shedding of functional layer

**Cycle Variability:**
The follicular phase is variable (responsible for cycle length differences), while the luteal phase is relatively constant at 14 +/- 2 days.`,
      keyTerms: [
        { term: 'HPO axis', definition: 'Hypothalamic-pituitary-ovarian axis - the hormonal control system for reproduction' },
        { term: 'GnRH', definition: 'Gonadotropin-releasing hormone from the hypothalamus', pronunciation: 'gee-en-ar-aich' },
        { term: 'FSH', definition: 'Follicle-stimulating hormone from the anterior pituitary' },
        { term: 'LH', definition: 'Luteinizing hormone, triggers ovulation' },
        { term: 'estradiol', definition: 'The primary estrogen produced by the ovaries (E2)', pronunciation: 'es-tra-DY-ol' },
        { term: 'Graafian follicle', definition: 'The dominant, mature follicle ready to ovulate' },
      ],
      clinicalNotes: 'Cycle day 1 = first day of menstrual flow. Follicular phase variability explains most cycle length variation. A luteal phase <10 days may indicate luteal phase defect.',
    },
    4: {
      level: 4,
      summary: 'The menstrual cycle integrates hypothalamic GnRH pulsatility, pituitary gonadotropin secretion, ovarian steroidogenesis, and endometrial remodeling through intricate feedback mechanisms.',
      explanation: `**Neuroendocrine Regulation:**

**GnRH Pulse Generator:**
- Located in the arcuate nucleus of the hypothalamus
- Kisspeptin neurons regulate GnRH pulse frequency
- Pulse frequency: ~1/hour in follicular phase, ~1/3-4 hours in luteal phase
- Continuous GnRH leads to receptor downregulation (basis for GnRH agonist therapy)

**Pituitary Response:**
- FSH half-life ~3-4 hours; LH half-life ~20 minutes
- Differential glycosylation affects bioactivity
- Activin enhances FSH secretion; inhibin B (follicular) and inhibin A (luteal) provide negative feedback

**Two-Cell, Two-Gonadotropin Model:**
- Theca cells: Express LH receptors, produce androgens (androstenedione)
- Granulosa cells: Express FSH receptors, contain aromatase, convert androgens to estrogens
- FSH induces LH receptor expression on granulosa cells (luteinization preparation)

**Follicular Selection:**
- Primordial follicle recruitment is gonadotropin-independent
- Antral follicles require FSH for continued development
- FSH threshold: Follicles above threshold survive; below, undergo atresia
- Dominant follicle maintains lower FSH threshold via local IGF-1/E2

**Ovulation Cascade:**
- LH surge duration: 48-50 hours
- Induces prostaglandin synthesis, proteolytic enzymes
- Cumulus expansion, meiotic resumption
- Follicular rupture: stigma formation, enzymatic digestion

**Corpus Luteum Function:**
- Peak progesterone: ~25 ng/mL at luteal midphase
- Lifespan: 14 days without hCG rescue
- Luteolysis: PGF2alpha-mediated in non-primates; spontaneous in humans

**Endometrial Molecular Changes:**
- Proliferative: ER/PR upregulation, mitoses
- Early secretory: Peak PR expression, glycogen accumulation
- Mid-secretory: Implantation window (days 20-24), pinopodes, integrin expression
- Late secretory: Decidualization begins, spiral artery development

**Menstruation Mechanism:**
- Progesterone withdrawal triggers:
  - MMP activation (matrix degradation)
  - Prostaglandin release (vasoconstriction, then vasodilation)
  - Inflammatory cascade
  - Coagulation followed by fibrinolysis
  - Tissue repair parallels shedding`,
      keyTerms: [
        { term: 'kisspeptin', definition: 'Hypothalamic peptide that stimulates GnRH release, critical for puberty onset' },
        { term: 'two-cell model', definition: 'Theca cells make androgens; granulosa cells aromatize them to estrogens' },
        { term: 'aromatase', definition: 'Enzyme (CYP19A1) that converts androgens to estrogens' },
        { term: 'pinopodes', definition: 'Endometrial surface projections marking the implantation window' },
        { term: 'decidualization', definition: 'Transformation of endometrial stromal cells in preparation for implantation' },
      ],
      clinicalNotes: 'Understanding the two-cell model explains why PCOS (excess LH, hyperandrogenism) and hypogonadotropic hypogonadism have opposite ovarian phenotypes. The implantation window concept is crucial for IVF timing.',
    },
    5: {
      level: 5,
      summary: 'Clinical mastery of menstrual cycle physiology enables diagnosis of ovulatory disorders, guides fertility treatment, and informs contraceptive mechanisms and hormone therapy.',
      explanation: `**Clinical Assessment of Ovulation:**

**Methods to Confirm Ovulation:**
1. **Midluteal progesterone:** >3 ng/mL confirms ovulation; >10 ng/mL indicates adequate luteal function
2. **Basal body temperature:** Biphasic pattern (0.3-0.5C rise post-ovulation)
3. **Urinary LH kits:** Detect surge 24-36 hours before ovulation
4. **Ultrasound:** Follicle monitoring, corpus luteum visualization
5. **Endometrial biopsy:** Secretory changes (now rarely used)

**Ovulatory Disorders (WHO Classification):**
- **Class I:** Hypogonadotropic hypogonadal (hypothalamic amenorrhea, Kallmann)
- **Class II:** Normogonadotropic normoestrogenic (PCOS, most common)
- **Class III:** Hypergonadotropic hypoestrogenic (primary ovarian insufficiency)

**Cycle-Based Contraception Mechanisms:**
- Combined hormonal: Suppress GnRH pulsatility, prevent LH surge
- Progestin-only: Variable ovulation suppression, cervical mucus changes
- IUD (hormonal): Local progestin effects, thin endometrium
- IUD (copper): Spermicidal, prevents fertilization/implantation

**Fertility Treatment Principles:**
- **Ovulation induction (WHO Class II):** Letrozole or clomiphene (anti-estrogen at hypothalamus)
- **Gonadotropin therapy:** FSH for follicular recruitment, hCG for LH surge
- **GnRH agonist flare vs. antagonist protocols** in IVF

**Abnormal Uterine Bleeding - PALM-COEIN:**
- **P**olyp, **A**denomyosis, **L**eiomyoma, **M**alignancy
- **C**oagulopathy, **O**vulatory dysfunction, **E**ndometrial, **I**atrogenic, **N**ot classified

**Evaluation of Abnormal Bleeding:**
1. History: Pattern, quantity (PBAC score), associated symptoms
2. Physical exam: Speculum, bimanual
3. Labs: CBC, TSH, prolactin, coagulation studies if indicated
4. Imaging: Transvaginal ultrasound, saline infusion sonography
5. Tissue: Endometrial biopsy if >45 years, risk factors, or treatment failure

**Management Approach:**
- Acute heavy bleeding: IV estrogen, high-dose OCP, tranexamic acid
- Chronic AUB: Treat underlying cause, hormonal management, procedural options
- Fertility-sparing vs. definitive treatment considerations

**Special Populations:**
- Adolescents: Anovulatory cycles normal for 2-3 years post-menarche
- Perimenopause: Irregular cycles, need to exclude pathology
- Athletes/eating disorders: Hypothalamic amenorrhea (functional)

**Current Guidelines:**
- ACOG recommends menstrual history as "vital sign" in adolescents
- Heavy menstrual bleeding defined as >80 mL per cycle or bleeding affecting quality of life
- First-line medical therapy often NSAID + hormonal management`,
      keyTerms: [
        { term: 'PALM-COEIN', definition: 'FIGO classification for abnormal uterine bleeding causes' },
        { term: 'PBAC', definition: 'Pictorial Blood Assessment Chart for quantifying menstrual blood loss' },
        { term: 'anovulatory bleeding', definition: 'Irregular bleeding due to estrogen without progesterone opposition' },
        { term: 'ovulation induction', definition: 'Medical stimulation of ovulation, typically with letrozole or clomiphene' },
      ],
      clinicalNotes: `Key clinical pearls:
- Cycle day 3 FSH/E2: Baseline ovarian reserve assessment
- AMH (anti-Mullerian hormone): Reflects antral follicle count, ovarian reserve
- In PCOS, elevated LH:FSH ratio (>2:1) is classic but not diagnostic
- Post-pill amenorrhea is a myth - investigate if menses do not return in 3 months
- Tranexamic acid reduces menstrual blood loss by ~50% without hormonal effects`,
    },
  },

  media: [],

  citations: [
    {
      id: 'speroff-2020',
      type: 'textbook',
      title: 'Speroff\'s Clinical Gynecologic Endocrinology and Infertility',
      authors: ['Taylor, H.S.', 'Pal, L.', 'Seli, E.'],
      source: 'Wolters Kluwer',
      chapter: 'The Menstrual Cycle',
      license: 'Proprietary - Referenced',
    },
    {
      id: 'acog-menstrual-2015',
      type: 'article',
      title: 'Menstruation in Girls and Adolescents: Using the Menstrual Cycle as a Vital Sign',
      source: 'ACOG Committee Opinion No. 651',
      url: 'https://www.acog.org/clinical/clinical-guidance/committee-opinion/articles/2015/12/menstruation-in-girls-and-adolescents-using-the-menstrual-cycle-as-a-vital-sign',
      license: 'Proprietary - Referenced',
    },
  ],

  crossReferences: [
    { targetId: 'irregular-periods', targetType: 'condition', relationship: 'related', label: 'Irregular Periods' },
    { targetId: 'heavy-periods', targetType: 'condition', relationship: 'related', label: 'Heavy Periods' },
    { targetId: 'fertility-awareness', targetType: 'topic', relationship: 'related', label: 'Fertility Awareness Methods' },
    { targetId: 'pcos', targetType: 'condition', relationship: 'related', label: 'PCOS' },
  ],

  tags: {
    systems: ['reproductive', 'endocrine'],
    topics: ['womens-health', 'menstrual-health', 'physiology'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      shelf: ['obstetrics-gynecology'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

// Additional detailed phase information
export const MENSTRUAL_CYCLE_PHASES: MenstrualCyclePhase[] = [
  {
    name: 'Menstrual Phase',
    days: 'Days 1-5',
    hormoneChanges: 'Low estrogen and progesterone; FSH begins to rise',
    physicalChanges: 'Uterine lining sheds; may experience cramps, fatigue, breast tenderness resolving',
    emotionalChanges: 'May feel relief from PMS symptoms; some experience low energy or mood',
    fertilitySigns: 'Low fertility; presence of menstrual bleeding',
  },
  {
    name: 'Follicular Phase',
    days: 'Days 1-13 (overlaps with menstruation)',
    hormoneChanges: 'FSH stimulates follicle development; estrogen rises steadily',
    physicalChanges: 'Energy often increases; cervical mucus becomes more evident; skin may improve',
    emotionalChanges: 'Often feel more outgoing, confident, and energetic as estrogen rises',
    fertilitySigns: 'Fertility increases toward end of phase; cervical mucus becomes wetter, clearer',
  },
  {
    name: 'Ovulation',
    days: 'Around Day 14 (varies)',
    hormoneChanges: 'LH surge triggers egg release; peak estrogen, slight progesterone rise',
    physicalChanges: 'Egg-white cervical mucus; possible mild pelvic pain (mittelschmerz); slight temperature dip before rise',
    emotionalChanges: 'Peak energy and libido for many; may feel most social and confident',
    fertilitySigns: 'Peak fertility; egg viable for 12-24 hours; sperm can survive up to 5 days',
  },
  {
    name: 'Luteal Phase',
    days: 'Days 15-28',
    hormoneChanges: 'Progesterone dominant; estrogen has secondary peak then falls; both drop if no pregnancy',
    physicalChanges: 'Temperature rises; cervical mucus thickens; possible bloating, breast tenderness, food cravings',
    emotionalChanges: 'May feel more inward, less social; PMS symptoms possible in late luteal phase',
    fertilitySigns: 'Low fertility after ovulation confirmed; fertile window has passed',
  },
];

export default NORMAL_MENSTRUAL_CYCLE;
