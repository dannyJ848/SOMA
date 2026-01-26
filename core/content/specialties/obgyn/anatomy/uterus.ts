/**
 * Uterus Anatomy
 *
 * Comprehensive anatomy of the uterus including structure, layers,
 * blood supply, innervation, and clinical correlations.
 */

import { EducationalContent } from '../../../types';

export const uterusAnatomy: EducationalContent = {
  id: 'obgyn-anatomy-uterus',
  type: 'structure',
  name: 'Uterus',
  alternateNames: ['Womb', 'Uterine body', 'Matrix'],
  fmaId: 'FMA:17558',

  levels: {
    1: {
      level: 1,
      summary: 'The uterus is a pear-shaped organ where a baby grows during pregnancy.',
      explanation: `The uterus, also called the womb, is one of the most important organs for having a baby.

**What it looks like:**
- Shaped like an upside-down pear
- About the size of your fist when not pregnant
- Located in the lower belly, between the bladder and rectum

**What it does:**
- Provides a safe place for a fertilized egg to grow into a baby
- Has a special lining that gets thick each month, preparing for pregnancy
- If no pregnancy happens, this lining comes out as a period
- Can stretch to be much bigger during pregnancy (from pear-sized to watermelon-sized!)

**Parts of the uterus:**
- **Top (fundus)**: The rounded top part
- **Middle (body)**: The main part where the baby grows
- **Bottom (cervix)**: The narrow opening that connects to the vagina`,
      keyTerms: [
        { term: 'uterus', definition: 'The organ where a baby develops during pregnancy' },
        { term: 'womb', definition: 'Another name for the uterus' },
        { term: 'cervix', definition: 'The lower, narrow part of the uterus that opens into the vagina' },
      ],
      analogies: [
        'The uterus is like a stretchy balloon that can expand from the size of a pear to fit a full-term baby.',
        'Think of the uterus like a cozy room that prepares fresh bedding every month for a possible guest (baby).',
      ],
      examples: [
        'When you are not pregnant, your uterus is about 3 inches long and 2 inches wide.',
        'By the end of pregnancy, the uterus stretches to about 500 times its original size!',
      ],
    },
    2: {
      level: 2,
      summary: 'The uterus is a hollow, muscular organ located in the female pelvis that serves as the site for menstruation, implantation, and fetal development during pregnancy.',
      explanation: `**Anatomy Overview:**

The uterus is a thick-walled, pear-shaped muscular organ located in the pelvis between the bladder (front) and rectum (back).

**Dimensions (non-pregnant):**
- Length: 7-8 cm (3 inches)
- Width: 4-5 cm (2 inches)
- Thickness: 2-3 cm
- Weight: 30-40 grams

**Anatomical Regions:**
1. **Fundus**: Dome-shaped top, above where fallopian tubes connect
2. **Body (corpus)**: Main portion; widest part of uterus
3. **Isthmus**: Narrowed segment between body and cervix
4. **Cervix**: Lower cylindrical portion that projects into vagina

**Three Layers of the Uterine Wall:**
1. **Endometrium** (inner layer):
   - Lining that changes with menstrual cycle
   - Sheds during menstruation
   - Where embryo implants

2. **Myometrium** (middle layer):
   - Thick smooth muscle
   - Contracts during labor
   - Makes up most of uterine wall

3. **Perimetrium** (outer layer):
   - Thin outer covering
   - Part of peritoneum (abdominal lining)

**Position:**
- Normally tilted forward (anteverted)
- Bent forward on itself (anteflexed)
- Some women have a backward-tilted uterus (retroverted)`,
      keyTerms: [
        { term: 'endometrium', definition: 'Inner lining of the uterus that thickens each month and sheds during menstruation', pronunciation: 'en-doh-MEE-tree-um' },
        { term: 'myometrium', definition: 'Thick muscular middle layer of the uterus', pronunciation: 'my-oh-MEE-tree-um' },
        { term: 'fundus', definition: 'The rounded top portion of the uterus above the fallopian tube openings', pronunciation: 'FUN-dus' },
        { term: 'anteverted', definition: 'Tilted forward position of the uterus' },
      ],
      analogies: [
        'The three layers of the uterus are like a coat: the endometrium is the soft inner lining, the myometrium is the thick insulation, and the perimetrium is the outer shell.',
      ],
    },
    3: {
      level: 3,
      summary: 'The uterus is a fibromuscular organ consisting of the fundus, body, isthmus, and cervix, with three distinct wall layers (endometrium, myometrium, perimetrium) and is supported by cardinal, uterosacral, round, and broad ligaments.',
      explanation: `**Gross Anatomy:**

**Uterine Regions:**
- **Fundus**: Superior portion above uterine tubes; most mobile
- **Body (Corpus)**: Main portion; anterior surface (vesical) flatter than posterior (intestinal)
- **Isthmus**: Constricted segment; becomes lower uterine segment in pregnancy
- **Cervix**: Lower 1/3; supravaginal and vaginal portions

**Histological Layers:**

1. **Endometrium:**
   - Functional layer: Proliferates and sheds cyclically
   - Basal layer: Regenerative; not shed during menses
   - Contains spiral arteries (functional) and straight arteries (basal)
   - Glands: Simple tubular, become tortuous in secretory phase

2. **Myometrium:**
   - Thickest layer (12-15 mm)
   - Three indistinct smooth muscle strata:
     - Outer longitudinal
     - Middle circular/oblique (contains major blood vessels)
     - Inner longitudinal
   - Increases 10-fold in pregnancy via hyperplasia and hypertrophy

3. **Perimetrium:**
   - Visceral peritoneum
   - Covers fundus and most of body
   - Reflects onto bladder (uterovesical pouch) and rectum (rectouterine pouch)

**Uterine Ligaments:**
| Ligament | Location | Contents | Function |
|----------|----------|----------|----------|
| Broad | Double peritoneal fold | Tubes, ovarian vessels | Support |
| Cardinal (transverse cervical) | Base of broad ligament | Uterine artery/vein | Primary support |
| Uterosacral | Cervix to sacrum | Autonomic nerves | Support, sensation |
| Round | Fundus to labia majora | Sampson artery | Maintains anteversion |

**Blood Supply:**
- **Uterine artery**: Branch of internal iliac
  - Crosses ureter at level of cervix ("water under the bridge")
  - Ascending branch: supplies body, anastomoses with ovarian artery
  - Vaginal branches: supply cervix
- **Ovarian artery**: Supplies fundus via anastomosis

**Venous Drainage:**
- Uterine venous plexus → internal iliac veins
- Anastomoses with vaginal and ovarian plexuses

**Lymphatic Drainage:**
- Fundus: Para-aortic nodes (with ovarian)
- Body: External iliac nodes
- Cervix: External iliac, internal iliac, obturator, sacral nodes`,
      keyTerms: [
        { term: 'spiral arteries', definition: 'Coiled arteries in functional endometrium that constrict before menstruation, causing tissue ischemia' },
        { term: 'cardinal ligament', definition: 'Primary structural support for uterus and cervix; contains uterine vessels' },
        { term: 'lower uterine segment', definition: 'Isthmus region that thins and expands during labor; site of low transverse cesarean incision' },
        { term: 'junctional zone', definition: 'Inner myometrium visible on MRI as low-signal band; abnormalities associated with adenomyosis' },
      ],
      clinicalNotes: 'The uterine artery crossing the ureter at the cervix is a key surgical landmark. "Water under the bridge" reminds surgeons that the ureter (water) passes under the uterine artery. This relationship puts the ureter at risk during hysterectomy.',
    },
    4: {
      level: 4,
      summary: 'The uterus demonstrates complex vascular architecture with hormone-responsive endometrium undergoing cyclic regeneration, a myometrium capable of coordinated contractility, and multiple ligamentous supports with defined surgical planes critical for operative gynecology.',
      explanation: `**Detailed Vascular Anatomy:**

**Uterine Artery:**
- Origin: Anterior division of internal iliac artery
- Course:
  - Runs medially in base of broad ligament
  - Crosses ureter ~1.5 cm lateral to cervix (at level of internal os)
  - Ascends along lateral uterine margin in parametrium
- Branches:
  - Cervicovaginal branch
  - Ascending/descending branches
  - Arcuate arteries → radial arteries → spiral/basal arteries
- Anastomoses: With ovarian artery (superior) and vaginal artery (inferior)

**Microvascular Architecture:**
- Radial arteries: Penetrate myometrium perpendicularly
- Basal arteries: Supply basal endometrium; do not respond to hormones
- Spiral arteries:
  - Supply functional endometrium
  - Highly hormone-responsive
  - Remodel during implantation (become uteroplacental vessels)
  - Constriction triggers menstruation

**Endometrial Physiology:**
- Proliferative phase: Estrogen-driven; 1-3 mm → 8-14 mm
- Secretory phase: Progesterone-dominant; glandular secretion, decidualization
- Stem cells in basal layer enable complete regeneration

**Myometrial Physiology:**
- Gap junctions (connexins): Increase near labor; enable coordinated contractions
- Oxytocin receptors: Upregulated by estrogen; maximal at term
- Prostaglandins: PGF2α and PGE2 promote contractions
- Progesterone: Maintains quiescence during pregnancy

**Innervation:**
- Sympathetic: T10-L2 via hypogastric plexus
  - Uterine contraction, vasoconstriction
- Parasympathetic: S2-S4 via pelvic splanchnic nerves
  - Vasodilation, relaxation
- Sensory: Primarily through sympathetic pathways
  - Cervical dilation: visceral pain to T10-L1
  - Uterine body: T11-L2

**Peritoneal Relationships:**
- Uterovesical pouch: Anterior; accessed in cesarean section
- Rectouterine pouch (of Douglas): Posterior; most dependent pelvic space
- Vesicouterine fold: Incised in cesarean delivery

**MRI Anatomy (T2-weighted):**
- Endometrium: High signal
- Junctional zone: Low signal (inner myometrium)
- Outer myometrium: Intermediate signal
- Parametrium: Fat signal with vessels`,
      keyTerms: [
        { term: 'arcuate arteries', definition: 'Branches of uterine artery that run circumferentially in outer myometrium' },
        { term: 'decidualization', definition: 'Progesterone-induced transformation of endometrial stromal cells for implantation support' },
        { term: 'gap junctions', definition: 'Intercellular channels (connexin-43) that allow coordinated myometrial contractions' },
        { term: 'parametrium', definition: 'Connective tissue lateral to cervix and between leaves of broad ligament; contains vessels and ureter' },
      ],
      clinicalNotes: 'Adenomyosis is characterized by endometrial glands within myometrium, often causing junctional zone thickening (>12 mm on MRI is diagnostic). Leiomyomas (fibroids) can distort endometrial cavity (submucosal), grow within myometrium (intramural), or project outward (subserosal).',
    },
    5: {
      level: 5,
      summary: 'The uterus requires comprehensive understanding of surgical planes, vascular territories, and lymphatic drainage patterns for oncologic staging and surgical management, with molecular mechanisms underlying cyclic regeneration, pregnancy adaptation, and parturition informing current therapeutic approaches.',
      explanation: `**Surgical Anatomy:**

**Avascular Spaces:**
1. Paravesical: Between bladder and obturator vessels
2. Vesicouterine: Between bladder and cervix
3. Pararectal: Between rectum and internal iliac vessels
4. Rectovaginal: Between vagina and rectum

**Hysterectomy Types (Querleu-Morrow Classification):**
| Type | Parametrial Resection | Indications |
|------|----------------------|-------------|
| A | At cervix (extrafascial) | Benign disease, CIN |
| B1 | At ureter (partial) | Early cervical cancer |
| B2 | B1 + paracervical nodes | IB1-IB2 cervical cancer |
| C1 | At pelvic sidewall (nerve-sparing) | IB2-IIA cervical cancer |
| C2 | At sidewall (non-nerve-sparing) | Larger tumors |

**Uterine Artery Embolization (UAE):**
- Selective catheterization via femoral approach
- Particles: 500-700 micron polyvinyl alcohol or tris-acryl gelatin
- Preserves uterus while devascularizing fibroids
- Contraindicated: Pregnancy desire (relative), active infection, GnRH agonist pre-treatment

**Endometrial Molecular Biology:**

*Proliferative Phase:*
- Estrogen → ERα activation → proliferation
- Upregulation: IGF-1, EGF, cyclin D1
- Angiogenesis: VEGF expression

*Secretory Phase:*
- Progesterone → PR activation → differentiation
- Downregulation of ER
- Secretory proteins: Glycodelin, IGFBP-1
- Decidualization: HOXA10, HOXA11, FOXO1

*Menstruation Cascade:*
- Progesterone withdrawal → PG synthesis ↑
- MMP activation → tissue breakdown
- Spiral artery constriction → ischemia
- Inflammatory mediators: IL-8, MCP-1

**Implantation Window:**
- Days 20-24 of cycle (6-10 days post-ovulation)
- Pinopodes: Apical protrusions marking receptivity
- Key markers: Integrins (αvβ3), LIF, HOXA10/11
- Dysregulation → implantation failure, early pregnancy loss

**Pregnancy Adaptation:**

*Myometrial Changes:*
- Hyperplasia (early) + Hypertrophy (late)
- 10-12x increase in myometrial mass
- Increased vascularization
- Collagen remodeling: ↑Type III/Type I ratio

*Cervical Remodeling:*
- Softening (Goodell sign) via ↑ water, ↓collagen cross-linking
- Prostaglandin-mediated ripening
- MMP-mediated collagen degradation

**Parturition Mechanisms:**

*Activation:*
- Cortisol surge → placental CRH increase
- Estrogen/Progesterone ratio increases
- Oxytocin receptor upregulation
- Gap junction formation

*Stimulation:*
- Oxytocin release (Ferguson reflex)
- Prostaglandins (PGF2α, PGE2)
- Mechanical stretch → contraction

**Lymphatic Mapping:**
- Sentinel node: ICG, technetium-99m, or blue dye
- Cervical injection: Bilateral drainage
- Fundal injection: Para-aortic drainage
- Algorithm: Bilateral mapping or side-specific dissection

**Uterine Pathology Correlations:**

*Endometrial Cancer:*
- Type I: Estrogen-dependent, endometrioid, PTEN mutations
- Type II: Non-estrogen-dependent, serous/clear cell, p53 mutations
- Myometrial invasion depth: Key prognostic factor

*Leiomyomas:*
- Monoclonal smooth muscle proliferation
- MED12 mutations (70% of cases)
- Estrogen/progesterone-responsive
- GnRH agonists: Temporary shrinkage
- Newer agents: Elagolix, relugolix (oral GnRH antagonists)

*Adenomyosis:*
- Ectopic endometrial tissue in myometrium
- Associated with multiparity, uterine surgery
- Diffuse or focal (adenomyoma)
- Treatment: GnRH agonists, levonorgestrel IUD, hysterectomy`,
      keyTerms: [
        { term: 'Ferguson reflex', definition: 'Positive feedback loop where cervical stretching triggers oxytocin release, enhancing uterine contractions' },
        { term: 'pinopodes', definition: 'Apical membrane protrusions on endometrial epithelium marking the implantation window' },
        { term: 'MED12 mutations', definition: 'Most common genetic alteration in uterine leiomyomas, affecting mediator complex subunit 12' },
        { term: 'parametrial invasion', definition: 'Extension of cervical cancer into lateral pelvic connective tissue; upstages to IIB' },
      ],
      clinicalNotes: 'Current practice: Sentinel lymph node mapping increasingly replaces comprehensive lymphadenectomy in early-stage endometrial cancer (FIRES, SHREC trials). For fibroids, relugolix with add-back therapy offers an oral alternative to GnRH agonist injections. Fertility-preserving management of atypical endometrial hyperplasia/early endometrial cancer may include progestin therapy (oral, IUD) with close surveillance.',
    },
  },

  media: [
    {
      id: 'uterus-anatomy-1',
      type: 'diagram',
      filename: 'uterus-anatomy-layers.svg',
      title: 'Uterine Wall Layers',
      description: 'Cross-section showing endometrium, myometrium, and perimetrium',
    },
    {
      id: 'uterus-anatomy-2',
      type: 'diagram',
      filename: 'uterus-blood-supply.svg',
      title: 'Uterine Blood Supply',
      description: 'Arterial and venous supply including arcuate and spiral arteries',
    },
  ],

  citations: [
    {
      id: 'williams-gyn-uterus',
      type: 'textbook',
      title: 'Pelvic Anatomy',
      source: 'Williams Gynecology, 4th Edition',
      chapter: '38',
      license: 'Copyrighted',
    },
    {
      id: 'openstax-uterus',
      type: 'textbook',
      title: 'The Female Reproductive System',
      source: 'OpenStax Anatomy and Physiology 2e',
      chapter: '27.2',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/27-2-anatomy-and-physiology-of-the-female-reproductive-system',
      license: 'CC BY 4.0',
    },
  ],

  crossReferences: [
    { targetId: 'obgyn-anatomy-female-reproductive-overview', targetType: 'structure', relationship: 'parent', label: 'Female Reproductive System' },
    { targetId: 'obgyn-anatomy-cervix', targetType: 'structure', relationship: 'child', label: 'Cervix' },
    { targetId: 'obgyn-physiology-menstrual-cycle', targetType: 'pathway', relationship: 'related', label: 'Menstrual Cycle' },
    { targetId: 'obgyn-conditions-fibroids', targetType: 'condition', relationship: 'see-also', label: 'Uterine Fibroids' },
  ],

  tags: {
    systems: ['reproductive'],
    structures: ['FMA:17558', 'uterus'],
    topics: ['anatomy', 'gynecology'],
    keywords: ['uterus', 'womb', 'endometrium', 'myometrium', 'uterine anatomy'],
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
