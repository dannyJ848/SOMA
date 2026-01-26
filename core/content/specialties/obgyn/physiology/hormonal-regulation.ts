/**
 * Hormonal Regulation Content
 *
 * Comprehensive coverage of reproductive hormone regulation including
 * the hypothalamic-pituitary-ovarian axis and feedback mechanisms.
 */

import { EducationalContent } from '../../../types';

export const hormonalRegulationContent: EducationalContent = {
  id: 'obgyn-physiology-hormonal-regulation',
  type: 'pathway',
  name: 'Hormonal Regulation of Reproduction',
  alternateNames: ['HPO axis', 'Reproductive endocrinology'],
  fmaId: undefined,

  levels: {
    1: {
      level: 1,
      summary: 'Hormones from the brain and ovaries work together to control the menstrual cycle and reproduction.',
      explanation: `Your body uses chemical messengers called hormones to control reproduction.

**Key players:**
- **Brain (hypothalamus and pituitary)**: Sends signals to start the process
- **Ovaries**: Respond to brain signals and send hormones back
- **Uterus**: Responds to ovarian hormones

**Main hormones:**
- FSH: Helps eggs develop
- LH: Triggers egg release
- Estrogen: Prepares body for pregnancy
- Progesterone: Maintains pregnancy`,
      keyTerms: [
        { term: 'hormone', definition: 'Chemical messenger that travels through blood to affect other organs' },
        { term: 'pituitary gland', definition: 'Small gland at base of brain that controls many hormones' },
      ],
    },
    2: {
      level: 2,
      summary: 'The hypothalamic-pituitary-ovarian axis coordinates reproductive function through releasing hormones, gonadotropins, and steroid hormones with feedback regulation.',
      explanation: `**Hormonal Hierarchy:**

**1. Hypothalamus**
- Produces GnRH (Gonadotropin-Releasing Hormone)
- Released in pulses
- Controls the pituitary gland

**2. Pituitary Gland**
- FSH (Follicle Stimulating Hormone): Stimulates follicle growth
- LH (Luteinizing Hormone): Triggers ovulation

**3. Ovaries**
- Estrogen: From developing follicle
- Progesterone: From corpus luteum
- Inhibin: Regulates FSH

**Feedback Loops:**
- Negative feedback: High hormone levels slow production
- Positive feedback: Very high estrogen triggers LH surge`,
      keyTerms: [
        { term: 'GnRH', definition: 'Gonadotropin-releasing hormone from hypothalamus' },
        { term: 'feedback loop', definition: 'When hormones control their own production' },
        { term: 'gonadotropins', definition: 'FSH and LH - hormones that act on the ovaries' },
      ],
    },
    3: {
      level: 3,
      summary: 'GnRH pulsatility determines gonadotropin ratios, with differential feedback from estradiol and progesterone modulating the reproductive axis throughout the cycle.',
      explanation: `**GnRH Pulse Patterns:**
- Follicular phase: Fast pulses (60-90 min) → favor LH synthesis
- Luteal phase: Slow pulses (3-4 hours) → favor FSH synthesis
- Pulse frequency determines LH:FSH ratio

**Estradiol Feedback:**
- Low levels: Negative feedback on GnRH and gonadotropins
- High sustained levels (>200 pg/mL, >50 hours): Positive feedback
- Positive feedback triggers LH surge

**Progesterone Effects:**
- Slows GnRH pulse frequency
- Enhances positive feedback response (with estrogen)
- Negative feedback on gonadotropin release

**Inhibin/Activin System:**
- Inhibin B: From granulosa cells, suppresses FSH
- Inhibin A: From corpus luteum
- Activin: Stimulates FSH (opposes inhibin)`,
      keyTerms: [
        { term: 'pulsatile secretion', definition: 'Hormone release in discrete bursts rather than continuously' },
        { term: 'positive feedback', definition: 'When high hormone levels increase rather than decrease a response' },
      ],
    },
    4: {
      level: 4,
      summary: 'Molecular mechanisms of hormone action include nuclear receptor signaling, membrane receptor pathways, and complex regulatory networks integrating reproductive and metabolic function.',
      explanation: `**GnRH Signaling:**
- Binds Gq-coupled receptor on gonadotropes
- Activates phospholipase C pathway
- Calcium/PKC signaling
- Continuous exposure causes desensitization (basis for GnRH agonist therapy)

**Steroid Hormone Receptors:**
- Nuclear receptors (ER, PR)
- Ligand binding → dimerization → DNA binding
- Gene transcription regulation
- Rapid non-genomic effects via membrane receptors

**Neuroendocrine Integration:**
- Kisspeptin: Essential activator of GnRH neurons
- Neurokinin B and dynorphin: Modulate kisspeptin
- KNDy neurons in arcuate nucleus

**Metabolic Signals:**
- Leptin: Permissive for GnRH secretion
- Insulin: Affects ovarian androgen production
- Thyroid hormone: Required for normal cycling
- Prolactin: Excess inhibits GnRH`,
      keyTerms: [
        { term: 'kisspeptin', definition: 'Neuropeptide essential for puberty and GnRH release' },
        { term: 'KNDy neurons', definition: 'Neurons producing kisspeptin, neurokinin B, and dynorphin' },
        { term: 'gonadotrope', definition: 'Pituitary cell producing FSH and LH' },
      ],
    },
    5: {
      level: 5,
      summary: 'Advanced reproductive endocrinology encompasses epigenetic regulation, circadian integration, stress responses, and clinical applications in fertility treatment and contraception.',
      explanation: `**Epigenetic Regulation:**
- DNA methylation of steroid receptor genes
- Histone modifications affect accessibility
- Environmental exposures alter epigenetic marks
- Transgenerational effects on fertility

**Circadian Rhythms:**
- LH surge timing linked to sleep-wake cycle
- CLOCK genes regulate reproductive function
- Melatonin influences GnRH neurons
- Shift work associated with menstrual dysfunction

**Stress and Reproduction:**
- CRH inhibits GnRH neurons
- Cortisol suppresses gonadotropins
- Functional hypothalamic amenorrhea
- β-endorphin modulation

**Clinical Applications:**

**Fertility Treatment:**
- GnRH agonist: Pituitary desensitization
- GnRH antagonist: Rapid suppression
- Clomiphene: Anti-estrogen effect increases FSH
- Gonadotropins: Direct ovarian stimulation

**Contraception:**
- Combined OCs: Suppress gonadotropins
- Progestins: Multiple mechanisms
- GnRH-based therapy for endometriosis

**Menopause:**
- Loss of negative feedback
- Elevated FSH/LH
- Hot flashes related to GnRH/kisspeptin changes`,
      keyTerms: [
        { term: 'functional hypothalamic amenorrhea', definition: 'Reversible anovulation due to stress, exercise, or low weight' },
        { term: 'GnRH agonist flare', definition: 'Initial stimulation before desensitization with GnRH agonist therapy' },
      ],
      clinicalNotes: 'Understanding hormone regulation guides management of PCOS (elevated LH:FSH ratio), hypothalamic amenorrhea (low gonadotropins), and hyperprolactinemia. GnRH antagonist protocols avoid the flare effect and allow rapid suppression in IVF.',
    },
  },

  media: [],

  citations: [
    {
      id: 'williams-hormones',
      type: 'textbook',
      title: 'Reproductive Endocrinology',
      source: 'Williams Gynecology, 4th Edition',
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'obgyn-physiology-menstrual-cycle', targetType: 'pathway', relationship: 'related', label: 'Menstrual Cycle' },
    { targetId: 'obgyn-physiology-ovarian-cycle', targetType: 'pathway', relationship: 'related', label: 'Ovarian Cycle' },
  ],

  tags: {
    systems: ['reproductive', 'endocrine'],
    structures: ['hypothalamus', 'pituitary', 'ovary'],
    topics: ['physiology', 'endocrinology'],
    keywords: ['hormones', 'HPO axis', 'GnRH', 'gonadotropins', 'feedback'],
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
