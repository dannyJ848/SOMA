/**
 * Ovary Histology - Reproductive System
 *
 * Comprehensive content on ovarian microscopic anatomy including
 * ovarian cortex, follicular development, corpus luteum, and stromal
 * components with clinical correlations.
 */

import { EducationalContent } from '../../types';

export const ovaryHistology: EducationalContent = {
  id: 'reproductive-ovary-histology',
  type: 'structure',
  name: 'Ovary Histology',
  alternateNames: ['Ovarian Microscopic Anatomy', 'Ovarian Histology'],

  levels: {
    1: {
      level: 1,
      summary: 'The ovary contains tiny sacs called follicles that hold eggs. Each month, one follicle grows and releases an egg. After release, it becomes the corpus luteum which makes hormones.',
      explanation: `## What Is Ovary Histology?

Histology is the study of tissues under a microscope. Looking at ovary tissue shows us how eggs develop and how hormones are made.

### Main Parts of the Ovary

**1. The Outer Layer (Cortex)**
- Contains all the egg follicles
- This is where eggs develop and mature
- Has a bumpy, grainy appearance

**2. The Inner Layer (Medulla)**
- Contains blood vessels and nerves
- Supports the ovary with nutrients
- Connects to the body

**3. The Covering (Surface Epithelium)**
- Thin layer on the outside
- Protects the ovary
- Sometimes called germinal epithelium

### The Egg Follicles

Follicles are tiny sacs that hold eggs:

**Before Birth:**
- A baby girl has about 1-2 million follicles
- Each holds one immature egg

**At Puberty:**
- About 300,000-400,000 follicles remain
- Most will never develop fully

**Each Month:**
- Several follicles start to grow
- Usually only one becomes fully mature
- This one releases an egg (ovulation)

**After Menopause:**
- Almost no follicles remain
- Ovary becomes smaller and more fibrous

### The Corpus Luteum

After an egg is released:
- The empty follicle changes
- It becomes the corpus luteum (yellow body)
- Makes hormones (progesterone) to support pregnancy
- If no pregnancy, it shrinks after 2 weeks

### Stroma (Connective Tissue)

- Fills spaces between follicles
- Made of special cells and fibers
- Provides support and structure`,
      keyTerms: [
        { term: 'follicle', definition: 'A small sac in the ovary that contains an egg' },
        { term: 'ovulation', definition: 'When a mature egg is released from the ovary' },
        { term: 'corpus luteum', definition: 'The structure formed after ovulation that makes hormones' },
        { term: 'cortex', definition: 'The outer layer of the ovary containing follicles' },
        { term: 'stroma', definition: 'The supporting connective tissue of the ovary' },
      ],
      analogies: [
        'The ovary is like a garden with many seeds (follicles), but only a few grow into plants (mature eggs) each season.',
        'The corpus luteum is like a temporary factory that produces hormones needed for pregnancy, then closes if not needed.',
      ],
      examples: [
        'A newborn girl has about 1 million primordial follicles in her ovaries',
        'Each menstrual cycle, 10-20 follicles start to grow, but usually only one ovulates',
        'After menopause, the ovary contains mostly scar tissue with very few follicles',
      ],
      patientCounselingPoints: [
        'Women are born with all the eggs they will ever have',
        'The number of follicles decreases with age, which affects fertility',
        'Hormones from the corpus luteum prepare the uterus for possible pregnancy',
      ],
    },
    2: {
      level: 2,
      summary: 'Ovarian histology reveals distinct follicular stages from primordial to mature Graafian follicles. The corpus luteum and corpus albicans represent post-ovulatory structures. The ovarian stroma provides structural support while the surface epithelium offers protection.',
      explanation: `## Ovarian Microscopic Anatomy

### Ovarian Structure Overview

The ovary is covered by a single layer of cuboidal epithelium and composed of an outer cortex (follicles) and inner medulla (vasculature).

**Tunica Albuginea:**
- Dense connective tissue layer
- Lies beneath surface epithelium
- Provides structural support

**Cortex vs. Medulla:**

| Feature | Cortex | Medulla |
|---------|--------|---------|
| Location | Outer | Central |
| Main components | Follicles, stroma | Blood vessels, nerves |
| Appearance | Cellular | Fibrovascular |
| Function | Gamete production | Support and supply |

### Follicular Development Stages

**1. Primordial Follicles:**
- Smallest and most immature
- Single layer of flattened follicular cells
- Arrested in prophase of meiosis I
- 1-2 million at birth, 300,000 at puberty

**2. Primary Follicles:**
- Follicular cells become cuboidal (single layer)
- Oocyte enlarges
- Zona pellucida begins to form

**3. Secondary (Preantral) Follicles:**
- Multiple layers of granulosa cells (stratified)
- Theca interna and externa form
- Zona pellucida fully developed
- No antrum yet

**4. Antral (Tertiary) Follicles:**
- Fluid-filled spaces appear between granulosa cells
- Spaces merge to form the antrum
- Oocyte surrounded by cumulus oophorus
- Theca layers well-developed

**5. Mature (Graafian) Follicles:**
- Large antrum filled with follicular fluid
- Oocyte on stalk projecting into antrum
- Ready for ovulation (20-25 mm diameter)

### Post-Ovulatory Structures

**Corpus Luteum:**
- Forms from granulosa and theca cells of ruptured follicle
- Large structure (2-5 cm)
- Folds and crenulated appearance
- Produces progesterone and estrogen
- Yellow color due to lipid content

**Corpus Albicans:**
- Degenerated corpus luteum
- White, scar-like appearance
- Composed of dense fibrous tissue
- Persists indefinitely

### Cellular Components

**Granulosa Cells:**
- Line the follicle, surround oocyte
- Produce estrogen (in response to FSH)
- Form cumulus oophorus around oocyte
- Transform into lutein cells in corpus luteum

**Theca Cells:**
- Theca interna: Secretory, produces androgens
- Theca externa: Contractile, smooth muscle-like
- Stimulated by LH

**Stromal Cells:**
- Spindle-shaped connective tissue cells
- Produce collagen fibers
- Support follicular development`,
      keyTerms: [
        { term: 'zona pellucida', definition: 'Glycoprotein layer surrounding the oocyte' },
        { term: 'granulosa cells', definition: 'Epithelial cells surrounding the oocyte within the follicle' },
        { term: 'theca cells', definition: 'Stromal cells surrounding the follicle that produce androgens' },
        { term: 'antrum', definition: 'Fluid-filled cavity that develops in secondary/tertiary follicles' },
        { term: 'cumulus oophorus', definition: 'Cluster of granulosa cells surrounding the oocyte' },
      ],
      analogies: [
        'Follicular development is like a competitive race - many follicles start, but only the strongest matures and releases its egg.',
        'The zona pellucida is like a protective eggshell around the oocyte that sperm must penetrate to fertilize.',
      ],
      examples: [
        'Atresia (follicle death) affects 99.9% of follicles during reproductive life',
        'The corpus luteum produces progesterone essential for maintaining early pregnancy',
        'Multiple corpora albicantia accumulate with age, contributing to ovarian fibrosis',
      ],
      patientCounselingPoints: [
        'Anti-Mullerian hormone (AMH) levels reflect the remaining follicle pool',
        'Ovarian reserve testing estimates the number of remaining follicles',
        'Theca and granulosa cells work together to produce estrogen',
      ],
    },
    3: {
      level: 3,
      summary: 'Ovarian histology demonstrates the two-cell theory of steroidogenesis with theca interna producing androgens and granulosa cells converting them to estrogens. Follicular atresia is the fate of most follicles, while corpus luteum formation involves luteinization and vascularization.',
      explanation: `## Detailed Ovarian Histology

### Follicular Development in Detail

**Primordial Follicle Characteristics:**
- Diameter: 25-35 micrometers
- Oocyte: 20 micrometers, arrested in diplotene of prophase I
- Follicular cells: Single layer, flattened
- Basement membrane: Present
- No independent blood supply

**Primary Follicle Changes:**
- Follicular cells proliferate (mitosis)
- Become cuboidal and stratified (now called granulosa cells)
- Zona pellucida appears (ZP1, ZP2, ZP3 glycoproteins)
- Gap junctions form between oocyte and granulosa cells
- Oocyte grows to 50-80 micrometers

**Secondary Follicle Features:**
- 5-6 layers of granulosa cells
- Theca interna differentiates from stroma
  - LH receptors present
  - Richly vascularized
- Theca externa: Collagen fibers, smooth muscle cells
- Zona pellucida fully formed

**Antral Follicle Development:**
- Granulosa cells secrete fluid (follicular fluid/liquor folliculi)
- Fluid accumulates forming antrum
- Granulosa cells divide into:
  - Cumulus oophorus (surrounds oocyte)
  - Corona radiata (layer immediately around zona pellucida)
  - Membrana granulosa (lines follicle wall)

**Preovulatory Follicle (Graafian):**
- 15-25 mm diameter
- Oocyte eccentrically positioned on stalk
- Theca interna: 10-20 cell layers, highly vascular
- Granulosa layer: Several cell layers thick
- Follicular fluid contains hormones, proteins, electrolytes

### Two-Cell Theory of Steroidogenesis

---
Estrogen Production in Developing Follicle:

Theca interna cells (LH stimulated):
  Cholesterol -> Pregnenolone -> Progesterone
    -> Androstenedione -> Testosterone
      (diffuses to granulosa cells)

Granulosa cells (FSH stimulated):
  Testosterone -> Estradiol-17-beta
  (aromatase enzyme)
---

This cooperation explains why both LH and FSH are needed for estrogen production.

### Follicular Atresia

**Process:**
- Affects 99.9% of follicles
- Can occur at any developmental stage
- Most common at antral stage

**Histological Features:**
- Oocyte: Pyknotic nucleus, cytoplasmic shrinkage
- Zona pellucida: Degenerates eventually
- Granulosa cells: Apoptosis, pyknosis
- Theca cells: May persist as interstitial gland cells

**Outcome:**
- Follicle replaced by avascular scar
- Interstitial glands persist in some species

### Corpus Luteum Formation

**Luteinization:**
- Granulosa cells -> Granulosa lutein cells (large, pale)
- Theca interna cells -> Theca lutein cells (small, dark)
- Both cell types hypertrophy and accumulate lipid

**Vascularization:**
- Theca interna vessels invade granulosa layer
- Previously avascular granulosa becomes vascularized
- Explains why LH (reaches via blood) now affects granulosa lutein cells

**Corpus Luteum Structure:**
- Folds/crenulations on surface
- Central cavity (former antrum) may contain clot
- Peripheral theca lutein cells
- Central granulosa lutein cells
- Extensive vascular network

**If Pregnancy Occurs:**
- hCG from embryo rescues corpus luteum
- Continues progesterone production
- Becomes corpus luteum of pregnancy
- Persists to 10-12 weeks

**If No Pregnancy:**
- Luteolysis begins day 22-24
- Apoptosis of luteal cells
- Fibroblast infiltration
- Forms corpus albicans`,
      keyTerms: [
        { term: 'luteinization', definition: 'Transformation of follicular cells into luteal cells after ovulation' },
        { term: 'atresia', definition: 'Degeneration and resorption of ovarian follicles' },
        { term: 'aromatase', definition: 'Enzyme that converts androgens to estrogens in granulosa cells' },
        { term: 'corpus albicans', definition: 'The fibrous scar remaining after corpus luteum degeneration' },
        { term: 'luteolysis', definition: 'Degeneration of the corpus luteum' },
      ],
      analogies: [
        'The two-cell theory of estrogen production is like an assembly line - theca cells make the raw materials (androgens), granulosa cells finish the product (estrogen).',
        'Atresia is like a talent competition where only one performer makes it to the final show out of thousands who auditioned.',
      ],
      examples: [
        'The zona pellucida contains ZP3, the receptor for sperm binding during fertilization',
        'Granulosa lutein cells produce 20-30 mg progesterone daily in the luteal phase',
        'The corpus luteum of pregnancy produces progesterone until the placenta takes over at 8-10 weeks',
      ],
      clinicalNotes: 'The blood-follicle barrier prevents large molecules from reaching the oocyte during development. After ovulation, vascularization of the corpus luteum allows hCG from an implanted embryo to rescue the corpus luteum and maintain progesterone production critical for early pregnancy.',
    },
    4: {
      level: 4,
      summary: 'Advanced ovarian histology encompasses age-related changes, pathological conditions including polycystic ovary syndrome and neoplasms, and ultrastructural features. Understanding these changes is essential for diagnosis of infertility, endocrine disorders, and ovarian pathology.',
      explanation: `## Clinical Ovarian Histology

### Age-Related Changes

**Fetal Ovary:**
- Peak germ cell number: 6-7 million at 20 weeks gestation
- Meiosis initiated, arrested in prophase I
- Follicle formation begins

**Neonatal:**
- 1-2 million oocytes
- Many primordial follicles present

**Childhood:**
- Continued atresia
- Quiescent ovaries
- Minimal follicular activity

**Reproductive Age:**
- Cyclic follicular development
- Corpora lutea present in luteal phase
- Decreasing follicular reserve over time

**Perimenopause:**
- Irregular cycles
- Reduced follicular pool
- More anovulatory cycles
- Increasing FSH levels

**Postmenopause:**
- Essentially no follicles remain
- Ovaries atrophic, small (2-3 cm)
- Surface wrinkled
- Mostly fibrous tissue with corpora albicantia
- May have epithelial inclusion cysts

### Pathological Conditions

**Polycystic Ovary Syndrome (PCOS):**

Histological features:
- Increased number of small antral follicles (2-8 mm)
- Thickened theca interna
- Hyperplastic theca with luteinization
- Increased stroma
- Subcapsular cystic follicles (arrested development)
- Few corpora lutea or albicantia

Functional correlates:
- Increased androgen production
- Disordered gonadotropin secretion
- Insulin resistance

**Premature Ovarian Insufficiency:**

Histology:
- Absent or rare follicles
- Fibrosis and hyalinization
- Ovarian "burnout"
- If autoimmune: Lymphocytic infiltration

**Ovarian Neoplasms:**

**Surface Epithelial Tumors:**
- Serous (fallopian tube-like)
- Mucinous (endocervical-like)
- Endometrioid (endometrium-like)
- Clear cell (hobnail cells)
- Brenner (transitional-like)

**Germ Cell Tumors:**
- Dysgerminoma (primitive germ cells)
- Teratoma (multilineage differentiation)
- Yolk sac tumor
- Choriocarcinoma
- Embryonal carcinoma

**Sex Cord-Stromal Tumors:**
- Granulosa cell tumor (Call-Exner bodies)
- Thecoma (lipid-rich theca-like cells)
- Fibroma (spindle cells, collagen)
- Sertoli-Leydig cell tumor

### Ultrastructural Features

**Oocyte:**
- Large cell (80-120 micrometers mature)
- Large nucleus (germinal vesicle)
- Abundant organelles
- Cortical granules (prevent polyspermy)
- Balbiani body (mitochondria-ER aggregate)

**Granulosa Cells:**
- Gap junctions for communication
- FSH receptors on membrane
- Aromatase enzyme in smooth ER
- Lipid droplets

**Theca Interna:**
- Steroidogenic ultrastructure
- Abundant smooth ER
- Mitochondria with tubular cristae
- LH receptors

### Special Stains and Immunohistochemistry

| Marker | Expression | Diagnostic Use |
|--------|------------|----------------|
| Inhibin | Granulosa cells, sex cord-stromal tumors | Sex cord-stromal tumor identification |
| Calretinin | Theca cells, sex cord-stromal tumors | Differentiate from epithelial tumors |
| WT1 | Serous tumors | Serous vs. mucinous distinction |
| CK7 | Epithelial tumors | Epithelial origin |
| PLAP | Dysgerminoma | Germ cell tumor marker |
| AFP | Yolk sac tumor | Germ cell tumor marker |
| hCG | Choriocarcinoma | Germ cell tumor marker |

### Ovarian Biopsy Interpretation

**Indications:**
- Premature ovarian insufficiency evaluation
- Detection of residual disease after chemotherapy
- Research purposes

**Findings:**
- Follicle count (assess reserve)
- Presence of corpus luteum/albicans (cyclic activity)
- Stromal abnormalities
- Inflammatory infiltrate
- Neoplastic changes`,
      keyTerms: [
        { term: 'inclusion cyst', definition: 'Cyst formed from surface epithelium invagination common in postmenopausal ovaries' },
        { term: 'theca lutein cyst', definition: 'Multiple luteinized theca cysts associated with high hCG levels' },
        { term: 'Call-Exner bodies', definition: 'Small rosette-like spaces in granulosa cell tumors' },
        { term: 'cortical granules', definition: 'Secretory granules in oocyte cortex that prevent polyspermy' },
        { term: 'Balbiani body', definition: 'Aggregate of mitochondria and ER in immature oocytes' },
      ],
      clinicalNotes: 'The histologic diagnosis of PCOS is rarely made on biopsy; diagnosis is clinical. However, ovarian wedge biopsy historically was used and showed the characteristic features of multiple small follicles and stromal hyperplasia. Modern diagnosis uses ultrasound (antral follicle count) and clinical/biochemical criteria.',
    },
    5: {
      level: 5,
      summary: 'Expert-level ovarian histology integrates molecular markers of follicular development, mechanisms of ovarian aging, stem cell biology, and histopathologic diagnosis of complex ovarian lesions including borderline tumors and metastatic disease.',
      explanation: `## Advanced Ovarian Histology

### Molecular and Cellular Biology

**Follicular Recruitment Mechanisms:**

---
Molecular Control of Primordial Follicle Activation:

Activators:
  - mTOR signaling pathway
  - PI3K/AKT pathway
  - Kit ligand from granulosa cells
  - FOXO3 transcription factor (inhibition relieved)

Inhibitors:
  - Anti-Mullerian hormone (AMH)
  - Phosphatase and tensin homolog (PTEN)
  - Forkhead box O3 (FOXO3)
  - Tuberous sclerosis complex (TSC)
---

**Ovarian Reserve Markers:**

Histologic correlates:
- Primordial follicle count (gold standard, but invasive)
- AMH produced by granulosa cells of small growing follicles
- Correlates with primordial follicle pool

Aging mechanisms:
- Accumulation of DNA damage in oocytes
- Oxidative stress
- Mitochondrial dysfunction
- Decreased repair mechanisms

### Ovarian Aging

**Reproductive Aging Process:**

Accelerated atresia after age 35:
- Exponential decline in follicle number
- Increased oocyte aneuploidy
- Mitochondrial dysfunction
- Coenzyme Q10 depletion

Histologic changes:
- Decreased follicular density
- Increased stromal fibrosis
- Hyalinization of blood vessels
- Surface epithelial changes

**Premature Ovarian Insufficiency Causes:**

Genetic:
- FMR1 premutation (CGG repeats)
- Turner syndrome (45,X)
- BMP15, GDF9 mutations
- Autoimmune polyglandular syndrome

Iatrogenic:
- Chemotherapy (alkylating agents)
- Radiation
- Surgical (oophorectomy, cystectomy)

Autoimmune:
- Anti-ovarian antibodies
- Associated with other autoimmune diseases

### Histopathology of Complex Lesions

**Borderline Ovarian Tumors:**

Serous borderline:
- Atypical proliferation
- No stromal invasion
- Micropapillary variant (higher risk)
- Excellent prognosis with surgery alone

Mucinous borderline:
- Intestinal or endocervical-like
- Pseudomyxoma ovarii
- Careful evaluation for invasion

**Metastatic Tumors to Ovary:**

Krukenberg tumor:
- Signet ring cells
- Usually GI primary (stomach)
- Bilateral, solid masses

Other common primaries:
- Breast cancer
- Colorectal cancer
- Appendiceal tumors
- Pancreatic cancer

**Differentiation from Primary Tumor:**
- Bilaterality favors metastasis
- Surface involvement favors metastasis
- Varied growth patterns favor metastasis
- Immunohistochemistry (CK7/CK20, CDX2, SATB2)

### Stem Cell Biology

**Oogonial Stem Cells:**
- Controversial existence in adult ovary
- Some evidence for renewal in certain species
- Therapeutic potential (investigational)

**Ovarian Tissue Cryopreservation:**
- For fertility preservation
- Cortical strips contain primordial follicles
- Reimplantation or in vitro maturation
- Live births reported

### Advanced Diagnostic Techniques

**Electron Microscopy:**
- Oocyte quality assessment
- Mitochondrial morphology
- Cryopreservation damage evaluation

**Fluorescence In Situ Hybridization (FISH):**
- Aneuploidy detection in oocytes
- Polar body analysis
- Preimplantation genetic testing

**Gene Expression Profiling:**
- Ovarian cancer subtyping
- Prognostic markers
- Therapeutic targets

### Research Frontiers

**In Vitro Follicle Growth:**
- 2D and 3D culture systems
- Alginate encapsulation
- Goal: mature follicles from primordial stage
- Applications: fertility preservation, research

**Ovarian Rejuvenation:**
- Platelet-rich plasma (PRP)
- Stem cell therapy
- Mitochondrial replacement
- Experimental, limited evidence

**Artificial Ovary:**
- Scaffold + follicles
- Vascularization challenges
- Potential for transplantation

### Histologic Grading Systems

**Ovarian Serous Carcinoma:**
- Two-tier system (low-grade vs. high-grade)
- Based on nuclear atypia and mitotic count
- Different molecular pathways (KRAS vs. TP53)

**Granulosa Cell Tumors:**
- Adult vs. juvenile types
- Nuclear grooves (coffee bean nuclei)
- Call-Exner bodies
- FOXL2 mutation (C402G) in adult type`,
      keyTerms: [
        { term: 'Krukenberg tumor', definition: 'Metastatic signet ring cell carcinoma to the ovary, usually from GI tract' },
        { term: 'borderline tumor', definition: 'Ovarian tumor with cellular atypia but no stromal invasion' },
        { term: 'pseudomyxoma ovarii', definition: 'Mucin accumulation in ovary from mucinous tumor' },
        { term: 'aneuploidy', definition: 'Abnormal number of chromosomes; increases with maternal age' },
        { term: 'oogonial stem cells', definition: 'Putative stem cells in adult ovary capable of generating new oocytes' },
      ],
      clinicalNotes: `Key Clinical Pearls:

1. Primordial follicle count is the true measure of ovarian reserve but requires biopsy. AMH is the best non-invasive surrogate marker.

2. The exponential decline in follicle number explains the "fertility cliff" after age 35-37 - it is a biological reality based on oocyte quantity and quality.

3. Krukenberg tumors (metastatic signet ring cell carcinomas) are bilateral in 80% of cases, while primary ovarian cancers are bilateral in ~25%.

4. Borderline ovarian tumors in young women can often be treated with fertility-sparing surgery as they have excellent prognosis with surgery alone.

5. The presence of FOXL2 mutation (C402G) distinguishes adult granulosa cell tumors from other sex cord-stromal tumors and implicates this mutation in tumorigenesis.`,
    },
  },

  media: [
    {
      id: 'ovarian-follicle-stages',
      type: 'histology',
      filename: 'ovarian-follicles.jpg',
      title: 'Ovarian Follicle Development Stages',
      description: 'Microscopic view of primordial, primary, secondary, and Graafian follicles',
    },
    {
      id: 'corpus-luteum-histology',
      type: 'histology',
      filename: 'corpus-luteum.jpg',
      title: 'Corpus Luteum Histology',
      description: 'Granulosa and theca lutein cells with vascularization',
    },
  ],

  citations: [
    {
      id: 'ovarian-histology-text',
      type: 'textbook',
      title: 'Histology: A Text and Atlas',
      authors: ['Ross MH', 'Pawlina W'],
      source: 'Wolters Kluwer',
    },
    {
      id: 'follicle-development',
      type: 'article',
      title: 'The Primordial to Primary Follicle Transition',
      authors: ['Adhikari D', 'Liu K'],
      source: 'Molecular and Cellular Endocrinology',
    },
  ],

  crossReferences: [
    { targetId: 'reproductive-menstrual-cycle', targetType: 'concept', relationship: 'related', label: 'Menstrual Cycle' },
    { targetId: 'reproductive-spermatogenesis', targetType: 'concept', relationship: 'related', label: 'Spermatogenesis' },
  ],

  tags: {
    systems: ['reproductive'],
    topics: ['histology', 'anatomy', 'ovarian-physiology'],
    keywords: ['follicle', 'corpus luteum', 'granulosa', 'theca', 'oocyte'],
    clinicalRelevance: 'high',
  },

  createdAt: '2026-01-28T00:00:00.000Z',
  updatedAt: '2026-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default ovaryHistology;
