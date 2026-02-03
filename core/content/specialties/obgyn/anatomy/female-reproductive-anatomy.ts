/**
 * Female Reproductive Anatomy - Overview
 *
 * Comprehensive overview of the female reproductive system including
 * internal and external structures, blood supply, innervation, and
 * clinical correlations.
 */

import { EducationalContent } from '../../../types';

export const femaleReproductiveAnatomy: EducationalContent = {
  id: 'obgyn-anatomy-female-reproductive-overview',
  type: 'structure',
  name: 'Female Reproductive System',
  alternateNames: ['Female genital system', 'Female reproductive tract'],
  fmaId: 'FMA:45652',

  levels: {
    1: {
      level: 1,
      summary: 'The female reproductive system includes special organs inside and outside the body that allow women to have babies.',
      explanation: `The female reproductive system is like a special nursery inside a woman's body. It has two main parts:

**Inside the body (internal organs):**
- **Ovaries**: Two small organs about the size of almonds that store eggs
- **Fallopian tubes**: Two tubes that carry eggs from the ovaries to the uterus
- **Uterus (womb)**: A pear-shaped organ where a baby grows during pregnancy
- **Cervix**: The opening at the bottom of the uterus
- **Vagina**: The canal that connects the uterus to the outside of the body

**Outside the body (external organs):**
- **Vulva**: The outer parts you can see, which protect the opening to the vagina

These organs work together to:
- Make and release eggs
- Allow a baby to develop and grow
- Help the baby come out when it's ready to be born`,
      keyTerms: [
        { term: 'ovaries', definition: 'Two small organs that store and release eggs' },
        { term: 'uterus', definition: 'The organ where a baby grows during pregnancy, also called the womb' },
        { term: 'fallopian tubes', definition: 'Tubes that carry eggs from the ovaries to the uterus' },
        { term: 'vagina', definition: 'The canal that connects the inside reproductive organs to the outside of the body' },
      ],
      analogies: [
        'The ovaries are like storage containers that hold thousands of tiny eggs, releasing one about once a month.',
        'The fallopian tubes are like slides that help eggs travel from the ovaries to the uterus.',
        'The uterus is like a special room that can stretch to fit a growing baby.',
      ],
      examples: [
        'When a girl goes through puberty, her ovaries start releasing eggs each month.',
        'During pregnancy, the uterus grows from the size of a pear to the size of a watermelon.',
      ],
    },
    2: {
      level: 2,
      summary: 'The female reproductive system consists of internal organs (ovaries, fallopian tubes, uterus, cervix, vagina) and external genitalia (vulva), working together to produce eggs, support fertilization, and nurture fetal development.',
      explanation: `The female reproductive system has two main components:

**Internal Reproductive Organs:**

1. **Ovaries** (2):
   - Almond-shaped organs (3-5 cm long)
   - Located on either side of the uterus
   - Produce eggs (ova) and hormones (estrogen, progesterone)
   - Women are born with all their eggs (~1-2 million)

2. **Fallopian Tubes** (2):
   - Also called uterine tubes or oviducts
   - About 10-12 cm long
   - Connect ovaries to uterus
   - Where fertilization usually occurs
   - Finger-like projections (fimbriae) catch released eggs

3. **Uterus**:
   - Pear-shaped muscular organ
   - About 7-8 cm long when not pregnant
   - Has three layers: endometrium (inner), myometrium (muscle), perimetrium (outer)
   - The endometrium is shed during menstruation

4. **Cervix**:
   - Lower narrow part of the uterus
   - Opens into the vagina
   - Produces mucus that changes throughout the menstrual cycle

5. **Vagina**:
   - Muscular canal (7-10 cm long)
   - Connects cervix to outside of body
   - Birth canal during delivery

**External Genitalia (Vulva):**
- Mons pubis, labia majora, labia minora
- Clitoris
- Vaginal and urethral openings
- Bartholin's glands (provide lubrication)`,
      keyTerms: [
        { term: 'ovum', definition: 'An egg cell produced by the ovary (plural: ova)', pronunciation: 'OH-vum' },
        { term: 'fimbriae', definition: 'Finger-like projections at the end of fallopian tubes that help catch eggs', pronunciation: 'FIM-bree-ay' },
        { term: 'endometrium', definition: 'The inner lining of the uterus that thickens and sheds each month', pronunciation: 'en-doh-MEE-tree-um' },
        { term: 'myometrium', definition: 'The thick muscular wall of the uterus', pronunciation: 'my-oh-MEE-tree-um' },
        { term: 'vulva', definition: 'The external female genitalia' },
      ],
      analogies: [
        'The fimbriae are like tiny fingers that sweep the egg into the fallopian tube.',
        'The cervix acts like a gatekeeper, controlling what enters and exits the uterus.',
      ],
    },
    3: {
      level: 3,
      summary: 'The female reproductive tract comprises the ovaries (gametogenesis and steroidogenesis), fallopian tubes (oocyte transport and fertilization site), uterus (implantation and gestation), cervix (protection and sperm transport), and vagina (copulation and parturition), supported by a complex network of ligaments, blood vessels, and nerves.',
      explanation: `**Anatomical Organization:**

**Ovaries:**
- Position: Lateral pelvic walls, attached by mesovarium
- Structure: Cortex (follicles, corpora lutea) and medulla (vessels, nerves)
- Function: Oogenesis and hormone production
- Support: Suspensory ligament (infundibulopelvic), ovarian ligament, mesovarium
- Blood supply: Ovarian artery (from abdominal aorta)

**Fallopian Tubes:**
- Four regions: Infundibulum (fimbriated end), ampulla (fertilization site), isthmus, intramural (uterine wall)
- Wall layers: Mucosa (ciliated epithelium), muscularis, serosa
- Cilia beat toward uterus; peristaltic contractions assist transport

**Uterus:**
- Position: Anteverted (tilted forward) and anteflexed (bent forward) typically
- Regions: Fundus, body (corpus), isthmus, cervix
- Wall layers:
  - Endometrium: Functional layer (sheds) + basal layer (regenerates)
  - Myometrium: Three smooth muscle layers
  - Perimetrium: Visceral peritoneum
- Support: Cardinal ligaments, uterosacral ligaments, round ligaments, broad ligament
- Blood supply: Uterine artery (from internal iliac)

**Cervix:**
- Ectocervix: Squamous epithelium
- Endocervix: Columnar epithelium (mucus-secreting)
- Transformation zone: Junction between epithelial types (site of most cervical cancers)

**Vagina:**
- Histology: Stratified squamous epithelium (no glands)
- H-shaped in cross-section
- Fornices: Anterior, posterior (deepest), lateral
- Blood supply: Vaginal artery, branches from uterine and internal pudendal arteries

**Ligamentous Support:**
| Ligament | Contents | Clinical Significance |
|----------|----------|----------------------|
| Broad ligament | Uterus, tubes, ovaries | Mesometrium, mesosalpinx, mesovarium |
| Suspensory (infundibulopelvic) | Ovarian vessels | Risk during surgery |
| Cardinal (transverse cervical) | Uterine artery | Primary uterine support |
| Round ligament | Sampson artery | Courses through inguinal canal |
| Uterosacral | Hypogastric plexus | Pelvic floor support |`,
      keyTerms: [
        { term: 'transformation zone', definition: 'Area of cervix where columnar epithelium transitions to squamous; primary site of cervical cancer development' },
        { term: 'fornix', definition: 'Recess formed between cervix and vaginal walls', pronunciation: 'FOR-niks' },
        { term: 'mesosalpinx', definition: 'Part of broad ligament supporting the fallopian tube' },
        { term: 'anteversion', definition: 'Forward tilting of the uterus relative to vaginal axis' },
        { term: 'anteflexion', definition: 'Forward bending of uterine body relative to cervix' },
      ],
      clinicalNotes: 'Understanding ligament contents is crucial: the suspensory ligament contains ovarian vessels (risk during oophorectomy), cardinal ligaments contain uterine artery (important in hysterectomy), and round ligament courses through inguinal canal (site of round ligament pain in pregnancy).',
    },
    4: {
      level: 4,
      summary: 'The female reproductive tract demonstrates intricate anatomical relationships between structures, characterized by specialized blood supply with extensive anastomoses, dual autonomic innervation, and pelvic floor support mechanisms critical for understanding surgical anatomy and pathophysiology.',
      explanation: `**Detailed Vascular Anatomy:**

**Arterial Supply:**
- **Ovarian arteries**: Arise from abdominal aorta at L2, descend retroperitoneally through suspensory ligament
- **Uterine arteries**: Branch of anterior division of internal iliac; courses medially in cardinal ligament
  - At level of internal os: Crosses ureter ("water under the bridge")
  - Ascending branch: Supplies uterine body, anastomoses with ovarian artery
  - Vaginal branches: Supply cervix and upper vagina
- **Vaginal artery**: Variable origin (uterine, internal iliac, or internal pudendal)
- **Internal pudendal artery**: Supplies vulva, perineum

**Venous Drainage:**
- Pampiniform plexus → ovarian veins (right to IVC, left to left renal vein)
- Uterine venous plexus → internal iliac veins
- Vaginal venous plexus → multiple drainage routes

**Lymphatic Drainage:**
| Structure | Primary Drainage | Clinical Relevance |
|-----------|-----------------|-------------------|
| Ovary | Para-aortic nodes | Ovarian cancer staging |
| Uterine fundus | Para-aortic nodes (via ovarian route) | Endometrial cancer |
| Uterine body | External iliac, obturator | Endometrial cancer |
| Cervix | External iliac, internal iliac, obturator, presacral | Cervical cancer |
| Upper vagina | External/internal iliac | Vaginal cancer |
| Lower vagina | Superficial inguinal | Below hymen to skin |
| Vulva | Superficial inguinal → deep inguinal → external iliac | Vulvar cancer |

**Innervation:**
- **Sympathetic**: T10-L2 via hypogastric plexus
  - Uterine contraction, vasoconstriction
- **Parasympathetic**: S2-S4 via pelvic splanchnic nerves
  - Vasodilation, increased secretions
- **Somatic**: Pudendal nerve (S2-S4)
  - Sensory to vulva, motor to perineum

**Pelvic Floor Anatomy:**
- Levator ani complex: Pubococcygeus, puborectalis, iliococcygeus
- Urogenital diaphragm: Deep perineal pouch
- Perineal body: Central tendon; attachment site for multiple muscles
- Support levels (DeLancey):
  - Level I: Cardinal and uterosacral ligaments (suspension)
  - Level II: Lateral vaginal attachments to arcus tendineus
  - Level III: Perineal body and levator ani (fusion)

**Peritoneal Relationships:**
- Uterovesical pouch: Between bladder and uterus
- Rectouterine pouch (Douglas): Between rectum and uterus; most dependent in supine position
- Rectouterine fold contains uterosacral ligaments

**Embryological Correlations:**
- Ovaries from gonadal ridge (intermediate mesoderm)
- Fallopian tubes, uterus, cervix, upper vagina from paramesonephric (Mullerian) ducts
- Lower vagina from urogenital sinus
- Fusion failure → uterine anomalies (septate, bicornuate, didelphys)`,
      keyTerms: [
        { term: 'cardinal ligament', definition: 'Primary support structure containing uterine vessels; also called transverse cervical or Mackenrodt ligament' },
        { term: 'parametrium', definition: 'Connective tissue adjacent to uterus containing vessels; important in cervical cancer staging' },
        { term: 'DeLancey levels', definition: 'Classification of vaginal support mechanisms; Level I (suspension), II (attachment), III (fusion)' },
        { term: 'rectouterine pouch', definition: 'Most inferior peritoneal recess in female; also called pouch of Douglas or cul-de-sac' },
        { term: 'arcus tendineus', definition: 'Tendinous arch from pubic bone to ischial spine; attachment for levator ani' },
      ],
      clinicalNotes: 'Surgical pearls: Ureter courses 1-2 cm lateral to cervix beneath uterine artery (at risk during hysterectomy). The cul-de-sac is accessed in culdocentesis for ectopic pregnancy diagnosis. Para-aortic lymph node dissection is required for ovarian and high-grade endometrial cancers. Understanding levator ani anatomy is essential for prolapse surgery.',
    },
    5: {
      level: 5,
      summary: 'The female reproductive tract represents a complex anatomical and functional unit requiring detailed understanding of surgical planes, neurovascular relationships, and clinical applications for operative gynecology, oncologic surgery, and reconstructive procedures.',
      explanation: `**Advanced Surgical Anatomy:**

**Retroperitoneal Approach:**
- Pararectal space: Medial to internal iliac vessels, lateral to ureter/rectum
  - Contains hypogastric nerve
- Paravesical space: Medial to obturator vessels, lateral to bladder
  - Contains obturator nerve (at risk in lymphadenectomy)
- Presacral space: Contains middle sacral vessels, hypogastric plexus

**Nerve-Sparing Surgery Considerations:**
- Hypogastric plexus (T10-L2 sympathetic): Bladder storage, internal sphincter
  - Injury → voiding dysfunction
- Pelvic splanchnic nerves (S2-S4): Bladder emptying, sexual function
  - Run in uterosacral ligaments
  - Injury → atonic bladder, sexual dysfunction

**Oncologic Surgical Planes:**
- Type A hysterectomy: Extrafascial, at cervicovaginal junction
- Type B: Cardinal ligament at ureter crossing
- Type C (radical): Uterosacral at rectum, cardinal at pelvic wall
  - C1: Nerve-sparing (preserves hypogastric plexus)
  - C2: Without nerve preservation

**Ureteral Anatomy and Surgical Risks:**
Three points of ureteral injury risk:
1. Pelvic brim: Under infundibulopelvic ligament (adnexectomy)
2. Base of broad ligament: Crossing of uterine artery
3. Cardinal ligament: 1-2 cm lateral to cervix
Visualization or deliberate dissection prevents injury.

**Pelvic Lymph Node Anatomy:**
Systematic lymphadenectomy boundaries:
- Medial: Ureter, internal iliac artery
- Lateral: Psoas muscle, genitofemoral nerve
- Superior: Common iliac bifurcation
- Inferior: Deep circumflex iliac vein
Key nodes: Obturator, external iliac, internal iliac, common iliac

**Para-aortic Lymphadenectomy:**
- Left para-aortic nodes extend to left renal vein
- Right-sided: IVC is lateral boundary
- High dissection: Below SMA; risk to sympathetic chain

**Pelvic Organ Prolapse Pathophysiology:**
- Level I defect: Uterine/vault prolapse (apical)
- Level II anterior: Cystocele (lateral or central defect)
- Level II posterior: Rectocele, enterocele
- Level III: Urethrocele, perineal body deficiency
- DeLancey's "hammock hypothesis" for continence mechanism

**Fertility Preservation Anatomy:**
- Ovarian transposition: Relocate ovaries outside radiation field
- Vascular pedicle length allows lateral pelvic wall placement
- Ovarian reserve depends on preservation of hilar vessels

**Imaging Correlations:**
- MRI: Zonal anatomy of uterus (T2-weighted)
  - Junctional zone (inner myometrium): Low signal
  - Deep invasion assessment in endometrial cancer
- Ultrasound: Endometrial thickness, adnexal masses
- CT: Lymph node assessment, staging

**Congenital Anomaly Classification (ASRM 2021):**
| Class | Description | Embryology |
|-------|-------------|------------|
| U0 | Normal | Complete fusion and canalization |
| U1 | Dysmorphic (T-shaped, infantile) | DES exposure, hypoplasia |
| U2 | Septate | Failed resorption of uterine septum |
| U3 | Bicorporeal | Partial fusion failure |
| U4 | Hemi-uterus (unicornuate) | Unilateral agenesis/hypoplasia |
| U5 | Aplastic | Mullerian agenesis (MRKH) |
| U6 | Unclassified | Other anomalies |

**Surgical Procedures and Anatomical Considerations:**

*Laparoscopic Hysterectomy:*
- Identify ureter at pelvic brim first
- Develop avascular spaces: Pararectal, paravesical
- Secure uterine artery at origin or after tunneling ureter

*Radical Trachelectomy:*
- Fertility-sparing for early cervical cancer
- Preserve uterine arteries via parametrial approach
- Vaginal margin ≥1 cm from tumor

*Mesh Augmented Prolapse Repair:*
- Native tissue vs. synthetic mesh considerations
- FDA warnings regarding transvaginal mesh
- Sacrocolpopexy preferred for apical support`,
      keyTerms: [
        { term: 'pararectal space', definition: 'Avascular retroperitoneal space bounded by ureter/rectum medially and internal iliac vessels laterally' },
        { term: 'paravesical space', definition: 'Retroperitoneal space between bladder and obturator fossa; developed during radical surgery' },
        { term: 'radical hysterectomy', definition: 'Removal of uterus, parametrium, and upper vagina with systematic lymphadenectomy; Querleu-Morrow classification' },
        { term: 'sentinel lymph node', definition: 'First draining node; cervical cancer mapping uses ICG or Tc-99m' },
        { term: 'MRKH syndrome', definition: 'Mayer-Rokitansky-Kuster-Hauser syndrome; Mullerian agenesis with absent uterus and upper vagina' },
      ],
      clinicalNotes: 'Current practice: Sentinel lymph node mapping increasingly used in early-stage cervical and endometrial cancer, potentially reducing morbidity of full lymphadenectomy. Minimally invasive surgery for endometrial cancer is standard; for cervical cancer, the LACC trial demonstrated inferior oncologic outcomes with laparoscopy vs. open radical hysterectomy. Fertility preservation options should be discussed early in reproductive-age patients with gynecologic cancers.',
    },
  },

  media: [
    {
      id: 'female-repro-overview-1',
      type: 'diagram',
      filename: 'female-reproductive-system-overview.svg',
      title: 'Female Reproductive System Overview',
      description: 'Sagittal and coronal views of internal and external female reproductive organs',
    },
    {
      id: 'female-repro-ligaments-1',
      type: 'diagram',
      filename: 'female-pelvic-ligaments.svg',
      title: 'Pelvic Ligaments and Support Structures',
      description: 'Anatomical diagram showing ligamentous support of female pelvic organs',
    },
    {
      id: 'female-repro-vessels-1',
      type: 'diagram',
      filename: 'female-pelvic-vasculature.svg',
      title: 'Pelvic Vasculature',
      description: 'Arterial and venous supply to female reproductive organs',
    },
  ],

  citations: [
    {
      id: 'williams-gynecology',
      type: 'textbook',
      title: 'Benign General Gynecology',
      source: 'Williams Gynecology, 4th Edition',
      chapter: '1-3',
      license: 'Copyrighted',
    },
    {
      id: 'netters-obgyn',
      type: 'textbook',
      title: 'Female Reproductive Anatomy',
      authors: ['Smith, RP'],
      source: "Netter's Obstetrics and Gynecology, 3rd Edition",
      license: 'Copyrighted',
    },
    {
      id: 'openstax-repro',
      type: 'textbook',
      title: 'The Reproductive System',
      source: 'OpenStax Anatomy and Physiology 2e',
      chapter: '27',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/27-introduction',
      license: 'CC BY 4.0',
    },
  ],

  crossReferences: [
    { targetId: 'obgyn-anatomy-uterus', targetType: 'structure', relationship: 'child', label: 'Uterus' },
    { targetId: 'obgyn-anatomy-ovaries', targetType: 'structure', relationship: 'child', label: 'Ovaries' },
    { targetId: 'obgyn-anatomy-fallopian-tubes', targetType: 'structure', relationship: 'child', label: 'Fallopian Tubes' },
    { targetId: 'obgyn-physiology-menstrual-cycle', targetType: 'pathway', relationship: 'related', label: 'Menstrual Cycle' },
    { targetId: 'endocrine-hypothalamus', targetType: 'structure', relationship: 'see-also', label: 'Hypothalamus' },
  ],

  tags: {
    systems: ['reproductive', 'endocrine'],
    structures: ['FMA:45652', 'female-reproductive-system'],
    topics: ['anatomy', 'gynecology'],
    keywords: ['female reproductive', 'uterus', 'ovaries', 'fallopian tubes', 'cervix', 'vagina', 'pelvic anatomy'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['obgyn', 'surgery'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
