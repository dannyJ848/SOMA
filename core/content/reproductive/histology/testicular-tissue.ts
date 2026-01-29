/**
 * Testicular Tissue Histology - Reproductive System
 *
 * Comprehensive content on testicular tissue microscopic anatomy including
 * interstitial tissue, vascular architecture, and supporting structures
 * with clinical correlations.
 */

import { EducationalContent } from '../../types';

export const testicularTissue: EducationalContent = {
  id: 'reproductive-testicular-tissue',
  type: 'structure',
  name: 'Testicular Tissue',
  alternateNames: ['Testis Architecture', 'Testicular Stroma', 'Testicular Structure'],

  levels: {
    1: {
      level: 1,
      summary: 'The testis is made of tiny tubes where sperm are produced, surrounded by tissue that makes testosterone. The whole organ is wrapped in a tough protective covering.',
      explanation: `## What Is Testicular Tissue?

The testis (testicle) is an egg-shaped organ about the size of a large olive. It has two main jobs: making sperm and producing the hormone testosterone.

### Main Parts of the Testis

**1. Outer Covering (Tunica Albuginea)**
- Thick, tough white layer
- Protects the delicate inside
- Gives the testis its firm feel
- Divides the testis into sections

**2. Seminiferous Tubules (Sperm Tubes)**
- Hundreds of tiny coiled tubes
- Where sperm cells are made
- If uncoiled, each tube would be about 2 feet long
- All tubes combined would stretch over a quarter mile

**3. Interstitial Tissue (Space Between Tubes)**
- Contains Leydig cells that make testosterone
- Has blood vessels bringing nutrients
- Has nerves and other support cells
- Fills gaps between the tubules

**4. Support Structures**
- Rete testis: Network that collects sperm
- Efferent ductules: Tubes leading to the epididymis
- Blood vessels and lymphatics

### How It All Works Together

**Sperm Production:**
- Inside the tubules, stem cells divide and mature
- The process takes about 74 days
- Millions of sperm are made every day

**Testosterone Production:**
- Leydig cells in the interstitial tissue make testosterone
- Testosterone is needed for sperm production
- Also causes male characteristics (deep voice, facial hair)

**Blood Supply:**
- Blood brings hormones from the brain to control sperm production
- Carries testosterone to the rest of the body
- Special arrangement keeps the testis slightly cool

### Why Temperature Matters

- Sperm production works best at 2-3 degrees below body temperature
- The scrotum keeps testes outside the body for cooling
- Heat can temporarily reduce sperm production`,
      keyTerms: [
        { term: 'tunica albuginea', definition: 'The tough white covering that protects the testis' },
        { term: 'seminiferous tubules', definition: 'The tiny tubes inside the testis where sperm are made' },
        { term: 'interstitial tissue', definition: 'The tissue between the tubules that contains hormone-producing cells' },
        { term: 'Leydig cells', definition: 'Cells that produce testosterone' },
        { term: 'rete testis', definition: 'A network that collects sperm from the seminiferous tubules' },
      ],
      analogies: [
        'The testis is like a factory - the tubules are the assembly lines making products (sperm), while the space between them houses the power plant (Leydig cells making testosterone).',
        'The tunica albuginea is like a hard-shell suitcase protecting the delicate contents inside.',
      ],
      examples: [
        'Each testis produces about 100-200 million sperm per day',
        'The seminiferous tubules total about 250 meters if uncoiled',
        'Leydig cells make about 5-10 mg of testosterone daily',
      ],
      patientCounselingPoints: [
        'The testes work best when slightly cooler than body temperature',
        'Tight underwear and hot tubs can temporarily affect sperm production',
        'Both testes do the same job, so losing one usually still allows fertility',
        'Testicular self-exams help detect lumps early',
      ],
    },
    2: {
      level: 2,
      summary: 'Testicular tissue comprises the tunica albuginea capsule, seminiferous tubules containing spermatogenic cells and Sertoli cells, and interstitial tissue with Leydig cells. The blood-testis barrier and specialized vasculature support spermatogenesis.',
      explanation: `## Testicular Tissue Organization

The testis has a highly organized structure designed for continuous sperm production throughout adult life.

### External Coverings

**Tunics (From Outside to Inside):**

| Layer | Composition | Function |
|-------|-------------|----------|
| Tunica vaginalis | Peritoneal covering, two layers | Protection, movement |
| Tunica albuginea | Dense connective tissue, 0.5-1mm | Structural support |
| Tunica vasculosa | Vascular network | Blood supply |

**Tunica Albuginea Features:**
- Thick, fibrous capsule
- Sends septula into interior (dividing walls)
- Mediastinum testis (thickened posterior portion)
- Entry point for blood vessels and nerves

### Internal Organization

**Lobular Structure:**
- 250-300 lobules per testis
- Each lobule contains 1-4 seminiferous tubules
- Separated by thin connective tissue septa

**Seminiferous Tubules:**
- Highly coiled tubes
- Length: 30-70 cm each
- Diameter: 150-250 micrometers
- Lined by spermatogenic epithelium
- Supported by basement membrane and myoid cells

**Tubule Drainage:**
- Straight tubules (tubuli recti)
- Rete testis (anastomosing network in mediastinum)
- Efferent ductules (10-15 to epididymis)

### Interstitial Tissue

**Leydig Cells (Interstitial Cells):**
- Large polygonal cells
- Eosinophilic cytoplasm (lipid-rich)
- Clusters between tubules
- Crystals of Reinke (eosinophilic inclusions)
- LH receptors for hormone regulation

**Other Interstitial Components:**
- Blood vessels (capillaries, arterioles, venules)
- Lymphatic vessels
- Nerve fibers
- Macrophages
- Mast cells
- Connective tissue fibers

### Blood Supply

**Testicular Artery:**
- Branch of abdominal aorta
- Highly coiled within spermatic cord
- Anastomoses with deferential and cremasteric arteries
- Enters at mediastinum testis

**Pampiniform Plexus:**
- Network of veins surrounding artery
- Countercurrent heat exchange
- Cools arterial blood entering testis
- Maintains temperature 2-3 degrees below body

**Clinical Significance:**
- Right testicular vein drains to IVC
- Left testicular vein drains to left renal vein
- Left varicoceles more common due to angle/length

### Blood-Testis Barrier

**Formation:**
- Tight junctions between Sertoli cells
- Near basement membrane
- Divides tubule into compartments

**Compartments:**
- Basal: Spermatogonia (accessible to blood)
- Adluminal: Meiotic and post-meiotic cells (protected)

**Functions:**
- Immunologic protection of developing sperm
- Creates unique microenvironment for meiosis
- Prevents autoimmune response to sperm antigens

### Lymphatic Drainage

- Follows blood vessels
- Drains to para-aortic and interaortocaval nodes
- Important for testicular cancer staging
- Not to inguinal nodes (unless scrotal involvement)`,
      keyTerms: [
        { term: 'mediastinum testis', definition: 'Thickened portion of tunica albuginea where vessels and nerves enter' },
        { term: 'septula testis', definition: 'Connective tissue partitions dividing the testis into lobules' },
        { term: 'pampiniform plexus', definition: 'Network of veins that cools blood entering the testis' },
        { term: 'Crystals of Reinke', definition: 'Rod-shaped eosinophilic inclusions characteristic of Leydig cells' },
        { term: 'blood-testis barrier', definition: 'Tight junctions between Sertoli cells protecting developing sperm' },
      ],
      analogies: [
        'The pampiniform plexus works like an air conditioner - veins carrying cooler blood surround and cool the artery bringing warm blood to the testis.',
        'The blood-testis barrier is like a VIP section - only certain cells can pass through to access the protected area.',
      ],
      examples: [
        'Varicocele (dilated pampiniform plexus) is more common on the left due to venous anatomy',
        'Rete testis obstruction causes azoospermia with normal hormone levels',
        'Testicular cancer spreads to para-aortic nodes, not inguinal nodes initially',
      ],
      patientCounselingPoints: [
        'The blood-testis barrier means sperm antigens are "hidden" from the immune system',
        'Vasectomy can sometimes cause antisperm antibodies when sperm leak past the barrier',
        'The special blood supply arrangement keeps the testis cooler for sperm production',
        'Left varicoceles are more common due to the left testicular vein\'s anatomy',
      ],
    },
    3: {
      level: 3,
      summary: 'Testicular tissue histology reveals the complex organization of seminiferous tubules, interstitial Leydig cells, and supporting vasculature. The spermatogenic epithelium shows orderly germ cell maturation, while Sertoli cell tight junctions form the blood-testis barrier essential for immunologic privilege.',
      explanation: `## Detailed Testicular Tissue Histology

### Seminiferous Tubule Wall

**Layers (Outside to Inside):**

---
Tubule Wall Structure:

1. Tunica propria (peritubular tissue):
   - Type I collagen fibers
   - Myoid cells (contractile, 3-5 layers)
   - Lymphatic endothelium
   - Fibroblasts

2. Basement membrane:
   - Type IV collagen
   - Laminin
   - Fibronectin
   - Proteoglycans

3. Spermatogenic epithelium:
   - Sertoli cells (fixed, supporting)
   - Germ cells (developing, moving toward lumen)
---

**Myoid Cells:**
- Smooth muscle-like cells
- Surround tubules
- Rhythmic contractions
- Move sperm toward rete testis
- Secrete extracellular matrix components

### Sertoli Cell Characteristics

**Morphology:**
- Tall columnar cells
- Extend from basement membrane to lumen
- Irregular, indented nucleus
- Prominent nucleolus
- Pale-staining cytoplasm
- Complex cytoplasmic processes

**Ultrastructure:**
- Smooth endoplasmic reticulum (steroid metabolism)
- Rough ER and Golgi (protein secretion)
- Lysosomes (phagocytosis)
- Lipid droplets
- Filaments (cytoskeleton)
- Specialized junctions

**Functions:**

| Function | Details |
|----------|---------|
| Structural support | Embed and support germ cells |
| Nutrition | Provide lactate, amino acids |
| Phagocytosis | Remove residual bodies, dying cells |
| Secretion | ABP, inhibin, AMH, fluid |
| Barrier | Blood-testis barrier |
| Hormone response | FSH and testosterone receptors |

### Blood-Testis Barrier Details

**Molecular Components:**
- Occludin, claudins (tight junction proteins)
- ZO-1, ZO-2 (scaffolding proteins)
- Cadherins (adherens junctions)
- Desmosomal proteins

**Dynamic Nature:**
- Must open transiently
- Allows preleptotene spermatocytes to pass
- Reconstitutes behind migrating cells
- Regulated by testosterone and cytokines

**Immunologic Significance:**
- Meiotic antigens not exposed during immune education
- Sperm antigens "foreign" to immune system
- Breach causes autoimmune orchitis

### Leydig Cell Histology

**Cellular Features:**

---
Leydig Cell Characteristics:

Light microscopy:
  - Large polygonal cells
  - Central round nucleus
  - Prominent nucleolus
  - Abundant eosinophilic cytoplasm
  - Lipofuscin pigment (age-related)
  - Crystals of Reinke (30% of cells)

Electron microscopy:
  - Extensive smooth ER (steroid synthesis)
  - Mitochondria with tubular cristae
  - Lipid droplets (cholesterol storage)
  - Well-developed Golgi
  - Peroxisomes
---

**Steroidogenic Pathway:**

Cholesterol -> Pregnenolone -> Progesterone
  -> 17-OH-Progesterone -> Androstenedione -> Testosterone

Key enzymes:
- StAR protein (cholesterol transport)
- CYP11A1 (P450scc)
- 3beta-HSD
- CYP17A1
- 17beta-HSD

### Vascular Architecture

**Arterial Supply:**

Testicular artery course:
- Origin: Abdominal aorta (below renal arteries)
- Descends retroperitoneally
- Enters spermatic cord
- Becomes highly coiled
- Enters testis at mediastinum

Intratesticular distribution:
- Centripetal arteries under tunica albuginea
- Centrifugal branches to parenchyma
- Recurrent rami (return to surface)

**Microcirculation:**
- Capillaries surround seminiferous tubules
- Interstitial capillaries near Leydig cells
- Fenestrated endothelium (hormone transport)
- High vascular density

**Venous Drainage:**
- Pampiniform plexus (countercurrent heat exchange)
- Coalesces to form testicular veins
- Right -> IVC directly
- Left -> Left renal vein

### Lymphatic System

**Drainage Pathways:**
- Parenchymal lymphatics
- Subcapsular plexus
- Follow spermatic cord
- Para-aortic and interaortocaval nodes

**Clinical Relevance:**
- Testicular tumors spread to para-aortic nodes first
- Inguinal nodes only if scrotal invasion
- RPLND based on lymphatic anatomy`,
      keyTerms: [
        { term: 'myoid cells', definition: 'Contractile cells surrounding seminiferous tubules that propel sperm' },
        { term: 'StAR protein', definition: 'Steroidogenic acute regulatory protein; rate-limiting for testosterone synthesis' },
        { term: 'centripetal arteries', definition: 'Arteries running inward along surface of testis under tunica albuginea' },
        { term: 'ABP', definition: 'Androgen-binding protein; Sertoli cell product maintaining high intratesticular testosterone' },
        { term: 'RPLND', definition: 'Retroperitoneal lymph node dissection; surgical staging for testicular cancer' },
      ],
      analogies: [
        'The blood-testis barrier is like a bouncer at a club - it lets some cells through (preleptotene spermatocytes) while keeping others out (immune cells).',
        'Leydig cells are like hormone factories - they have lots of smooth ER (production equipment) and lipid droplets (raw materials).',
      ],
      examples: [
        'Crystals of Reinke are pathognomonic for Leydig cells but only present in 30% of cells',
        'FSH acts on Sertoli cells while LH acts on Leydig cells',
        'The blood-testis barrier opens and closes as spermatocytes migrate toward the lumen',
      ],
      clinicalNotes: 'The blood-testis barrier creates immunologic privilege - sperm antigens are not presented to the immune system during fetal development. Testicular trauma or infection that breaches this barrier can cause autoimmune orchitis and antisperm antibodies, contributing to male infertility.',
    },
    4: {
      level: 4,
      summary: 'Clinical testicular tissue histology encompasses pathological conditions affecting the seminiferous tubules, interstitium, and supporting structures. Biopsy interpretation requires understanding of normal architecture, germ cell maturation patterns, and disease-specific changes.',
      explanation: `## Clinical Testicular Tissue Histology

### Testicular Biopsy Interpretation

**Indications:**
- Non-obstructive azoospermia evaluation
- Sperm retrieval for ICSI
- Suspected neoplasia
- Intersex disorders
- Research purposes

**Biopsy Techniques:**

| Technique | Description | Use |
|-----------|-------------|-----|
| Open biopsy | Small incision, direct visualization | Diagnostic, multiple samples |
| Percutaneous | Needle aspiration (TESA) | Sperm retrieval |
| Micro-TESE | Microscopic guidance | Non-obstructive azoospermia |

**Assessment Parameters:**
- Tubular diameter (normal: 180-200 micrometers)
- Germ cell layers (4-8 cell layers normal)
- Sertoli cell appearance
- Basement membrane thickness
- Interstitial tissue (Leydig cells, fibrosis)
- Johnsen score (0-10 scale)

### Patterns of Testicular Failure

**Hypospermatogenesis:**

Histology:
- Reduced germ cell layers
- All stages present but decreased
- Tubular diameter relatively preserved
- Normal Sertoli cells

Causes:
- Varicocele
- Heat exposure
- Medications/toxins
- Systemic illness

**Maturation Arrest:**

---
Patterns:

Early arrest (spermatogonia/primary spermatocyte):
  - Rare mature forms
  - Full basement membrane
  - Usually irreversible

Late arrest (spermatid):
  - No or few spermatozoa
  - Spermatids present
  - Sometimes reversible

Histology:
  - Cells present up to arrest point
  - No further differentiation
  - Tubular diameter often normal
  - May be focal or diffuse
---

**Sertoli Cell-Only Syndrome (Germ Cell Aplasia):**

Histology:
- Tubules contain only Sertoli cells
- No germ cells at any stage
- Thickened basement membrane
- Reduced tubular diameter
- Normal interstitium

Causes:
- Congenital (Klinefelter, Y microdeletion)
- Acquired (chemotherapy, radiation)
- Idiopathic

**Tubular Sclerosis (End-Stage):**
- Ghost tubules with hyalinized walls
- No cells within tubules
- Markedly reduced diameter
- Interstitial fibrosis
- Reduced Leydig cells

### Leydig Cell Pathology

**Leydig Cell Hyperplasia:**

Causes:
- Increased LH stimulation
- Klinefelter syndrome
- Androgen resistance
- hCG-producing tumors

Histology:
- Increased Leydig cell clusters
- Normal cell morphology
- Prominent nucleoli
- Often bilateral

**Leydig Cell Tumor:**

Histology:
- Large polygonal cells
- Abundant eosinophilic cytoplasm
- Crystals of Reinke (present in 25-40%)
- Lipofuscin pigment
- Nuclear pleomorphism variable

Behavior:
- Usually benign (90%)
- Malignant features: Size >5cm, necrosis, high mitoses
- Hormone production (gynecomastia, feminization, virilization)

### Germ Cell Tumors

**In Situ Lesion (GCNIS):**

---
Germ Cell Neoplasia In Situ:

Formerly: Intratubular germ cell neoplasia (ITGCN), CIS

Histology:
  - Large cells along basement membrane
  - Clear cytoplasm (glycogen)
  - Large hyperchromatic nuclei
  - Prominent nucleoli
  - Replaces normal spermatogenesis

Immunohistochemistry:
  - OCT3/4 positive
  - PLAP positive
  - CD117 (c-KIT) positive
  - SALL4 positive

Clinical:
  - Precursor to invasive germ cell tumors
  - 50% progress to invasive cancer in 5 years
  - Contralateral testis: 5% risk
  - Treatment: Orchiectomy vs radiation
---

**Seminoma:**
- Large cells with clear cytoplasm
- Round nuclei with prominent nucleoli
- Lymphocytic infiltrate common
- Granulomas may be present

**Non-Seminomatous GCTs:**
- Embryonal: Pleomorphic, primitive
- Yolk sac: Schiller-Duval bodies
- Choriocarcinoma: Biphasic, hemorrhagic
- Teratoma: Multiple tissue types

### Inflammatory Conditions

**Orchitis:**

Acute:
- Interstitial edema
- Neutrophil infiltration
- Tubular involvement variable
- May progress to abscess

Chronic:
- Lymphoplasmacytic infiltrate
- Tubular atrophy
- Interstitial fibrosis
- Granulomas (TB, sarcoid)

**Mumps Orchitis:**
- Interstitial inflammation initially
- Secondary tubular involvement
- Patchy distribution
- May cause permanent damage

### Special Stains and IHC

| Marker | Target | Use |
|--------|--------|-----|
| OCT3/4 | Germ cells, GCNIS | Tumor identification |
| PLAP | GCNIS, seminoma | Germ cell tumors |
| CD30 | Embryonal carcinoma | Tumor classification |
| AFP | Yolk sac tumor | Diagnosis, monitoring |
| hCG | Choriocarcinoma | Diagnosis, monitoring |
| Inhibin | Sertoli/Leydig cells | Sex cord-stromal tumors |
| SALL4 | Germ cells | Germ cell tumors |`,
      keyTerms: [
        { term: 'GCNIS', definition: 'Germ cell neoplasia in situ; precursor lesion for invasive testicular cancer' },
        { term: 'Johnsen score', definition: 'Quantitative scoring system (0-10) for evaluating spermatogenesis on biopsy' },
        { term: 'Schiller-Duval bodies', definition: 'Perivascular pseudorosettes diagnostic of yolk sac tumor' },
        { term: 'tubular sclerosis', definition: 'End-stage testicular damage with hyalinized, acellular tubules' },
        { term: 'PLAP', definition: 'Placental alkaline phosphatase; marker for germ cell tumors' },
      ],
      clinicalNotes: 'GCNIS (previously called intratubular germ cell neoplasia or carcinoma in situ) is found in virtually all testes containing invasive germ cell tumors. It is present in 5% of contralateral testes of men with testicular cancer. Management options include surveillance, radiation, or orchiectomy depending on clinical context.',
    },
    5: {
      level: 5,
      summary: 'Expert testicular tissue histology integrates molecular pathology, genetic testing, fertility preservation techniques, and emerging therapeutic approaches. Understanding tissue-level changes guides diagnosis, prognosis, and treatment of male reproductive disorders.',
      explanation: `## Advanced Testicular Tissue Biology

### Molecular Pathology

**Genetic Causes of Spermatogenic Failure:**

---
Chromosomal Abnormalities:

Klinefelter syndrome (47,XXY):
  - Most common (1:500-1:1000 males)
  - Histology varies by age
  - Prepubertal: Reduced germ cells
  - Adult: Tubular sclerosis, Leydig hyperplasia
  - Mosaics may have focal spermatogenesis

Y chromosome microdeletions:
  - AZFa: Complete Sertoli cell-only (USP9Y, DDX3Y)
  - AZFb: Maturation arrest (RBMY cluster)
  - AZFc: Variable phenotype (DAZ genes)
  - Gr/gr deletions: Partial AZFc, oligozoospermia

Single gene mutations:
  - TEX11: Meiotic arrest
  - SYCP3: Synaptonemal complex defect
  - NR5A1: Gonadal dysgenesis
  - DMRT1: Testicular dysgenesis
---

**Molecular Testing in Practice:**

| Indication | Testing |
|------------|---------|
| Azoospermia | Karyotype, Y microdeletion |
| CBAVD | CFTR mutations |
| Severe oligozoospermia (<5M/mL) | Karyotype |
| Testicular cancer | GCNIS markers, tumor markers |
| DSD | SRY, AR, NR5A1, and others |

### Spermatogonial Stem Cell Biology

**Stem Cell Identification:**

Markers:
- PLZF (ZBTB16): Undifferentiated spermatogonia
- GFRalpha1: Gdnf receptor (niche signaling)
- ID4: Self-renewal regulation
- UTF1: Pluripotency-related
- SALL4: Pan-germ cell marker

Niche components:
- Sertoli cells (GDNF, SCF secretion)
- Basement membrane (integrins, laminins)
- Peritubular myoid cells
- Leydig cells (paracrine factors)

**Stem Cell Transplantation:**

Experimental applications:
- Fertility restoration after chemotherapy
- Prepubertal fertility preservation
- Gene therapy vehicle

Challenges:
- Human stem cell isolation
- Culture and expansion
- Safe transplantation
- Long-term function

### Fertility Preservation

**Testicular Tissue Cryopreservation:**

Indications:
- Prepubertal boys before gonadotoxic therapy
- Adults with azoospermia (potential stem cells)
- Transgender individuals

Methods:
- Slow freezing
- Vitrification
- Whole tissue vs. cell suspensions

Future applications:
- SSC transplantation
- In vitro spermatogenesis
- Artificial testis

**In Vitro Spermatogenesis:**

---
Research Progress:

Mouse models:
  - Complete spermatogenesis achieved
  - Live offspring from in vitro sperm
  - Organ culture and cell culture approaches

Human challenges:
  - 74-day spermatogenic cycle
  - Complex hormonal requirements
  - Meiotic completion difficult
  - No human offspring yet

Approaches:
  - 3D culture systems
  - Organoid technology
  - Scaffold-based methods
  - Microfluidic devices
---

### Testicular Cancer Biology

**Molecular Classification:**

Seminoma:
- KIT mutations/amplification
- KRAS mutations (minority)
- Generally diploid/hyperdiploid
- Good prognosis

Non-seminomatous GCT:
- 12p amplification (isochromosome 12p)
- TP53 wild-type (sensitivity to chemotherapy)
- Variable ploidy
- Pluripotent potential

**Immune Microenvironment:**
- Seminomas: Rich lymphocytic infiltrate
- NSGCT: Variable immune response
- PD-L1 expression patterns
- Potential immunotherapy targets

### Testicular Dysgenesis Syndrome

**Hypothesis:**
- Shared etiology for male reproductive disorders
- Environmental endocrine disruptors
- Genetic susceptibility
- In utero programming

Components:
- Cryptorchidism
- Hypospadias
- Reduced sperm counts
- Testicular cancer

Histologic correlates:
- Abnormal Sertoli cell function
- Impaired germ cell development
- Focal tubular dysgenesis
- Microlithiasis

### Advanced Diagnostics

**Single-Cell Technologies:**

Applications:
- Map spermatogenic cell populations
- Identify rare stem cells
- Understand disease mechanisms
- Drug discovery

Findings:
- Previously unknown cell subtypes
- Transcriptional dynamics of meiosis
- Sertoli cell heterogeneity
- Disease-specific signatures

**Testicular Organoids:**

Development:
- 3D culture of testicular cells
- Recapitulate tissue architecture
- Support limited spermatogenesis

Applications:
- Toxicology testing
- Drug screening
- Disease modeling
- Regenerative medicine

### Clinical Translation

**Personalized Medicine:**

Approach:
- Genetic testing guides counseling
- Biopsy patterns predict outcomes
- Molecular markers identify stem cells
- Targeted sperm retrieval (micro-TESE)

Integration:
- Multidisciplinary fertility teams
- Genetic counseling
- Psychosocial support
- Long-term follow-up

**Emerging Therapies:**

Gene therapy:
- Spermatogonial gene correction
- Ex vivo approaches
- In vivo delivery challenges
- Ethical considerations

Hormonal optimization:
- FSH for hypospermatogenesis
- Combined FSH/hCG
- Clomiphene in selected cases
- Limited evidence base`,
      keyTerms: [
        { term: 'PLZF', definition: 'Transcription factor marking undifferentiated spermatogonia; essential for stem cell maintenance' },
        { term: 'isochromosome 12p', definition: 'Characteristic chromosomal abnormality in germ cell tumors' },
        { term: 'testicular dysgenesis syndrome', definition: 'Hypothesis linking cryptorchidism, hypospadias, low sperm counts, and testicular cancer' },
        { term: 'micro-TESE', definition: 'Microsurgical testicular sperm extraction using operating microscope' },
        { term: 'GDNF', definition: 'Glial cell line-derived neurotrophic factor; critical for spermatogonial stem cell self-renewal' },
      ],
      clinicalNotes: `Key Clinical Pearls:

1. Y chromosome microdeletion testing is essential in azoospermic men. AZFa and AZFb deletions have essentially no chance of sperm retrieval, while AZFc deletions may have 50-60% retrieval rates with micro-TESE.

2. GCNIS found on testicular biopsy indicates 50% risk of invasive cancer within 5 years. Contralateral testis has 5% risk of GCNIS.

3. Klinefelter syndrome patients may have focal spermatogenesis despite generally severe testicular failure. Sperm retrieval rates of 30-50% reported with micro-TESE.

4. Testicular tissue cryopreservation for prepubertal boys remains experimental but is offered at specialized centers before gonadotoxic therapy.

5. Single-cell RNA sequencing has revealed unexpected complexity in testicular cell populations and is transforming our understanding of spermatogenic failure.`,
    },
  },

  media: [
    {
      id: 'testis-architecture',
      type: 'histology',
      filename: 'testis-architecture.jpg',
      title: 'Testicular Tissue Architecture',
      description: 'Low-power view showing seminiferous tubules and interstitium',
    },
    {
      id: 'leydig-cells',
      type: 'histology',
      filename: 'leydig-cells.jpg',
      title: 'Leydig Cells',
      description: 'High-power view of interstitial Leydig cells with eosinophilic cytoplasm',
    },
  ],

  citations: [
    {
      id: 'testis-histology-text',
      type: 'textbook',
      title: 'Histology: A Text and Atlas',
      authors: ['Ross MH', 'Pawlina W'],
      source: 'Wolters Kluwer',
    },
    {
      id: 'male-infertility-genetics',
      type: 'article',
      title: 'Genetics of Male Infertility',
      authors: ['Krausz C', 'Riera-Escamilla A'],
      source: 'Nature Reviews Urology',
    },
  ],

  crossReferences: [
    { targetId: 'reproductive-testis-histology', targetType: 'structure', relationship: 'related', label: 'Testis Histology' },
    { targetId: 'reproductive-spermatogenesis', targetType: 'process', relationship: 'related', label: 'Spermatogenesis' },
    { targetId: 'reproductive-male-infertility', targetType: 'condition', relationship: 'related', label: 'Male Infertility' },
  ],

  tags: {
    systems: ['reproductive'],
    topics: ['histology', 'anatomy', 'male-reproduction'],
    keywords: ['testis', 'Leydig cells', 'Sertoli cells', 'seminiferous tubules', 'interstitium'],
    clinicalRelevance: 'high',
  },

  createdAt: '2026-01-28T00:00:00.000Z',
  updatedAt: '2026-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default testicularTissue;
