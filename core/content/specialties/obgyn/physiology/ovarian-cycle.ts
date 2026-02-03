/**
 * Ovarian Cycle Content
 *
 * Detailed physiology of the ovarian cycle including follicular development,
 * ovulation, and corpus luteum function.
 */

import { EducationalContent } from '../../../types';

export const ovarianCycleContent: EducationalContent = {
  id: 'obgyn-physiology-ovarian-cycle',
  type: 'pathway',
  name: 'Ovarian Cycle',
  alternateNames: ['Ovarian function', 'Follicular cycle'],
  fmaId: undefined,

  levels: {
    1: {
      level: 1,
      summary: 'The ovarian cycle is the monthly process where an egg develops and is released from the ovary.',
      explanation: `Each month, the ovaries go through a cycle to prepare and release an egg.

**What happens:**
- Eggs develop inside small fluid-filled sacs called follicles
- Usually one egg becomes mature enough to be released
- The egg travels down the fallopian tube
- If not fertilized, the cycle starts again

**Two main phases:**
1. **Follicular phase**: Egg develops inside a follicle
2. **Luteal phase**: After egg release, the empty follicle helps prepare for pregnancy`,
      keyTerms: [
        { term: 'follicle', definition: 'A small sac in the ovary that contains a developing egg' },
        { term: 'ovulation', definition: 'The release of a mature egg from the ovary' },
      ],
      analogies: [
        'Think of follicles like tiny incubators, each nurturing an egg until one is ready to graduate.',
      ],
    },
    2: {
      level: 2,
      summary: 'The ovarian cycle consists of follicular development driven by FSH, ovulation triggered by LH surge, and luteal function maintained by the corpus luteum.',
      explanation: `**Phases of the Ovarian Cycle:**

**1. Follicular Phase (Days 1-14)**
- FSH stimulates multiple follicles to develop
- One becomes the dominant follicle
- Follicle grows from 2mm to about 20mm
- Produces increasing amounts of estrogen

**2. Ovulation (Day 14)**
- LH surge causes follicle rupture
- Mature egg released into fallopian tube
- Egg viable for fertilization for 12-24 hours

**3. Luteal Phase (Days 14-28)**
- Empty follicle becomes corpus luteum
- Produces progesterone and estrogen
- Supports early pregnancy if fertilization occurs
- Degenerates after 14 days if no pregnancy`,
      keyTerms: [
        { term: 'corpus luteum', definition: 'Yellow body formed from follicle after ovulation, produces progesterone' },
        { term: 'dominant follicle', definition: 'The single follicle that continues to mature while others regress' },
      ],
    },
    3: {
      level: 3,
      summary: 'The ovarian cycle involves primordial follicle recruitment, selection of the dominant follicle through FSH sensitivity, and corpus luteum formation with defined hormonal output.',
      explanation: `**Follicular Development Stages:**

1. **Primordial follicle**: Resting state, single layer of flat granulosa cells
2. **Primary follicle**: Cuboidal granulosa cells, zona pellucida forming
3. **Secondary follicle**: Multiple granulosa layers, theca cells appear
4. **Antral follicle**: Fluid-filled cavity develops
5. **Graafian follicle**: Mature preovulatory follicle, 18-25mm

**Selection of Dominant Follicle:**
- Higher FSH receptor density
- Greater estrogen production
- Produces inhibin B, suppressing FSH
- Other follicles undergo atresia

**Corpus Luteum Function:**
- Peak progesterone: Day 21-22 of cycle
- Produces 25-50 mg progesterone daily
- Half-life: 14 days without hCG rescue
- hCG maintains function in early pregnancy`,
      keyTerms: [
        { term: 'zona pellucida', definition: 'Glycoprotein layer surrounding the oocyte' },
        { term: 'theca cells', definition: 'Cells surrounding granulosa layer that produce androgens' },
        { term: 'atresia', definition: 'Programmed degeneration of non-dominant follicles' },
      ],
    },
    4: {
      level: 4,
      summary: 'Advanced ovarian cycle physiology encompasses two-cell theory of steroidogenesis, molecular mechanisms of follicular selection, and the ovulatory cascade.',
      explanation: `**Two-Cell Two-Gonadotropin Theory:**
- Theca cells: LH → cAMP → StAR → cholesterol transport → androstenedione
- Granulosa cells: FSH → aromatase → converts androgens to estradiol
- Cooperation essential for estrogen production

**Ovulatory Cascade:**
1. LH surge activates granulosa cell LH receptors
2. Prostaglandin and protease activation
3. Follicular wall weakening
4. Stigma formation and rupture
5. Cumulus-oocyte complex release

**Corpus Luteum Physiology:**
- Luteinization: Granulosa → large luteal cells
- Theca → small luteal cells
- Vascularization enables hormone secretion
- Progesterone synthesis: Cholesterol → pregnenolone → progesterone`,
      keyTerms: [
        { term: 'StAR protein', definition: 'Steroidogenic acute regulatory protein, rate-limiting for steroid synthesis' },
        { term: 'stigma', definition: 'Weakened area of follicular wall where rupture occurs' },
        { term: 'luteinization', definition: 'Transformation of follicular cells into luteal cells after ovulation' },
      ],
    },
    5: {
      level: 5,
      summary: 'Comprehensive understanding includes oocyte-granulosa bidirectional signaling, chromatin remodeling during oocyte maturation, and molecular regulation of corpus luteum lifespan.',
      explanation: `**Oocyte-Somatic Cell Communication:**
- Gap junctions between oocyte and cumulus cells
- GDF-9 and BMP-15 from oocyte regulate granulosa proliferation
- Cumulus cells provide metabolic support
- Bidirectional signaling essential for oocyte quality

**Oocyte Maturation:**
- Germinal vesicle breakdown following LH surge
- Completion of meiosis I
- Extrusion of first polar body
- Arrest at metaphase II
- Cortical granule redistribution

**Corpus Luteum Molecular Biology:**
- Angiogenic factors: VEGF, FGF2
- Steroidogenic enzymes upregulated
- Luteolysis: PGF2α from uterus (in other species)
- In humans: Intrinsic lifespan unless rescued by hCG

**Clinical Correlations:**
- Luteal phase defect: Inadequate progesterone production
- Ovarian hyperstimulation: Excessive response to gonadotropins
- Polycystic ovaries: Arrested follicular development`,
      keyTerms: [
        { term: 'germinal vesicle', definition: 'Nucleus of the oocyte before meiotic resumption' },
        { term: 'cumulus cells', definition: 'Granulosa cells immediately surrounding the oocyte' },
      ],
      clinicalNotes: 'Understanding follicular dynamics guides controlled ovarian stimulation protocols. Monitoring follicle growth via ultrasound and estradiol levels optimizes timing for IUI or egg retrieval.',
    },
  },

  media: [],

  citations: [
    {
      id: 'williams-ovarian',
      type: 'textbook',
      title: 'Reproductive Endocrinology',
      source: 'Williams Gynecology, 4th Edition',
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'obgyn-physiology-menstrual-cycle', targetType: 'pathway', relationship: 'parent', label: 'Menstrual Cycle' },
    { targetId: 'obgyn-anatomy-ovaries', targetType: 'structure', relationship: 'related', label: 'Ovary Anatomy' },
  ],

  tags: {
    systems: ['reproductive'],
    structures: ['ovary'],
    topics: ['physiology'],
    keywords: ['ovarian cycle', 'follicle', 'ovulation', 'corpus luteum'],
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
