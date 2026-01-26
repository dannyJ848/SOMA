/**
 * Vagina Anatomy
 *
 * Comprehensive anatomy of the vagina including structure, histology,
 * function, and clinical correlations.
 */

import { EducationalContent } from '../../../types';

export const vaginaAnatomy: EducationalContent = {
  id: 'obgyn-anatomy-vagina',
  type: 'structure',
  name: 'Vagina',
  alternateNames: ['Vaginal canal', 'Birth canal'],
  fmaId: 'FMA:19949',

  levels: {
    1: {
      level: 1,
      summary: 'The vagina is a stretchy tube that connects the uterus to the outside of the body.',
      explanation: `The vagina is an important part of a woman's body that connects the inside reproductive organs to the outside.

**What it looks like:**
- A stretchy, muscular tube
- About 7-10 cm (3-4 inches) long
- The walls touch each other when relaxed (like a deflated balloon)
- Can stretch to fit different sizes

**What the vagina does:**

1. **Birth canal:**
   - Stretches to allow a baby to pass through during birth
   - Returns to normal size after delivery

2. **Menstrual flow:**
   - Blood from periods leaves the body through the vagina

3. **Protects itself:**
   - Has special bacteria that keep it healthy
   - Makes natural moisture to stay clean
   - Has an acidic environment that fights germs

**Important features:**
- Self-cleaning: Does not need special products to clean inside
- Flexible walls with folds that allow stretching
- Opening is at the outside of the body between the legs`,
      keyTerms: [
        { term: 'vagina', definition: 'A stretchy tube connecting the uterus to the outside of the body' },
        { term: 'birth canal', definition: 'Another name for the vagina, describing its role in childbirth' },
      ],
      analogies: [
        'The vagina is like a stretchy tunnel that can expand when needed, similar to an accordion.',
        'The walls of the vagina have folds like an accordion that allow it to stretch.',
        'Think of the vagina as a self-cleaning passageway that takes care of itself.',
      ],
      examples: [
        'During childbirth, the vagina can stretch wide enough for a baby to pass through.',
        'Tampons are placed in the vagina to absorb menstrual blood.',
      ],
    },
    2: {
      level: 2,
      summary: 'The vagina is a fibromuscular canal extending from the vestibule to the cervix, functioning as the birth canal, passage for menstruation, and site for sexual intercourse, with a unique microbiome maintaining acidic pH.',
      explanation: `**Anatomy Overview:**

**Dimensions:**
- Length: 7-10 cm (longer posteriorly)
- Anterior wall: ~7 cm
- Posterior wall: ~9 cm
- Can distend significantly during childbirth

**Position and Relations:**
- Anterior: Bladder and urethra
- Posterior: Rectum and rectouterine pouch (upper), perineal body (lower)
- Lateral: Levator ani muscles, pelvic fascia
- Superior: Cervix projects into it

**Structure:**

*Fornices:*
- Anterior fornix: Shallow, in front of cervix
- Posterior fornix: Deepest, behind cervix
- Lateral fornices: On either side of cervix

*Wall layers:*
1. **Mucosa:** No glands; stratified squamous epithelium
2. **Muscularis:** Smooth muscle (inner circular, outer longitudinal)
3. **Adventitia:** Fibrous connective tissue

**Rugae:**
- Folds in the vaginal wall
- Allow expansion during childbirth
- More prominent in reproductive years

**Vaginal Microbiome:**
- Dominated by Lactobacillus species
- Produces lactic acid → pH 3.8-4.5
- Protects against pathogens
- Disruption leads to bacterial vaginosis, yeast infections

**Blood Supply:**
- Vaginal artery (branch of internal iliac)
- Branches from uterine artery
- Internal pudendal artery (lower vagina)

**Functions:**
- Receptacle during intercourse
- Birth canal during delivery
- Passage for menstrual flow
- Barrier to pathogens (acidic pH, microbiome)`,
      keyTerms: [
        { term: 'fornix', definition: 'Recesses formed where vagina attaches around cervix; posterior is deepest', pronunciation: 'FOR-niks' },
        { term: 'rugae', definition: 'Folds in the vaginal wall that allow stretching', pronunciation: 'ROO-gay' },
        { term: 'Lactobacillus', definition: 'Beneficial bacteria that maintain vaginal health and acidity' },
        { term: 'vestibule', definition: 'External opening area between the labia minora where vagina opens' },
      ],
      analogies: [
        'The fornices are like pockets that form around the cervix where it projects into the vagina.',
        'Rugae work like accordion folds, collapsing flat normally but able to expand when needed.',
      ],
    },
    3: {
      level: 3,
      summary: 'The vagina is a distensible fibromuscular canal lined by non-keratinized stratified squamous epithelium lacking glands, with estrogen-dependent glycogenation supporting Lactobacillus-dominated microbiome and acidic pH for pathogen defense.',
      explanation: `**Detailed Anatomy:**

**Gross Structure:**

*Vaginal axis:*
- H-shaped in cross-section (transverse)
- Posterior wall longer than anterior
- Axis directed superiorly and posteriorly
- ~120-degree angle with uterine axis

*Attachment to cervix:*
- Oblique insertion creating fornices
- Posterior fornix: 2.5-3 cm deep
- Peritoneum of cul-de-sac accessible posteriorly

**Histology:**

1. **Mucosa:**
   - Non-keratinized stratified squamous epithelium
   - No glands (lubrication from transudation and Bartholin's)
   - Thickness varies with hormonal status
   - Glycogen content estrogen-dependent
   - Lamina propria: Rich vascular network, no muscularis mucosae

2. **Muscularis:**
   - Inner circular layer
   - Outer longitudinal layer
   - Continuous with uterine myometrium above
   - Blends with perineal muscles below

3. **Adventitia:**
   - Dense collagenous tissue
   - Contains venous plexus
   - Merges with pelvic fascia

**Vaginal Epithelial Maturation:**
- Estrogen increases superficial cells (mature)
- Progesterone increases intermediate cells
- Atrophy (low estrogen): Parabasal cells predominate
- Vaginal maturation index: Clinical assessment

**Blood Supply:**

| Artery | Origin | Region Supplied |
|--------|--------|-----------------|
| Vaginal artery | Internal iliac or uterine | Upper vagina |
| Cervicovaginal branch | Uterine artery | Anterior upper vagina |
| Internal pudendal | Internal iliac | Lower vagina |
| Middle rectal | Internal iliac | Posterior vagina |

**Venous Drainage:**
- Vaginal venous plexus → internal iliac veins
- Communicates with vesical, uterine, rectal plexuses

**Lymphatic Drainage:**
- Upper vagina: Internal/external iliac nodes
- Lower vagina: Superficial inguinal nodes
- Important for vaginal cancer staging

**Innervation:**
- Autonomic: Uterovaginal plexus (sympathetic, parasympathetic)
- Somatic: Pudendal nerve (S2-4) to lower vagina/introitus
- Upper vagina: Less sensitive
- Lower vagina/introitus: Sensitive to touch, temperature`,
      keyTerms: [
        { term: 'glycogenation', definition: 'Estrogen-stimulated glycogen storage in vaginal epithelium; substrate for Lactobacillus' },
        { term: 'vaginal maturation index', definition: 'Ratio of parabasal:intermediate:superficial cells reflecting estrogen status' },
        { term: 'vaginal transudation', definition: 'Plasma filtrate through epithelium providing natural lubrication' },
        { term: 'culdocentesis', definition: 'Needle aspiration through posterior fornix to sample cul-de-sac fluid' },
      ],
      clinicalNotes: 'The posterior fornix provides access to the cul-de-sac for culdocentesis (now largely replaced by ultrasound). The proximity of the rectum posteriorly makes it at risk during posterior vaginal wall surgery. The lower vaginal lymphatic drainage to inguinal nodes affects cancer staging and treatment.',
    },
    4: {
      level: 4,
      summary: 'The vagina demonstrates complex estrogen-dependent physiology with epithelial glycogenation supporting Lactobacillus dominance and acidic pH, undergoes dramatic changes with childbirth and menopause, and has specific anatomic relationships critical for pelvic reconstructive surgery.',
      explanation: `**Vaginal Microbiome:**

**Healthy Microbiome:**
- Lactobacillus species dominant (L. crispatus, L. jensenii, L. iners, L. gasseri)
- Produces lactic acid, hydrogen peroxide, bacteriocins
- Maintains pH 3.8-4.5
- Competitive exclusion of pathogens

**Community State Types (CST):**
| CST | Dominant Species | Clinical Association |
|-----|------------------|---------------------|
| I | L. crispatus | Most protective |
| II | L. gasseri | Protective |
| III | L. iners | Less stable; transition state |
| IV | Diverse anaerobes | Associated with BV |
| V | L. jensenii | Protective |

**Dysbiosis:**
- Bacterial vaginosis: Gardnerella, Prevotella, Mobiluncus
- Increases: STI susceptibility, preterm birth risk, post-surgical infection
- Treatment: Metronidazole, clindamycin; probiotics under study

**Vaginal Physiology:**

*Sexual response:*
- Engorgement of vascular plexuses
- Transudation increases (lubrication)
- Vaginal expansion and lengthening (tenting)
- Lower third contracts during orgasm

*Menstrual cycle changes:*
- Follicular: Epithelium thickens, ↑glycogen
- Ovulation: Peak thickness, ↑secretions
- Luteal: Desquamation increases
- Menstruation: Shedding of superficial cells

**Vaginal Support Anatomy (DeLancey):**

*Level I (suspension):*
- Uterosacral/cardinal ligament complex
- Supports vaginal apex

*Level II (attachment):*
- Lateral attachment to arcus tendineus
- Anterior: Pubocervical fascia
- Posterior: Rectovaginal fascia

*Level III (fusion):*
- Perineal membrane
- Perineal body
- External anal sphincter

**Childbirth Effects:**

*Vaginal changes:*
- Marked distension (up to 10-fold)
- Rugae flatten
- Potential lacerations (perineal, vaginal, periurethral)
- Pelvic floor stretching/denervation

*Recovery:*
- Rugae partially return
- Dimensions may remain increased
- Vaginal laxity common
- Pelvic organ prolapse risk increased

**Menopausal Changes (GSM - Genitourinary Syndrome of Menopause):**
- Epithelial thinning (atrophy)
- Decreased rugae
- Decreased elasticity
- pH increases (5.0-7.5)
- Lactobacillus decline
- Symptoms: Dryness, dyspareunia, irritation, UTIs

**Treatment of GSM:**
- Vaginal moisturizers (non-hormonal)
- Vaginal estrogen (cream, tablet, ring)
- Ospemifene (oral SERM)
- Intravaginal DHEA (prasterone)
- Laser therapy (under investigation)`,
      keyTerms: [
        { term: 'GSM', definition: 'Genitourinary syndrome of menopause; constellation of vulvovaginal and urinary symptoms from estrogen deficiency' },
        { term: 'community state type', definition: 'Classification of vaginal microbiome based on dominant bacterial species' },
        { term: 'tenting', definition: 'Expansion and elongation of upper vagina during sexual arousal' },
        { term: 'pubocervical fascia', definition: 'Endopelvic fascia supporting anterior vaginal wall; defects cause cystocele' },
      ],
      clinicalNotes: 'Low-dose vaginal estrogen is effective for GSM and is not significantly absorbed systemically; generally safe even in breast cancer survivors on aromatase inhibitors (with oncologist discussion). Recurrent UTIs in postmenopausal women often respond to vaginal estrogen. Pessary fitting requires understanding of vaginal anatomy and support defects.',
    },
    5: {
      level: 5,
      summary: 'Contemporary vaginal medicine integrates microbiome science, pelvic floor anatomy, and surgical technique for managing prolapse, dyspareunia, and vaginal reconstruction, with emerging therapies targeting tissue regeneration and microbiome modulation.',
      explanation: `**Advanced Surgical Anatomy:**

**Vaginal Spaces:**
1. **Vesicovaginal space:**
   - Avascular plane between bladder and anterior vaginal wall
   - Developed for cystocele repair, sling placement

2. **Rectovaginal space:**
   - Between posterior vaginal wall and rectum
   - Contains rectovaginal fascia
   - Site of rectocele development

3. **Pararectal/paravaginal spaces:**
   - Lateral extensions for prolapse surgery
   - Access for sacrospinous ligament fixation

**Prolapse Anatomy:**

*Cystocele:*
- Central defect: Attenuation of pubocervical fascia
- Lateral defect: Detachment from arcus tendineus (paravaginal defect)
- Distinguished by: Q-tip test during Valsalva

*Rectocele:*
- Disruption of rectovaginal fascia
- Widening of levator hiatus
- May require digitation for defecation

*Enterocele:*
- Herniation of peritoneum/small bowel
- Into rectovaginal space
- Often associated with apical prolapse

**Vaginal Reconstruction:**

*Native tissue repair:*
- Anterior colporrhaphy: Plication of pubocervical fascia
- Posterior colporrhaphy: Plication of rectovaginal fascia
- Apical: Sacrospinous or uterosacral ligament fixation

*Mesh augmentation (after FDA warnings):*
- Transvaginal mesh: High complication rates
- Largely abandoned for prolapse
- Midurethral slings: Still supported for SUI

*Abdominal approaches:*
- Sacrocolpopexy: Mesh to vaginal apex, sacral promontory
- Gold standard for apical prolapse
- Laparoscopic/robotic approach preferred

**Vaginal Agenesis (MRKH):**

*Anatomy:*
- Mullerian agenesis
- Absent upper vagina, uterus
- Normal ovaries, external genitalia
- Associated: Renal anomalies (30%), skeletal (10%)

*Treatment options:*
- Vaginal dilators (first-line): Frank technique
- Surgical: Vecchietti procedure, McIndoe vaginoplasty
- Intestinal neovagina: Sigmoid, ileum

**Vaginoplasty (Gender-Affirming):**

*Techniques:*
- Penile inversion
- Peritoneal pull-through
- Intestinal segment

*Considerations:*
- Depth, width maintenance
- Lubrication needs
- Long-term dilation required
- Regular gynecologic follow-up

**Microbiome Therapeutics:**

*Probiotics:*
- Lactobacillus strains (oral, vaginal)
- Mixed evidence for BV treatment/prevention
- Ongoing research for pregnancy outcomes

*Vaginal microbiome transplant:*
- Investigational
- From healthy donors
- For recurrent BV

*Biofilm disruption:*
- Targeting Gardnerella biofilms
- Boric acid: Disrupts biofilm
- Dequalinium chloride: Antiseptic activity

**Vaginal Drug Delivery:**

*Advantages:*
- Bypass first-pass metabolism
- High local concentrations
- Reduced systemic effects

*Applications:*
- Hormones (estrogen, progesterone)
- Antimicrobials
- Microbicides (HIV prevention research)
- Contraceptive rings

**Emerging Technologies:**

*Vaginal laser therapy:*
- CO2 or Erbium:YAG
- Proposed for GSM, mild prolapse
- Evidence remains limited
- Not FDA-approved for GSM indication

*Stem cell therapy:*
- Investigational for stress incontinence
- Adipose-derived stem cells
- Early-phase trials

*Tissue engineering:*
- Scaffolds for neovagina
- Decellularized matrices
- Bioengineered constructs`,
      keyTerms: [
        { term: 'arcus tendineus fasciae pelvis', definition: 'White line from pubis to ischial spine; lateral attachment for anterior vaginal support' },
        { term: 'sacrocolpopexy', definition: 'Mesh-based procedure attaching vaginal apex to sacral promontory; gold standard for apical prolapse' },
        { term: 'MRKH syndrome', definition: 'Mayer-Rokitansky-Kuster-Hauser syndrome; congenital absence of vagina and uterus with normal ovaries' },
        { term: 'microbiome transplant', definition: 'Experimental transfer of vaginal bacteria from healthy donor to treat recurrent dysbiosis' },
      ],
      clinicalNotes: 'The FDA issued warnings (2011, 2016, 2019) regarding transvaginal mesh for prolapse due to high complication rates (erosion, pain, dyspareunia). Midurethral slings for SUI remain supported with appropriate counseling. For MRKH, dilator therapy achieves functional vagina in >90% with adequate compliance. Vaginal laser therapy remains investigational; patients should be counseled that it is not FDA-approved for GSM.',
    },
  },

  media: [
    {
      id: 'vagina-anatomy-1',
      type: 'diagram',
      filename: 'vagina-anatomy.svg',
      title: 'Vaginal Anatomy',
      description: 'Sagittal view showing vaginal canal and surrounding structures',
    },
    {
      id: 'vagina-anatomy-2',
      type: 'diagram',
      filename: 'vagina-cross-section.svg',
      title: 'Vaginal Cross-Section',
      description: 'H-shaped configuration and wall layers',
    },
  ],

  citations: [
    {
      id: 'williams-gyn-vagina',
      type: 'textbook',
      title: 'Pelvic Anatomy',
      source: 'Williams Gynecology, 4th Edition',
      chapter: '38',
      license: 'Copyrighted',
    },
    {
      id: 'openstax-vagina',
      type: 'textbook',
      title: 'Anatomy of the Female Reproductive System',
      source: 'OpenStax Anatomy and Physiology 2e',
      chapter: '27.2',
      url: 'https://openstax.org/books/anatomy-and-physiology-2e/pages/27-2-anatomy-and-physiology-of-the-female-reproductive-system',
      license: 'CC BY 4.0',
    },
  ],

  crossReferences: [
    { targetId: 'obgyn-anatomy-female-reproductive-overview', targetType: 'structure', relationship: 'parent', label: 'Female Reproductive System' },
    { targetId: 'obgyn-anatomy-cervix', targetType: 'structure', relationship: 'related', label: 'Cervix' },
    { targetId: 'obgyn-anatomy-vulva', targetType: 'structure', relationship: 'related', label: 'Vulva' },
    { targetId: 'obgyn-menopause-overview', targetType: 'topic', relationship: 'see-also', label: 'Menopause' },
  ],

  tags: {
    systems: ['reproductive'],
    structures: ['FMA:19949', 'vagina'],
    topics: ['anatomy', 'gynecology', 'pelvic floor'],
    keywords: ['vagina', 'vaginal canal', 'birth canal', 'vaginal microbiome', 'prolapse'],
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
