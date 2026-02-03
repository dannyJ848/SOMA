/**
 * Menstrual Cycle Physiology
 *
 * Comprehensive physiology of the menstrual cycle including
 * hormonal regulation, phases, and clinical correlations.
 */

import { EducationalContent } from '../../../types';

export const menstrualCyclePhysiology: EducationalContent = {
  id: 'obgyn-physiology-menstrual-cycle',
  type: 'pathway',
  name: 'Menstrual Cycle',
  alternateNames: ['Menstrual period', 'Monthly cycle'],
  fmaId: undefined,

  levels: {
    1: {
      level: 1,
      summary: 'The menstrual cycle is a monthly process that prepares the body for pregnancy.',
      explanation: `The menstrual cycle happens about once a month and prepares a woman's body for pregnancy.

**What happens:**
- The cycle usually lasts about 28 days (but can range from 21-35 days)
- Hormones control the changes in the body
- An egg is released from the ovary (ovulation)
- The uterus lining gets thick, ready for a baby
- If no pregnancy occurs, the lining sheds as a period

**Key phases:**
- **Period (days 1-5)**: Bleeding occurs as the uterus sheds its lining
- **Follicular phase**: An egg develops in the ovary
- **Ovulation (around day 14)**: The egg is released
- **Luteal phase**: The body prepares for possible pregnancy`,
      keyTerms: [
        { term: 'menstruation', definition: 'The monthly shedding of the uterus lining, also called a period' },
        { term: 'ovulation', definition: 'When an egg is released from the ovary' },
        { term: 'cycle', definition: 'A repeating pattern of events' },
      ],
      analogies: [
        'The menstrual cycle is like preparing a guest room each month - if no guest (baby) arrives, you strip the bed (period) and start fresh.',
      ],
      examples: [
        'Most women have their first period between ages 10-15.',
        'A typical period lasts 3-7 days.',
      ],
    },
    2: {
      level: 2,
      summary: 'The menstrual cycle is a coordinated hormonal process involving the hypothalamus, pituitary, and ovaries that regulates ovulation and prepares the endometrium for implantation.',
      explanation: `**Cycle Overview:**

The menstrual cycle averages 28 days and is divided into distinct phases controlled by hormones from the brain and ovaries.

**Phases of the Cycle:**

1. **Menstrual Phase (Days 1-5)**
   - Shedding of endometrial lining
   - Low estrogen and progesterone levels

2. **Follicular Phase (Days 1-13)**
   - FSH stimulates follicle development
   - Estrogen rises as follicle grows
   - Endometrium begins to thicken

3. **Ovulation (Day 14)**
   - LH surge triggers egg release
   - Occurs about 14 days before next period
   - Fertile window spans ~6 days

4. **Luteal Phase (Days 15-28)**
   - Corpus luteum produces progesterone
   - Endometrium becomes secretory
   - If no pregnancy, corpus luteum degenerates

**Key Hormones:**
- FSH (Follicle Stimulating Hormone): Develops the egg
- LH (Luteinizing Hormone): Triggers ovulation
- Estrogen: Builds uterine lining
- Progesterone: Maintains lining for pregnancy`,
      keyTerms: [
        { term: 'follicle', definition: 'Fluid-filled sac in the ovary containing the developing egg' },
        { term: 'corpus luteum', definition: 'Structure formed from the follicle after ovulation that produces progesterone' },
        { term: 'FSH', definition: 'Follicle Stimulating Hormone - stimulates egg development' },
        { term: 'LH surge', definition: 'Rapid rise in luteinizing hormone that triggers ovulation' },
      ],
    },
    3: {
      level: 3,
      summary: 'The menstrual cycle is regulated by the hypothalamic-pituitary-ovarian axis through pulsatile GnRH secretion, with feedback mechanisms controlling folliculogenesis, ovulation, and luteal function.',
      explanation: `**Hormonal Regulation:**

**Hypothalamic-Pituitary-Ovarian (HPO) Axis:**
- GnRH released in pulses from hypothalamus
- Pulse frequency varies with cycle phase
- Controls FSH and LH release from anterior pituitary

**Follicular Phase Details:**
- FSH recruits cohort of antral follicles
- One dominant follicle selected by day 5-7
- Granulosa cells produce estradiol
- Rising estrogen exerts negative feedback on FSH
- Declining FSH causes atresia of non-dominant follicles

**Ovulation Trigger:**
- Sustained high estrogen (>200 pg/mL for 50+ hours)
- Switches to positive feedback
- LH surge (10-12x baseline) lasting 48-50 hours
- Ovulation occurs 34-36 hours after LH surge onset

**Luteal Phase Details:**
- Corpus luteum forms from collapsed follicle
- Produces progesterone (peak 7-8 days post-ovulation)
- Lifespan: 14 days without hCG rescue
- Luteolysis leads to menstruation`,
      keyTerms: [
        { term: 'GnRH', definition: 'Gonadotropin-releasing hormone from hypothalamus controlling pituitary gonadotropins' },
        { term: 'dominant follicle', definition: 'Single follicle selected for ovulation, typically 18-25mm at maturity' },
        { term: 'luteolysis', definition: 'Degeneration of corpus luteum leading to progesterone withdrawal' },
      ],
      clinicalNotes: 'The LH surge is detected by ovulation predictor kits. Anovulation is suspected when cycles are irregular or progesterone remains low in mid-luteal phase.',
    },
    4: {
      level: 4,
      summary: 'The menstrual cycle involves complex neuroendocrine signaling with GnRH pulse frequency modulation, two-cell two-gonadotropin theory of estrogen synthesis, and precise feedback mechanisms enabling the ovulatory switch.',
      explanation: `**Neuroendocrine Control:**

**GnRH Pulse Dynamics:**
- Follicular phase: Rapid pulses (every 60-90 min) favor LH
- Luteal phase: Slow pulses (every 3-4 hours) favor FSH
- Kisspeptin neurons regulate GnRH pulse generator
- Progesterone slows pulse frequency

**Two-Cell Two-Gonadotropin Model:**
- Theca cells: LH receptors → Androgen production (androstenedione)
- Granulosa cells: FSH receptors → Aromatase → Estradiol synthesis
- Cooperation required for estrogen production

**Follicular Selection:**
- FSH window theory: Only follicle with lowest FSH threshold survives
- Dominant follicle acquires LH receptors
- Produces inhibin B → further suppresses FSH
- Non-dominant follicles undergo apoptosis

**Positive Feedback Switch:**
- Requires sustained estradiol >200 pg/mL
- Duration >50 hours
- Progesterone priming enhances LH surge
- GnRH surge from hypothalamus amplifies response

**Oocyte Maturation:**
- Meiotic arrest at prophase I until LH surge
- LH surge triggers meiosis resumption
- Oocyte completes meiosis I (polar body extrusion)
- Arrests again at metaphase II until fertilization`,
      keyTerms: [
        { term: 'kisspeptin', definition: 'Neuropeptide essential for GnRH release and puberty initiation' },
        { term: 'aromatase', definition: 'Enzyme in granulosa cells converting androgens to estrogens' },
        { term: 'inhibin B', definition: 'Glycoprotein from granulosa cells that selectively suppresses FSH' },
      ],
    },
    5: {
      level: 5,
      summary: 'Advanced understanding of menstrual cycle regulation includes molecular mechanisms of follicle selection, oocyte competence acquisition, and the integration of metabolic, stress, and circadian signals with reproductive function.',
      explanation: `**Molecular Mechanisms of Follicular Selection:**

**Anti-Mullerian Hormone (AMH):**
- Produced by granulosa cells of growing follicles
- Inhibits primordial follicle recruitment
- Marker of ovarian reserve
- Declines with age; undetectable at menopause

**Growth Factor Signaling:**
- IGF system: Amplifies FSH action on granulosa cells
- BMPs: Regulate granulosa cell proliferation
- GDF-9 and BMP-15: Oocyte-derived factors essential for folliculogenesis

**Epigenetic Regulation:**
- DNA methylation patterns change through cycle
- Histone modifications regulate gene expression
- microRNAs modulate hormone receptor expression

**Integration with Systemic Factors:**

**Metabolic Signals:**
- Leptin required for GnRH pulsatility
- Kisspeptin neurons integrate metabolic status
- Low energy availability → hypothalamic amenorrhea

**Stress Response:**
- CRH inhibits GnRH neurons
- Cortisol suppresses gonadotropin release
- Chronic stress → anovulation

**Circadian Rhythms:**
- LH surge timing linked to circadian clock
- Melatonin influences ovarian function
- Shift work associated with menstrual irregularity

**Clinical Applications:**

**Controlled Ovarian Stimulation:**
- Exogenous FSH overrides selection mechanism
- Multiple dominant follicles develop
- GnRH agonist/antagonist prevents premature LH surge
- hCG triggers final oocyte maturation

**Ovulation Induction:**
- Clomiphene: Anti-estrogen increases FSH
- Letrozole: Aromatase inhibitor, similar mechanism
- Gonadotropins: Direct FSH/LH supplementation`,
      keyTerms: [
        { term: 'AMH', definition: 'Anti-Mullerian hormone - marker of ovarian reserve produced by small antral follicles' },
        { term: 'GDF-9', definition: 'Growth differentiation factor 9 - oocyte-secreted factor essential for follicle development' },
        { term: 'hypothalamic amenorrhea', definition: 'Absence of menses due to suppressed GnRH from stress, low weight, or excessive exercise' },
      ],
      clinicalNotes: 'AMH testing is standard in fertility evaluation. Controlled ovarian stimulation protocols are tailored based on ovarian reserve markers. Understanding GnRH pulse physiology enables treatment of hypothalamic amenorrhea with pulsatile GnRH therapy.',
    },
  },

  media: [
    {
      id: 'menstrual-cycle-1',
      type: 'diagram',
      filename: 'menstrual-cycle-phases.svg',
      title: 'Menstrual Cycle Phases',
      description: 'Overview of follicular and luteal phases with hormone levels',
    },
  ],

  citations: [
    {
      id: 'williams-menstrual',
      type: 'textbook',
      title: 'Reproductive Endocrinology',
      source: 'Williams Gynecology, 4th Edition',
      chapter: '15',
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'obgyn-physiology-ovarian-cycle', targetType: 'pathway', relationship: 'related', label: 'Ovarian Cycle' },
    { targetId: 'obgyn-physiology-uterine-cycle', targetType: 'pathway', relationship: 'related', label: 'Uterine Cycle' },
  ],

  tags: {
    systems: ['reproductive', 'endocrine'],
    structures: ['ovary', 'uterus', 'hypothalamus', 'pituitary'],
    topics: ['physiology', 'endocrinology'],
    keywords: ['menstrual cycle', 'ovulation', 'hormones', 'fertility'],
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
