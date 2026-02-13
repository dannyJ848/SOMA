/**
 * Uterus Histology - Reproductive System
 *
 * Comprehensive content on uterine microscopic anatomy including
 * endometrium, myometrium, perimetrium, and cyclic changes during
 * the menstrual cycle.
 */

import { EducationalContent } from '../../types';

export const uterusHistology: EducationalContent = {
  id: 'reproductive-uterus-histology',
  type: 'structure',
  name: 'Uterus Histology',
  alternateNames: ['Uterine Histology', 'Endometrial Histology', 'Womb Histology'],

  levels: {
    1: {
      level: 1,
      summary: 'The uterus has three layers: the inner lining (endometrium) that sheds monthly, the muscular wall (myometrium) that contracts during labor, and the outer covering (perimetrium). The endometrium changes throughout the menstrual cycle to prepare for pregnancy.',
      explanation: `## What Is Uterus Histology?

Uterus histology is the study of the uterus tissue under a microscope. The uterus is the organ where a baby grows during pregnancy.

### The Three Layers of the Uterus

**1. Endometrium (Inner Lining)**
- The layer that thickens and sheds each month
- Made of two layers:
  - Functional layer: Sheds during menstruation
  - Basal layer: Stays and regenerates the functional layer
- Contains glands that nourish a developing embryo
- Has many blood vessels

**2. Myometrium (Muscle Layer)**
- Thick layer of smooth muscle
- Contracts during menstrual cramps
- Contracts powerfully during childbirth
- Three layers of muscle running in different directions

**3. Perimetrium (Outer Covering)**
- Thin layer on the outside
- Part of the tissue lining the abdomen
- Protects the uterus

### How the Endometrium Changes

**During Menstruation:**
- Top layer breaks down
- Blood vessels constrict
- Bleeding occurs for 3-7 days
- Only basal layer remains

**After Menstruation:**
- Basal layer grows new tissue
- Glands form and lengthen
- Blood vessels regrow
- Called the proliferative phase

**Before Ovulation:**
- Endometrium thickens
- Glands become coiled
- Blood supply increases
- Called the secretory phase

**If No Pregnancy:**
- Hormone levels drop
- Blood vessels constrict
- Tissue breaks down
- Menstruation begins again

### Glands in the Endometrium

- Simple tube-shaped glands
- Make substances to nourish an embryo
- Change shape during the cycle
- Straight in proliferative phase
- Coiled and saw-toothed in secretory phase`,
      keyTerms: [
        { term: 'endometrium', definition: 'The inner lining of the uterus that thickens and sheds during the menstrual cycle' },
        { term: 'myometrium', definition: 'The muscular layer of the uterus' },
        { term: 'perimetrium', definition: 'The outer layer covering the uterus' },
        { term: 'menstruation', definition: 'The monthly shedding of the endometrial lining' },
        { term: 'glands', definition: 'Tube-like structures in the endometrium that make nourishing fluids' },
      ],
      analogies: [
        'The endometrium is like a garden bed that gets prepared each month - if a seed (embryo) is planted, it grows; if not, the bed is cleared and replanted.',
        'The myometrium is like a strong bag made of muscle - it holds the baby and squeezes during delivery.',
      ],
      examples: [
        'The endometrium thickens from about 1-2 mm after menstruation to 8-14 mm before menstruation',
        'The myometrium makes up most of the uterine wall thickness',
        'During pregnancy, the myometrium expands to accommodate the growing baby',
      ],
      patientCounselingPoints: [
        'The endometrium thickens each month to prepare for possible pregnancy',
        'If pregnancy does not occur, the lining sheds as menstrual bleeding',
        'Hormones control the changes in the endometrium throughout the cycle',
      ],
    },
    2: {
      level: 2,
      summary: 'Uterine histology reveals three distinct layers with unique cellular compositions. The endometrium undergoes cyclic changes driven by ovarian hormones, transitioning from proliferation under estrogen to secretion under progesterone. The myometrium contains smooth muscle and connective tissue arranged in interwoven layers.',
      explanation: `## Uterine Microscopic Anatomy

### General Structure

The uterus is a pear-shaped organ with thick muscular walls and a specialized mucosal lining.

**Anatomical Regions:**
- Fundus: Dome-shaped top
- Body (corpus): Main central portion
- Isthmus: Narrow lower uterine segment
- Cervix: Inferior portion opening to vagina

**Uterine Wall Layers:**

| Layer | Thickness | Composition | Function |
|-------|-----------|-------------|----------|
| Endometrium | 1-8 mm | Epithelium, glands, stroma | Implantation, menstruation |
| Myometrium | 15-30 mm | Smooth muscle, connective tissue | Contractions, support |
| Perimetrium | Thin | Serosa, connective tissue | Protection |

### Endometrium

**Two Distinct Layers:**

**Functionalis (Functional Layer):**
- Upper two-thirds
- Sheds during menstruation
- Contains glands, stroma, blood vessels
- Responsive to hormonal changes

**Basalis (Basal Layer):**
- Lower one-third
- Remains after menstruation
- Regenerates functionalis
- Contains basal portions of glands
- Stem cell source

**Cellular Components:**

Surface epithelium:
- Simple columnar epithelium
- Ciliated and secretory cells
- Lines uterine cavity
- Continues into glands

Glands:
- Simple tubular glands
- Extend from surface to basalis
- Lined by columnar epithelium
- Secrete glycoproteins, glycogen

Stroma (Lamina Propria):
- Cellular connective tissue
- Stromal cells (endometrial fibroblasts)
- Extracellular matrix
- Spiral arteries
- Immune cells

### Myometrium

**Three Indistinct Layers:**

Inner layer:
- Thin, mostly circular fibers
- Surrounds endometrium
- Submucosal plexus of vessels

Middle layer:
- Thickest layer
- Interlacing fibers in all directions
- Rich vascular plexus (arcuate arteries)

Outer layer:
- Longitudinal fibers
- Continues into ligaments
- Subserosal vessels

**Cellular Composition:**
- Smooth muscle cells (myocytes)
- Connective tissue
- Blood vessels
- Nerves
- Lymphatics

### Cyclic Endometrial Changes

**Menstrual Phase (Days 1-5):**
- Functionalis sheds
- Arterial vasospasm
- Tissue necrosis
- Hemorrhage
- Leukocyte infiltration

**Proliferative Phase (Days 6-14):**
- Estrogen-driven
- Epithelial regeneration from basalis
- Glands straight, narrow
- Stroma cellular
- Spiral arteries straight

**Secretory Phase (Days 15-28):**
- Progesterone-dominant
- Glands tortuous, serrated
- Glycogen accumulation
- Stroma edematous
- Spiral arteries coiled
- Decidual reaction pre-menstrually`,
      keyTerms: [
        { term: 'functionalis', definition: 'The upper layer of endometrium that is shed during menstruation' },
        { term: 'basalis', definition: 'The lower layer of endometrium that regenerates the functionalis' },
        { term: 'spiral arteries', definition: 'Coiled arteries in the endometrium that supply blood' },
        { term: 'decidual reaction', definition: 'Changes in endometrial stromal cells preparing for implantation' },
        { term: 'lamina propria', definition: 'The connective tissue layer of the endometrium' },
      ],
      analogies: [
        'The functionalis is like a monthly-renewed welcome mat - it is put out to welcome a potential embryo, and if none arrives, it is replaced.',
        'Spiral arteries are like coiled springs - they can lengthen as the endometrium thickens without breaking.',
      ],
      examples: [
        'The functionalis layer is about 2/3 of endometrial thickness; basalis is 1/3',
        'During the secretory phase, glands become tortuous and saw-toothed in appearance',
        'The myometrium increases from about 1 cm to 2-3 cm during pregnancy',
      ],
      patientCounselingPoints: [
        'Estrogen causes the endometrium to grow and thicken',
        'Progesterone causes the endometrium to become receptive to implantation',
        'If pregnancy occurs, the endometrium becomes the decidua and supports the placenta',
      ],
    },
    3: {
      level: 3,
      summary: 'Endometrial histology demonstrates distinct proliferative and secretory phases under hormonal control. The functionalis and basalis layers have different regenerative capacities. The myometrium contains interlacing smooth muscle bundles with specialized blood supply.',
      explanation: `## Detailed Uterine Histology

### Endometrial Cyclic Changes in Detail

**Proliferative Phase (Estrogen-Dominant):**

Early proliferative (days 5-7):
- Thin endometrium (1-2 mm)
- Regeneration from basalis
- Surface epithelium spreads
- Glands short, straight
- Stroma dense, cellular

Mid-proliferative (days 8-11):
- Thickening to 3-5 mm
- Glands lengthening
- Mitotic activity throughout
- Spiral arteries grow

Late proliferative (days 12-14):
- Maximum thickness 6-8 mm
- Glands longer, slightly coiled
- Stroma edema increases
- Preovulatory changes

Histological features:
- Mitotic figures in epithelium and stroma
- Pseudostratified glandular epithelium
- No secretory vacuoles
- Spiral arteries straight

**Secretory Phase (Progesterone-Dominant):**

Early secretory (days 15-19):
- Glycogen accumulation subnuclear
- Vacuoles move to supranuclear position
- "Vacuolation" most prominent day 17-18
- Glands becoming tortuous

Mid-secretory (days 20-23):
- Maximum glandular tortuosity
- "Saw-tooth" appearance
- Luminal secretions rich in glycogen
- Stroma edematous
- Spiral arteries prominent

Late secretory (days 24-28):
- Decidual reaction of stroma
- Predecidual cells around vessels
- Leukocyte infiltration
- Pre-menstrual changes

**Dating the Endometrium (Noyes Criteria):**

Histologic features used to determine cycle day:
- Gland:tissue ratio
- Gland tortuosity
- Subnuclear vs supranuclear vacuoles
- Stromal edema
- Predecidual reaction
- Leukocytic infiltration

### Endometrial Stroma

**Stromal Cell Types:**

Endometrial stromal cells (fibroblasts):
- Spindle-shaped
- Synthesize extracellular matrix
- Transform to decidual cells in pregnancy

Predecidual cells (late secretory phase):
- Enlarged, polygonal
- Abundant cytoplasm
- Perivascular location
- Precursor to decidual cells

Immune cells:
- Uterine natural killer (uNK) cells
- Macrophages
- T lymphocytes
- Role in implantation and menstruation

**Extracellular Matrix:**
- Collagen fibers
- Ground substance
- Glycosaminoglycans
- Changes throughout cycle

### Myometrial Architecture

**Smooth Muscle Organization:**

Muscle bundles:
- Interlacing in multiple directions
- Interdigitating layers
- No distinct fascial planes
- Hypertrophy in pregnancy

Cellular features:
- Spindle-shaped cells
- Central nucleus
- Eosinophilic cytoplasm
- Gap junctions for coordination
- Contractile filaments (actin, myosin)

**Vascular Supply:**

Arcuate arteries:
- Run in outer myometrium
- Radial branches toward lumen
- Become spiral arteries in endometrium

Importance:
- Blood supply for pregnancy
- Constriction causes menstruation
- Dilatation in secretory phase

### Cervix Histology

**Endocervix:**
- Simple columnar epithelium
- Mucus-secreting glands
- Complex branching (clefts/tunnels)
- Acidic mucus most of cycle
- Thin, alkaline mucus at ovulation

**Ectocervix:**
- Stratified squamous epithelium
- Non-keratinized
- Similar to vaginal epithelium
- Squamocolumnar junction (transformation zone)

**Transformation Zone:**
- Site of metaplasia
- Important for cervical cancer screening
- Columnar to squamous change`,
      keyTerms: [
        { term: 'dating the endometrium', definition: 'Histologic assessment to determine menstrual cycle phase' },
        { term: 'squamocolumnar junction', definition: 'Boundary between squamous and columnar epithelium in the cervix' },
        { term: 'transformation zone', definition: 'Area of metaplasia between original and new squamocolumnar junction' },
        { term: 'uNK cells', definition: 'Uterine natural killer cells; specialized immune cells in endometrium' },
        { term: 'arcuate arteries', definition: 'Arteries in outer myometrium supplying the endometrium' },
      ],
      analogies: [
        'Endometrial dating is like reading tree rings - histologic features tell you exactly where in the cycle the tissue is.',
        'The transformation zone is like a construction site - it is an area of active cell change that requires monitoring.',
      ],
      examples: [
        'Nuclear vacuolation (subnuclear vacuoles) is the first sign of ovulation, appearing around day 16',
        'Predecidual cells first appear around spiral arteries on day 24-25',
        'The squamocolumnar junction is the most common site for cervical cancer development',
      ],
      clinicalNotes: 'Endometrial dating is primarily used for research and evaluating luteal phase defect. Inter-observer variability limits clinical utility. Dating should be within 2 days of expected date to be considered "in phase."',
    },
    4: {
      level: 4,
      summary: 'Clinical uterine histology encompasses pregnancy-related changes, pathological conditions including polyps, hyperplasia, and carcinoma, adenomyosis, and leiomyomas. Understanding these entities requires correlation with clinical presentation, imaging, and immunohistochemical studies.',
      explanation: `## Clinical Uterine Histology

### Pregnancy-Related Changes

**Decidua:**

Formation:
- Stromal cells transform to decidual cells
- Progesterone-driven
- Occurs throughout endometrium

Decidual cell characteristics:
- Large, polygonal
- Abundant eosinophilic cytoplasm
- Small, round nucleus
- Glycogen and lipid accumulation

Decidua types:
- Parietalis (compact layer)
- Basalis (at implantation site)
- Capsularis (over gestational sac)

**Implantation Site:**

Trophoblast invasion:
- Syncytiotrophoblast
- Cytotrophoblast
- Invade endometrium and myometrium

Vascular changes:
- Spiral artery transformation
- Loss of musculoelastic media
- Wide, low-resistance vessels

**Placenta:**

Chorionic villi:
- Floating villi (exchange)
- Anchoring villi (attachment)
- Trophoblast layers

Maternal surface:
- Decidua basalis
- Nitabuch\'s layer
- Rohr\'s layer

### Pathological Conditions

**Endometrial Polyps:**

Gross:
- Focal overgrowths
- Pedunculated or sessile
- Variable size

Microscopic:
- Glands with fibrous stroma
- Thick-walled vessels
- Surface epithelium
- Can be hyperplastic or atrophic

**Endometrial Hyperplasia:**

WHO classification:
- Hyperplasia without atypia
- Atypical hyperplasia/EIN

Features without atypia:
- Increased gland:stroma ratio
- Glandular complexity
- Back-to-back glands
- No cytologic atypia

Atypical hyperplasia/EIN:
- Cytologic atypia
- Crowded glands
- Risk of progression to cancer

**Endometrial Carcinoma:**

Endometrioid type:
- Glandular architecture
- Differentiated grades 1-3
- Estrogen-related
- Good prognosis

Serous type:
- Papillary architecture
- High-grade nuclei
- TP53 mutations
- Aggressive

Clear cell type:
- Hobnail cells
- Clear cytoplasm
- Aggressive

**Adenomyosis:**

Definition:
- Endometrial tissue in myometrium
- At least 2.5 mm from junction

Features:
- Endometrial glands and stroma
- Surrounding myometrial hypertrophy
- Hemorrhagic foci
- Diffuse or focal (adenomyoma)

**Leiomyomas (Fibroids):**

Gross:
- Well-circumscribed
- Whorled appearance
- White, firm

Microscopic:
- Interlacing smooth muscle bundles
- Paucity of mitoses
- Collagen deposition
- Can degenerate (cystic, hyaline, red)

Variants:
- Cellular leiomyoma
- Bizarre (symplastic) leiomyoma
- Mitotically active leiomyoma
- Leiomyosarcoma (rare, high mitoses, atypia, necrosis)

### Immunohistochemistry

| Marker | Expression | Application |
|--------|------------|-------------|
| ER/PR | Endometrial epithelium, stroma | Hormone receptor status, treatment prediction |
| PTEN | Lost in endometrial CA | Early carcinogenesis |
| p53 | Wild-type vs mutated | Serous carcinoma identification |
| p16 | Diffuse in serous CA | HPV-independent staining |
| Vimentin | Endometrial stroma | Stromal identification |
| Desmin | Smooth muscle | Leiomyoma vs stromal tumors |
| CD10 | Endometrial stroma | Endometrial stromal tumors |
| SMA | Smooth muscle | Muscle differentiation |

### Biopsy and Curettage

**Indications:**
- Abnormal uterine bleeding
- Postmenopausal bleeding
- Infertility evaluation
- Cancer screening (high risk)

**Interpretation:**
- Adequacy (proliferative or secretory endometrium)
- Artifacts (cautery, crush)
- Pathological findings
- Hormonal status`,
      keyTerms: [
        { term: 'decidua', definition: 'Modified endometrium during pregnancy' },
        { term: 'EIN', definition: 'Endometrial intraepithelial neoplasia; precursor to endometrial cancer' },
        { term: 'adenomyosis', definition: 'Presence of endometrial tissue within the myometrium' },
        { term: 'leiomyoma', definition: 'Benign smooth muscle tumor of the uterus (fibroid)' },
        { term: 'trophoblast', definition: 'Outer layer of blastocyst that invades endometrium and forms placenta' },
      ],
      clinicalNotes: 'Endometrial polyps are common and usually benign, but postmenopausal women with polyps have higher risk of malignancy within the polyp. Symptomatic polyps or those in postmenopausal women should be removed and sent for histology.',
    },
    5: {
      level: 5,
      summary: 'Expert uterine histology encompasses molecular classification of endometrial carcinoma, implantation biology, endometrial receptivity markers, tissue engineering applications, and advanced diagnostic techniques including molecular profiling and artificial intelligence applications.',
      explanation: `## Advanced Uterine Histology

### Molecular Classification of Endometrial Cancer

**The Cancer Genome Atlas (TCGA) Classification:**

---
Four Molecular Subgroups:

1. POLE ultramutated:
   - DNA polymerase epsilon mutations
   - Very high mutation burden
   - Excellent prognosis despite grade
   - Immune-responsive

2. MSI hypermutated (MMR-deficient):
   - Microsatellite instability
   - Lynch syndrome or sporadic
   - Intermediate prognosis
   - Immune checkpoint responsive

3. Copy-number low (NSMP):
   - No specific molecular profile
   - Most common type
   - Grade-dependent prognosis
   - Hormone receptor-positive

4. Copy-number high (serous-like):
   - TP53 mutations
   - Serous morphology
   - Poor prognosis
   - Chemotherapy-responsive
---

**Clinical Implementation (ProMisE/TransPORTEC):**

Risk stratification:
- Molecular testing integrated with histology
- Guides adjuvant therapy
- Improves prognostication

### Implantation Biology

**Window of Implantation:**

Timeline:
- Days 20-24 of cycle
- Limited receptivity period
- Synchronized embryo development required

Histologic markers:
- Pinopodes (surface protrusions)
- Reduced mucin (MUC1)
- Increased integrins
- Leukemia inhibitory factor (LIF)

**Endometrial Receptivity Array (ERA):**

Controversial test:
- 238 gene expression profile
- Personalized embryo transfer timing
- Limited proven benefit
- Research tool vs standard of care

### Endometrial Stem Cells

**Stem Cell Biology:**

Location:
- Basal layer
- Vessel-associated
- Glandular base

Properties:
- Self-renewal
- Multipotent differentiation
- Regenerate functionalis

Clinical relevance:
- Endometrial regeneration
- Asherman syndrome treatment
- Tissue engineering

### Uterine Transplantation

**Histologic Considerations:**

Graft assessment:
- Pre-transplant biopsy
- Vascular integrity
- Rejection surveillance

Rejection diagnosis:
- Endometrial biopsy
- Immunologic infiltrate
- Treatment monitoring

### Advanced Diagnostic Techniques

**Digital Pathology and AI:**

Applications:
- Endometrial dating automation
- Hyperplasia vs carcinoma
- Grade assessment
- Molecular surrogate markers

Limitations:
- Validation required
- Inter-observer variability
- Cost and implementation

**Molecular Testing:**

NGS panels:
- POLE mutations
- MMR deficiency
- TP53 status
- Targetable alterations

Prognostic signatures:
- Gene expression profiling
- Risk stratification
- Treatment prediction

### Endometriosis Histology

**Ectopic Endometrial Tissue:**

Features:
- Endometrial glands
- Endometrial stroma
- Hemosiderin-laden macrophages
- Fibrosis
- Inflammation

Location-specific changes:
- Ovaries (endometriomas)
- Peritoneum (implants)
- Deep infiltrating (fibromuscular reaction)
- Rectovaginal (nodular)

**Atypical Endometriosis:**
- Cytologic atypia
- Hyperplasia
- Association with malignancy
- Ovarian cancer risk

### Uterine Mesenchymal Tumors

**Endometrial Stromal Tumors:**

Endometrial stromal nodule:
- Benign
- Well-circumscribed
- Endometrial stromal differentiation

Endometrial stromal sarcoma:
- Low-grade: Hormone-responsive
- High-grade: Undifferentiated, aggressive

**Smooth Muscle Tumor Variants:**

Benign metastasizing leiomyoma:
- Histologically benign
- Metastasizes (often to lung)
- Hormone-dependent

Intravenous leiomyomatosis:
- Intravascular growth
- Histologically benign
- Can extend to heart

### Research Frontiers

**Organoid Culture:**
- Endometrial organoids
- Long-term culture
- Hormone responsiveness
- Personalized medicine applications

**Single-Cell Sequencing:**
- Cellular heterogeneity
- Cycle-phase changes
- Decidualization
- Disease mechanisms

**Endometrial Regeneration:**
- Stem cell therapy
- Bioengineered endometrium
- Asherman syndrome treatment
- Fertility restoration`,
      keyTerms: [
        { term: 'POLE mutation', definition: 'DNA polymerase epsilon mutation causing ultramutated endometrial cancer with excellent prognosis' },
        { term: 'microsatellite instability', definition: 'Defective DNA mismatch repair causing mutations in repetitive DNA sequences' },
        { term: 'pinopodes', definition: 'Surface protrusions on endometrial cells during window of implantation' },
        { term: 'endometrial organoid', definition: '3D cultured endometrial tissue for research and therapeutic applications' },
        { term: 'benign metastasizing leiomyoma', definition: 'Histologically benign leiomyoma with metastatic behavior' },
      ],
      clinicalNotes: `Key Clinical Pearls:

1. The TCGA molecular classification of endometrial cancer has transformed risk stratification. POLE-mutated tumors have excellent prognosis despite high grade. MMR-deficient tumors may respond to immunotherapy.

2. Endometrial dating is primarily a research tool. Poor correlation between histologic dating and fertility outcomes limits clinical utility for infertility evaluation.

3. Adenomyosis diagnosis on histology requires endometrial glands and stroma >2.5 mm deep to the myometrial-endometrial junction. Often underdiagnosed on biopsy.

4. Leiomyosarcoma is rare (<1% of uterine smooth muscle tumors). Cannot be diagnosed preoperatively with certainty. Features: coagulative necrosis, cytologic atypia, mitotic index.

5. Endometrial polyps in postmenopausal women, especially with bleeding, have increased risk of containing endometrial hyperplasia or carcinoma and should be removed.`,
    },
  },

  media: [
    {
      id: 'endometrial-cycle',
      type: 'histology',
      filename: 'endometrial-cycle.jpg',
      title: 'Endometrium Throughout Menstrual Cycle',
      description: 'Comparison of proliferative and secretory phase histology',
    },
    {
      id: 'uterus-layers',
      type: 'diagram',
      filename: 'uterus-layers.svg',
      title: 'Uterine Wall Layers',
      description: 'Endometrium, myometrium, and perimetrium',
    },
  ],

  citations: [
    {
      id: 'endometrial-dating',
      type: 'article',
      title: 'Dating the Endometrial Biopsy',
      authors: ['Noyes RW', 'Hertig AT', 'Rock J'],
      source: 'Fertility and Sterility',
    },
    {
      id: 'tcga-endometrial',
      type: 'article',
      title: 'Integrated Genomic Characterization of Endometrial Carcinoma',
      authors: ['The Cancer Genome Atlas Research Network'],
      source: 'Nature',
    },
  ],

  crossReferences: [
    { targetId: 'reproductive-menstrual-cycle', targetType: 'concept', relationship: 'related', label: 'Menstrual Cycle' },
    { targetId: 'reproductive-pregnancy-physiology', targetType: 'concept', relationship: 'related', label: 'Pregnancy Physiology' },
    { targetId: 'reproductive-ovary-histology', targetType: 'structure', relationship: 'related', label: 'Ovary Histology' },
  ],

  tags: {
    systems: ['reproductive'],
    topics: ['histology', 'anatomy', 'female-reproduction'],
    keywords: ['endometrium', 'myometrium', 'menstrual cycle', 'decidua', 'uterus'],
    clinicalRelevance: 'high',
  },

  createdAt: '2026-01-28T00:00:00.000Z',
  updatedAt: '2026-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default uterusHistology;
