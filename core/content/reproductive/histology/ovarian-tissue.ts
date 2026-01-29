/**
 * Ovarian Tissue Histology - Reproductive System
 *
 * Comprehensive content on ovarian tissue microscopic anatomy including
 * stromal components, vascular architecture, and tissue organization
 * with clinical correlations.
 */

import { EducationalContent } from '../../types';

export const ovarianTissue: EducationalContent = {
  id: 'reproductive-ovarian-tissue',
  type: 'structure',
  name: 'Ovarian Tissue',
  alternateNames: ['Ovarian Stroma', 'Ovarian Architecture', 'Ovarian Tissue Structure'],

  levels: {
    1: {
      level: 1,
      summary: 'The ovary is made of different types of tissue that work together to produce eggs and hormones. It has an outer layer with developing eggs and an inner layer with blood vessels.',
      explanation: `## What Is Ovarian Tissue?

The ovary is an organ about the size of an almond that has special jobs: making eggs and producing hormones.

### Main Parts of the Ovary

**1. The Surface (Germinal Epithelium)**
- Thin layer of cells covering the outside
- Protects the ovary
- Gets damaged and heals each time an egg is released

**2. The Outer Layer (Cortex)**
- Contains all the egg follicles (tiny sacs with eggs)
- Where eggs grow and mature
- Has supporting tissue called stroma
- More active part of the ovary

**3. The Inner Layer (Medulla)**
- Contains blood vessels that bring nutrients
- Has nerves and lymph vessels
- Provides support to the ovary
- Connects to the body through the hilum

**4. Supporting Tissue (Stroma)**
- Fills the spaces between follicles
- Made of special cells and fibers
- Helps make hormones
- Provides structure

### How the Ovary Works

**Monthly Cycle:**
- Several follicles start growing each month
- Usually only one becomes fully mature
- That follicle releases its egg (ovulation)
- The empty follicle becomes a temporary hormone factory

**Blood Supply:**
- Blood brings hormones from the brain to start egg development
- Blood carries away hormones made by the ovary
- Good blood flow is important for healthy eggs

### Changes Over Time

**Before Puberty:**
- Ovaries are small and inactive
- Many primordial follicles waiting

**During Reproductive Years:**
- Active egg development each month
- Hormones being produced

**After Menopause:**
- Most follicles are gone
- Ovaries become smaller
- Less hormone production`,
      keyTerms: [
        { term: 'ovarian cortex', definition: 'The outer layer of the ovary containing egg follicles' },
        { term: 'ovarian medulla', definition: 'The inner layer of the ovary with blood vessels and nerves' },
        { term: 'stroma', definition: 'The supporting connective tissue of the ovary' },
        { term: 'hilum', definition: 'The area where blood vessels and nerves enter the ovary' },
        { term: 'germinal epithelium', definition: 'The thin layer of cells covering the ovary surface' },
      ],
      analogies: [
        'The ovary is like a fruit - the skin is the surface epithelium, the flesh is the cortex with its "seeds" (eggs), and the core is the medulla.',
        'The ovarian stroma is like the filling in a pillow - it provides support and cushioning for the important structures inside.',
      ],
      examples: [
        'Each ovary contains about 1 million follicles at birth',
        'The ovary is about 3-4 cm long in an adult woman',
        'Blood vessels in the medulla look like a tangled mass of tubes under the microscope',
      ],
      patientCounselingPoints: [
        'The ovaries are about the size and shape of almonds',
        'Both ovaries do the same job, so losing one still allows pregnancy',
        'Ovarian function naturally decreases as women approach menopause',
        'Pain in the ovary area during your cycle is often from ovulation',
      ],
    },
    2: {
      level: 2,
      summary: 'Ovarian tissue comprises the surface epithelium, underlying tunica albuginea, cortex containing follicles and stroma, and medulla with vasculature. The stromal cells have endocrine function and support follicular development.',
      explanation: `## Ovarian Tissue Organization

The ovary has a complex architecture designed to support egg production and hormone synthesis.

### Surface Structures

**Surface Epithelium:**
- Single layer of cuboidal cells
- Continuous with peritoneal mesothelium
- Previously called "germinal epithelium" (misnomer - eggs don't come from here)
- Ruptures and heals with each ovulation
- Site of origin for most ovarian cancers

**Tunica Albuginea:**
- Dense connective tissue layer beneath epithelium
- Provides structural support
- Thinner than testicular tunica albuginea
- Whitish appearance on gross examination

### Cortex Structure

**Components:**
- Follicles at various developmental stages
- Ovarian stroma
- Corpora lutea (if present)
- Corpora albicantia (old corpora lutea)
- Atretic follicles

**Stromal Organization:**

| Component | Characteristics | Function |
|-----------|-----------------|----------|
| Cortical stroma | Densely packed spindle cells | Structural support, hormone production |
| Theca cells | Surround follicles | Androgen production |
| Interstitial cells | Between follicles | Steroid synthesis |
| Collagen fibers | Extracellular matrix | Structural framework |

### Medulla Structure

**Features:**
- Loose connective tissue
- Major blood vessels (ovarian artery, veins)
- Lymphatic vessels
- Nerve fibers
- Hilum cells (occasionally present)

**Blood Supply:**

---
Ovarian Vascular Architecture:

Arterial supply:
  - Ovarian artery (from aorta)
  - Ovarian branch of uterine artery
  - Enter through hilum

Venous drainage:
  - Pampiniform plexus
  - Right ovarian vein -> IVC
  - Left ovarian vein -> left renal vein

Unique features:
  - Spiral arteries to follicles
  - Increased vascularity around corpus luteum
  - Dual arterial supply provides redundancy
---

### Stromal Cell Biology

**Characteristics:**
- Spindle-shaped fibroblast-like cells
- Express steroidogenic enzymes
- Respond to gonadotropins
- Contractile properties

**Functions:**
- Structural support for follicles
- Local hormone production
- Wound healing after ovulation
- Immune cell interactions

### Age-Related Changes

**Prepubertal Ovary:**
- Small size (1-2 cm)
- Cortex predominates
- Abundant primordial follicles
- Minimal stromal activity

**Reproductive Years:**
- Maximum size (3-4 cm)
- Active folliculogenesis
- Corpora lutea present cyclically
- Dynamic stromal changes

**Postmenopausal Ovary:**
- Size decreases (1-2 cm)
- Few or no follicles
- Surface wrinkled
- Increased stromal fibrosis
- Continued androgen production by stroma`,
      keyTerms: [
        { term: 'tunica albuginea', definition: 'Dense connective tissue layer beneath the ovarian surface epithelium' },
        { term: 'hilum', definition: 'Entry point for blood vessels, lymphatics, and nerves into the ovary' },
        { term: 'pampiniform plexus', definition: 'Network of veins draining the ovary' },
        { term: 'interstitial cells', definition: 'Hormone-producing cells in the ovarian stroma between follicles' },
        { term: 'corpus albicans', definition: 'White scar tissue remaining after corpus luteum regression' },
      ],
      analogies: [
        'The ovarian blood supply is like a dual highway system - two roads (arteries) converge to ensure traffic (blood) can always reach the destination.',
        'The surface epithelium is like skin over a wound - it breaks and heals each month with ovulation.',
      ],
      examples: [
        'The left ovarian vein drains into the left renal vein, which is why left varicoceles are more common',
        'Postmenopausal ovaries still produce androgens from stromal cells',
        'Multiple corpora albicantia indicate an ovary with history of many ovulations',
      ],
      patientCounselingPoints: [
        'Ovarian tissue can still produce hormones after menopause',
        'The surface epithelium repairs itself after each ovulation',
        'Both the aorta and uterine artery supply blood to the ovaries',
        'Ovarian size decreases significantly after menopause',
      ],
    },
    3: {
      level: 3,
      summary: 'Ovarian tissue histology reveals a stratified organization with cuboidal surface epithelium, fibrous tunica albuginea, cortex with follicles embedded in specialized stroma, and highly vascularized medulla. Stromal cells exhibit steroidogenic capacity and respond to hormonal regulation.',
      explanation: `## Detailed Ovarian Tissue Histology

### Surface Epithelium Characteristics

**Histologic Features:**
- Simple cuboidal to low columnar cells
- Microvilli on apical surface
- Single prominent nucleolus
- Continuous with peritoneal mesothelium at ovarian margin
- Basement membrane present

**Molecular Markers:**
- Keratin positive
- PAX8 positive (Mullerian marker)
- WT1 positive
- Calretinin negative (distinguishes from mesothelium)

**Clinical Significance:**
- Site of origin for 90% of ovarian cancers
- Surface inclusion cysts from repeated ovulation
- Epithelial invagination with age

### Tunica Albuginea

**Composition:**
- Dense irregular connective tissue
- Type I and III collagen
- Few fibroblasts
- Avascular zone
- Thickness: 50-100 micrometers

**Functional Implications:**
- Must weaken for ovulation
- Enzymatic degradation at ovulation site
- Repairs with scar tissue over time

### Cortical Stroma

**Cellular Components:**

---
Stromal Cell Types:

Fibroblast-like stromal cells:
  - Predominant cell type
  - Spindle-shaped morphology
  - Express androgen receptors
  - Collagen production
  - Contractile properties

Theca-interstitial cells:
  - Derived from stromal cells
  - Steroidogenic ultrastructure
  - LH receptors
  - Produce androgens
  - Persist after follicle atresia

Immune cells:
  - Macrophages (tissue remodeling)
  - Lymphocytes
  - Mast cells
  - Increase around ovulation
---

**Extracellular Matrix:**
- Type I and III collagen (structural)
- Type IV collagen (basement membranes)
- Fibronectin
- Laminin
- Proteoglycans (hyaluronan, decorin)

**Stromal-Follicle Interactions:**
- Paracrine signaling essential
- Growth factor exchange
- Hormone gradients
- Vascular recruitment

### Medullary Organization

**Vascular Architecture:**

Arterial system:
- Ovarian artery branches at hilum
- Spiral arterioles to cortex
- Helicine arteries around follicles
- Extensive anastomoses

Venous system:
- Pampiniform plexus (heat exchange)
- Ovarian veins exit at hilum
- Valveless in some segments

Lymphatics:
- Drain to para-aortic nodes
- Important for cancer staging

**Nerve Supply:**
- Sympathetic fibers (blood vessel regulation)
- Sensory fibers (pain perception)
- Follow vascular bundles

### Steroidogenic Machinery

**Enzyme Distribution:**

| Cell Type | Key Enzymes | Products |
|-----------|-------------|----------|
| Theca cells | CYP17, 3beta-HSD | Androgens |
| Granulosa cells | Aromatase (CYP19) | Estrogens |
| Luteal cells | P450scc, 3beta-HSD | Progesterone |
| Stromal cells | CYP17, some 3beta-HSD | Androgens |

**Ultrastructural Features of Steroidogenic Cells:**
- Abundant smooth endoplasmic reticulum
- Mitochondria with tubular cristae
- Lipid droplets (cholesterol stores)
- Well-developed Golgi apparatus

### Ovulation Site Changes

**Pre-Ovulation:**
- Follicle bulges at surface
- Surface epithelium thins
- Stigma formation (avascular apex)

**Ovulation:**
- Proteolytic enzyme release (MMPs, plasmin)
- Follicle rupture
- Oocyte release with cumulus

**Post-Ovulation:**
- Surface epithelium regenerates
- Corpus luteum forms
- Angiogenesis in luteal tissue
- Fibrosis with regression`,
      keyTerms: [
        { term: 'stigma', definition: 'The avascular apex of a follicle where ovulation rupture occurs' },
        { term: 'helicine arteries', definition: 'Spiral arteries that supply blood to developing follicles' },
        { term: 'inclusion cyst', definition: 'Epithelial-lined cyst formed from surface epithelium invagination' },
        { term: 'PAX8', definition: 'Transcription factor marker for Mullerian epithelium including ovarian surface' },
        { term: 'CYP17', definition: 'Enzyme (17-alpha-hydroxylase) essential for androgen synthesis' },
      ],
      analogies: [
        'The stigma at ovulation is like the weakest point in a water balloon - enzymatic weakening creates the spot where rupture will occur.',
        'The pampiniform plexus is like a radiator - the network of vessels helps regulate temperature.',
      ],
      examples: [
        'Surface inclusion cysts increase with age and repeated ovulations',
        'Mittelschmerz (ovulation pain) is due to peritoneal irritation from follicular fluid',
        'Stromal hyperplasia can produce excess androgens causing hirsutism',
      ],
      clinicalNotes: 'The ovarian surface epithelium, despite being only a single cell layer, is the origin of approximately 90% of ovarian malignancies. The repeated injury-repair cycle of ovulation may contribute to malignant transformation through accumulated DNA damage.',
    },
    4: {
      level: 4,
      summary: 'Advanced ovarian tissue histology encompasses stromal pathology, vascular abnormalities, tissue biomarkers for disease diagnosis, and the relationship between tissue architecture and pathologic conditions including PCOS, stromal hyperplasia, and ovarian neoplasms.',
      explanation: `## Clinical Ovarian Tissue Histology

### Stromal Pathology

**Stromal Hyperplasia:**

Definition: Proliferation of ovarian stromal cells

Histologic features:
- Nodular or diffuse stromal expansion
- Hypercellular stroma
- Luteinized stromal cells (lipid vacuoles)
- May produce androgens

Clinical associations:
- Postmenopausal women
- Hyperandrogenism
- Endometrial hyperplasia/cancer (estrogen effect)
- Obesity

**Stromal Hyperthecosis:**

Definition: Presence of luteinized stromal cells scattered throughout stroma

Features:
- Nests or individual luteinized cells
- Abundant eosinophilic cytoplasm
- Round central nuclei
- Often bilateral

Clinical significance:
- Virilization (more severe than PCOS)
- Testosterone often in male range
- Insulin resistance
- Resistant to suppression

**PCOS-Related Changes:**

---
Histologic Features in PCOS:

Cortical changes:
  - Thickened tunica albuginea
  - Increased cortical stroma
  - Multiple subcapsular follicles (2-8mm)
  - Arrested follicular development
  - Rare or absent corpora lutea

Stromal changes:
  - Hyperplasia of theca interna
  - Luteinization of theca cells
  - Increased androgen production

Ovarian surface:
  - Smooth, pearl-white appearance
  - Absent ovulation stigmata
---

### Vascular Pathology

**Ovarian Torsion:**

Histologic findings (by duration):
- Early: Congestion, edema
- Intermediate: Hemorrhagic infarction
- Late: Necrosis, loss of architecture

Factors affecting viability:
- Duration of torsion
- Degree of vascular compromise
- Presence of venous vs. arterial occlusion
- Associated pathology (cyst, tumor)

**Massive Ovarian Edema:**
- Stromal edema separating cells
- Dilated lymphatics
- Often unilateral
- Associated with partial torsion
- Can mimic neoplasm grossly

### Biomarkers and Immunohistochemistry

**Diagnostic Markers:**

| Marker | Normal Expression | Diagnostic Use |
|--------|-------------------|----------------|
| Inhibin | Granulosa, stromal cells | Sex cord-stromal tumors |
| Calretinin | Sex cord-stromal cells | Distinguish from epithelial tumors |
| SF-1 | Steroidogenic cells | Sex cord-stromal tumors |
| FOXL2 | Granulosa cells | Granulosa cell tumors |
| WT1 | Surface epithelium | Serous carcinoma |
| PAX8 | Surface epithelium | Epithelial tumors |

**Proliferation Markers:**
- Ki-67: Proliferation index
- p53: Tumor suppressor (aberrant in high-grade serous)
- PTEN: Tumor suppressor (lost in some tumors)

### Ovarian Reserve Assessment

**Histologic Correlates:**

| Parameter | Histologic Assessment |
|-----------|----------------------|
| Primordial follicle count | Gold standard but invasive |
| Antral follicle count | Correlates with reserve |
| Cortical density | Follicle-to-stroma ratio |
| Stromal fibrosis | Indicates reduced reserve |

**Age-Related Histologic Changes:**
- Progressive follicle loss (accelerated after 35)
- Increased stromal fibrosis
- Surface epithelial changes (metaplasia)
- Accumulation of corpora albicantia
- Decreased vascularity

### Neoplastic Tissue Changes

**Epithelial Tumors:**

Surface epithelial origin:
- Serous (Fallopian tube-like epithelium)
- Mucinous (intestinal or endocervical type)
- Endometrioid (endometrial-like)
- Clear cell
- Brenner (transitional-like)

Molecular subtypes (serous):
- High-grade: TP53 mutations, BRCA association
- Low-grade: KRAS/BRAF mutations, indolent

**Sex Cord-Stromal Tumors:**

Granulosa cell tumor:
- Adult type: FOXL2 mutation (C402G)
- Call-Exner bodies (microfollicles)
- Nuclear grooves (coffee-bean)

Thecoma/fibroma:
- Thecoma: Lipid-rich cells, estrogen production
- Fibroma: Spindle cells, collagen, Meigs syndrome

Sertoli-Leydig:
- Variable differentiation
- May produce androgens

**Germ Cell Tumors:**
- Dysgerminoma (primitive germ cells)
- Teratoma (differentiated tissues)
- Yolk sac tumor (AFP production)
- Mixed germ cell tumors

### Frozen Section Assessment

**Indications:**
- Intraoperative diagnosis
- Guide surgical extent
- Triage specimens

**Challenges:**
- Borderline tumors difficult
- Mucinous tumors: Rule out appendiceal origin
- Immature teratoma grading

**Accuracy:**
- >90% for benign vs. malignant
- Lower for borderline tumors
- Defer complex cases to permanent sections`,
      keyTerms: [
        { term: 'stromal hyperthecosis', definition: 'Presence of luteinized theca cells scattered through ovarian stroma; causes severe hyperandrogenism' },
        { term: 'FOXL2', definition: 'Transcription factor mutated in adult granulosa cell tumors; diagnostic marker' },
        { term: 'Call-Exner bodies', definition: 'Microfollicular spaces with eosinophilic material in granulosa cell tumors' },
        { term: 'Meigs syndrome', definition: 'Triad of ovarian fibroma, ascites, and pleural effusion' },
        { term: 'SF-1', definition: 'Steroidogenic factor 1; transcription factor expressed in sex cord-stromal tumors' },
      ],
      clinicalNotes: 'Stromal hyperthecosis produces more severe virilization than PCOS because testosterone levels can reach the male range. Unlike PCOS, it typically affects postmenopausal women and does not respond to GnRH agonist suppression. Treatment may require bilateral oophorectomy.',
    },
    5: {
      level: 5,
      summary: 'Expert ovarian tissue histology integrates molecular pathology, stem cell biology, tissue engineering approaches, and emerging biomarkers. Understanding tissue architecture is essential for interpreting ovarian pathology and developing regenerative therapies.',
      explanation: `## Advanced Ovarian Tissue Biology

### Molecular Pathology

**Epithelial-Stromal Interactions:**

---
Signaling Pathways:

Follicle development:
  - TGF-beta family (activins, inhibins, BMPs)
  - Wnt signaling (stromal-epithelial crosstalk)
  - Notch pathway (cell fate decisions)
  - Hedgehog signaling (theca cell function)

Steroidogenesis regulation:
  - cAMP/PKA pathway (LH response)
  - PI3K/AKT (FSH response)
  - MAPK cascade
  - Nuclear receptor signaling

Ovulation:
  - LH surge triggers cascade
  - Prostaglandin synthesis
  - Matrix metalloproteinase activation
  - Inflammatory-like response
---

**Tumor Microenvironment:**

Stromal contributions to cancer:
- Cancer-associated fibroblasts
- Angiogenesis support
- Immune evasion
- Drug resistance

Molecular signatures:
- Stromal gene expression predicts outcome
- Immunosuppressive microenvironment
- Metabolic reprogramming

### Ovarian Stem Cells

**Putative Stem Cell Populations:**

Oogonial stem cells (controversial):
- Very small embryonic-like cells (VSELs)
- Oct-4 expression reported
- Ability to generate oocytes (disputed)
- Potential for fertility restoration

Germline stem cells:
- Evidence in some species (mice)
- Human evidence limited
- Active research area

Surface epithelium stem cells:
- Self-renewal capacity
- May contribute to cancer initiation
- Stem cell markers (LGR5, ALDH1)

**Clinical Implications:**
- Ovarian rejuvenation claims
- PRP (platelet-rich plasma) injections
- Stem cell-based therapies
- Evidence base still limited

### Tissue Engineering

**Ovarian Tissue Cryopreservation:**

Indications:
- Fertility preservation (cancer treatment)
- Premature ovarian insufficiency prevention
- Genetic conditions affecting ovarian function

Technique:
- Laparoscopic cortical biopsy
- Slow freezing or vitrification
- Storage in liquid nitrogen
- Later transplantation or in vitro activation

Outcomes:
- Live births achieved after reimplantation
- Hormone restoration
- Limited lifespan of transplanted tissue

**Artificial Ovary Development:**

---
Components:

Scaffold options:
  - Decellularized tissue
  - Alginate encapsulation
  - 3D-printed matrices
  - Fibrin-based materials

Cell populations:
  - Follicles (primordial to secondary)
  - Stromal cells
  - Endothelial cells (vascularization)
  - Immune cells

Challenges:
  - Vascularization
  - Follicle isolation
  - Long-term survival
  - Hormone production
---

### Advanced Diagnostics

**Single-Cell Analysis:**

Applications:
- Characterize cell populations
- Identify rare cell types
- Understand disease mechanisms
- Drug target identification

Technologies:
- Single-cell RNA sequencing
- Spatial transcriptomics
- Mass cytometry
- Multiplex immunofluorescence

**Liquid Biopsy:**
- Circulating tumor DNA
- Exosomal biomarkers
- Ovarian cancer early detection
- Treatment monitoring

### Research Frontiers

**In Vitro Folliculogenesis:**

Goals:
- Mature follicles from primordial stage
- Fertility preservation alternative
- Research platform

Progress:
- Mouse: Complete IVF from primordial follicle
- Human: Antral stage achieved
- Live births not yet achieved in humans

**Ovarian Organoids:**
- 3D culture of ovarian cells
- Recapitulate tissue architecture
- Drug testing platform
- Disease modeling

**Gene Therapy:**
- Primary ovarian insufficiency
- Genetic causes of infertility
- CRISPR applications (research stage)
- Ethical considerations

### Clinical-Pathological Correlations

**Tumor Board Applications:**

| Clinical Scenario | Pathology Contribution |
|-------------------|----------------------|
| Borderline tumor | Risk stratification, surgical extent |
| High-grade serous | BRCA testing indication, chemotherapy response |
| Granulosa cell | Long-term follow-up need (late recurrence) |
| Mucinous tumor | Exclude GI primary |
| Incidental finding | Malignancy risk assessment |

**Molecular Testing in Clinical Practice:**
- BRCA1/2 testing (all epithelial ovarian cancers)
- Homologous recombination deficiency
- Mismatch repair (Lynch syndrome)
- NTRK fusions (rare, targetable)

### Quality and Safety Considerations

**Tissue Banking Standards:**
- Consent processes
- Infectious disease screening
- Quality control measures
- Chain of custody
- Long-term storage protocols

**Regulatory Framework:**
- FDA oversight (reproductive tissue)
- Institutional review board approval
- Professional society guidelines
- International standards`,
      keyTerms: [
        { term: 'VSELs', definition: 'Very small embryonic-like stem cells; putative pluripotent cells in adult ovary' },
        { term: 'in vitro activation', definition: 'Technique to stimulate primordial follicle growth outside the body' },
        { term: 'decellularized scaffold', definition: 'Tissue matrix with cells removed, preserving extracellular structure' },
        { term: 'homologous recombination deficiency', definition: 'DNA repair defect predicting PARP inhibitor sensitivity' },
        { term: 'spatial transcriptomics', definition: 'Technology mapping gene expression to tissue location' },
      ],
      clinicalNotes: `Key Clinical Pearls:

1. Ovarian tissue cryopreservation is no longer experimental and should be offered to appropriate patients before gonadotoxic therapy.

2. The ovarian surface epithelium, while only a single cell layer, gives rise to most ovarian cancers. Its repeated injury and repair with ovulation may contribute to malignant transformation.

3. Stromal hyperthecosis differs from PCOS in producing more severe hyperandrogenism and occurring in postmenopausal women. It often requires surgical management.

4. BRCA testing is now recommended for all women with epithelial ovarian cancer regardless of family history, as results affect treatment options (PARP inhibitors).

5. Single-cell technologies are revealing previously unknown cellular heterogeneity in ovarian tissue, with implications for understanding both normal function and disease.`,
    },
  },

  media: [
    {
      id: 'ovarian-architecture',
      type: 'histology',
      filename: 'ovarian-architecture.jpg',
      title: 'Ovarian Tissue Architecture',
      description: 'Cross-section showing cortex, medulla, and surface epithelium',
    },
    {
      id: 'stromal-cells',
      type: 'histology',
      filename: 'stromal-cells.jpg',
      title: 'Ovarian Stromal Cells',
      description: 'High-power view of spindle-shaped stromal cells',
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
      id: 'ovarian-pathology',
      type: 'textbook',
      title: 'Blaustein\'s Pathology of the Female Genital Tract',
      authors: ['Kurman RJ', 'Ellenson LH', 'Ronnett BM'],
      source: 'Springer',
    },
  ],

  crossReferences: [
    { targetId: 'reproductive-ovary-histology', targetType: 'structure', relationship: 'related', label: 'Ovary Histology' },
    { targetId: 'reproductive-menstrual-cycle', targetType: 'process', relationship: 'related', label: 'Menstrual Cycle' },
    { targetId: 'reproductive-pcos', targetType: 'condition', relationship: 'related', label: 'PCOS' },
  ],

  tags: {
    systems: ['reproductive'],
    topics: ['histology', 'anatomy', 'ovarian-physiology'],
    keywords: ['ovary', 'stroma', 'cortex', 'medulla', 'tissue architecture'],
    clinicalRelevance: 'high',
  },

  createdAt: '2026-01-28T00:00:00.000Z',
  updatedAt: '2026-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default ovarianTissue;
