/**
 * Spermatogenesis - Reproductive System
 *
 * Comprehensive content on sperm production including the cellular
 * and molecular processes, hormonal regulation, and clinical aspects
 * of male gamete development.
 */

import { EducationalContent } from '../../types';

export const spermatogenesis: EducationalContent = {
  id: 'reproductive-spermatogenesis',
  type: 'process',
  name: 'Spermatogenesis',
  alternateNames: ['Sperm Production', 'Male Gametogenesis', 'Testicular Spermatogenesis'],

  levels: {
    1: {
      level: 1,
      summary: 'Spermatogenesis is the process of making sperm cells in the testicles. It takes about 74 days and produces millions of sperm each day.',
      explanation: `## What Is Spermatogenesis?

Spermatogenesis is how the male body makes sperm cells. This process happens inside the testicles, specifically in tiny tubes called seminiferous tubules.

### Where It Happens

**The Testicles:**
- Two oval organs in the scrotum
- Each testicle contains hundreds of tiny tubes (seminiferous tubules)
- These tubes are where sperm are made
- Total length of all tubes: about 800 feet per testicle

### The Process

**From Start to Finish:**
1. **Stem Cells:** Special cells called spermatogonia divide to start the process
2. **Growth:** Cells grow and develop over many stages
3. **Division:** Cells divide to reduce chromosome number by half
4. **Maturation:** Cells develop tails and become able to swim
5. **Release:** Mature sperm are released into the tubes

**Timeline:**
- The entire process takes about 74 days (over 2 months)
- Millions of sperm are produced every day
- About 100-200 million sperm per ejaculate

### Why It Is Important

- Creates cells that can fertilize an egg
- Ensures genetic diversity through special cell division
- Produces cells that can swim to reach the egg
- Makes millions of attempts to increase chances of fertilization

### Temperature Matters

- Sperm production works best at slightly cooler than body temperature
- This is why testicles are outside the body in the scrotum
- Tight underwear or hot baths can temporarily reduce sperm production

### Hormones Control the Process

- The brain sends signals to the testicles
- Testosterone is the main hormone for sperm production
- Other hormones help control the process`,
      keyTerms: [
        { term: 'spermatogenesis', definition: 'The process of making sperm cells in the testicles' },
        { term: 'testicles', definition: 'The male reproductive organs that make sperm and testosterone' },
        { term: 'sperm', definition: 'The male reproductive cell that can fertilize a female egg' },
        { term: 'seminiferous tubules', definition: 'The tiny tubes in the testicles where sperm are produced' },
        { term: 'testosterone', definition: 'The main male hormone that controls sperm production' },
      ],
      analogies: [
        'Spermatogenesis is like a factory assembly line that takes raw materials and transforms them over 74 days into finished products ready for delivery.',
        'The seminiferous tubules are like a complex network of conveyor belts where sperm are assembled piece by piece.',
        'Making sperm is like making copies of a document, but each copy is slightly different to create genetic diversity.',
      ],
      examples: [
        'A healthy male produces about 1,500 sperm every second.',
        'The testicles produce about 50,000 sperm per minute, every day.',
        'If all the seminiferous tubules were laid end to end, they would stretch over a quarter mile.',
      ],
      patientCounselingPoints: [
        'Sperm production takes over 2 months, so lifestyle changes take time to affect sperm quality.',
        'Keeping testicles cool helps sperm production - avoid hot tubs and tight clothing.',
        'Sperm count varies day to day, so one abnormal test doesn\'t mean there is a permanent problem.',
        'Most men continue making sperm throughout their lives, though quality decreases with age.',
      ],
    },
    2: {
      level: 2,
      summary: 'Spermatogenesis occurs in the seminiferous tubules through a complex process of mitosis and meiosis. Sertoli cells support developing sperm while Leydig cells produce testosterone. The process takes approximately 74 days and is regulated by FSH, LH, and testosterone.',
      explanation: `## The Process of Spermatogenesis

Spermatogenesis transforms diploid stem cells into haploid, motile spermatozoa through coordinated cell division and differentiation.

### Testicular Anatomy

**Seminiferous Tubules:**
- Highly coiled tubes (30-70 cm each)
- 250-300 lobules per testis
- Contain developing sperm at various stages
- Surrounded by myoid cells that contract to move sperm

**Blood-Testis Barrier:**
- Tight junctions between Sertoli cells
- Protects developing sperm from immune system
- Divides tubule into basal and adluminal compartments

### Cellular Components

**Sertoli Cells (Nurse Cells):**
- Large supportive cells
- Extend from basement membrane to lumen
- Provide nutrients to developing sperm
- Secrete fluid into tubule
- Phagocytose residual cytoplasm
- Tight junctions form blood-testis barrier

**Leydig Cells (Interstitial Cells):**
- Located between tubules
- Produce testosterone
- Stimulated by LH from pituitary
- Essential for spermatogenesis

**Germ Cells:**
- Develop from spermatogonia to mature sperm
- Arranged in specific layers within tubule
- Most advanced stages closest to lumen

### Stages of Spermatogenesis

**1. Spermatocytogenesis (Mitotic Phase):**
- Spermatogonia (stem cells) divide by mitosis
- Type A spermatogonia: maintain stem cell pool
- Type B spermatogonia: committed to differentiation
- Occurs at basement membrane

**2. Meiosis (Reduction Division):**
- Primary spermatocytes enter meiosis I
- Form secondary spermatocytes (23 chromosomes, 2C DNA)
- Secondary spermatocytes enter meiosis II
- Form spermatids (23 chromosomes, 1C DNA)
- Takes about 24 days

**3. Spermiogenesis (Maturation):**
- Round spermatids transform into spermatozoa
- No further cell division
- Major structural changes occur
- Takes about 24 days

### Timeline

| Stage | Duration | Location |
|-------|----------|----------|
| Spermatogonial proliferation | ~16 days | Basal compartment |
| Meiosis I | ~24 days | Adluminal compartment |
| Meiosis II | Brief | Adluminal compartment |
| Spermiogenesis | ~24 days | Adluminal compartment |
| Transport through epididymis | ~12 days | Epididymis |
| **Total** | **~74 days** | |

### Sperm Structure Development

During spermiogenesis:
- Nucleus condenses and elongates
- Acrosome forms from Golgi apparatus
- Flagellum develops from centrioles
- Mitochondria reorganize around midpiece
- Most cytoplasm shed as residual body
- Sertoli cells phagocytose residual cytoplasm`,
      keyTerms: [
        { term: 'spermatogonia', definition: 'Diploid stem cells in the testis that divide to produce sperm' },
        { term: 'meiosis', definition: 'Cell division that reduces chromosome number by half to create gametes' },
        { term: 'Sertoli cells', definition: 'Supportive cells in seminiferous tubules that nourish developing sperm' },
        { term: 'Leydig cells', definition: 'Cells between seminiferous tubules that produce testosterone' },
        { term: 'spermiogenesis', definition: 'Process where round spermatids mature into motile spermatozoa' },
      ],
      analogies: [
        'Sertoli cells are like teachers in a classroom, providing guidance and nutrition to many students (developing sperm) at different grade levels.',
        'Meiosis is like shuffling a deck of cards extensively to ensure each hand (sperm) is unique.',
        'The blood-testis barrier is like a security checkpoint that protects the developing sperm from the body\'s immune defenses.',
      ],
      examples: [
        'Primary spermatocytes are the largest germ cells and are the only ones undergoing the first meiotic division.',
        'Each Sertoli cell can support about 30-50 developing sperm cells simultaneously.',
        'The acrosome contains enzymes that help the sperm penetrate the egg during fertilization.',
      ],
      patientCounselingPoints: [
        'FSH and LH blood tests help evaluate if sperm production problems are hormonal.',
        'Testosterone is essential for sperm production, but giving testosterone supplements can actually stop sperm production.',
        'Because sperm take 74 days to develop, a semen analysis reflects conditions over the past 2-3 months.',
        'Azoospermia (no sperm) can be due to production problems or blockage - different treatments apply.',
      ],
    },
    3: {
      level: 3,
      summary: 'Spermatogenesis involves complex hormonal regulation through the hypothalamic-pituitary-testicular axis. Intratesticular testosterone is crucial, and meiotic divisions create genetic diversity through crossing over and independent assortment.',
      explanation: `## Hormonal Regulation of Spermatogenesis

### Hypothalamic-Pituitary-Testicular Axis

**Hypothalamus:**
- Produces GnRH (gonadotropin-releasing hormone)
- Released in pulsatile fashion
- Stimulates anterior pituitary

**Anterior Pituitary:**
- **FSH (follicle-stimulating hormone):**
  - Targets Sertoli cells
  - Stimulates spermatogenesis
  - Induces inhibin production
  - Regulates Sertoli cell function

- **LH (luteinizing hormone):**
  - Targets Leydig cells
  - Stimulates testosterone production
  - Testosterone feeds back to hypothalamus/pituitary

**Testes:**
- Leydig cells: Testosterone production
- Sertoli cells: Support spermatogenesis (FSH-dependent)
- Peritubular myoid cells: Contractility

### Negative Feedback Mechanisms

---
Hormonal Feedback in Male Reproduction:

Testosterone negative feedback:
  - High testosterone -> decreased GnRH pulse frequency
  - Decreased LH secretion
  - Decreased testosterone production
  - Restores balance

Inhibin negative feedback:
  - Produced by Sertoli cells
  - Selectively inhibits FSH
  - Not affected by testosterone
  - Regulates spermatogenic efficiency
---

### Testosterone Actions in Spermatogenesis

**Systemic Effects:**
- Secondary sexual characteristics
- Muscle mass and strength
- Bone density
- Libido and sexual function

**Intratesticular Effects (Critical for Sperm):**
- Concentration 50-100x higher than blood
- Required for spermatogenesis
- Meiosis maintenance
- Sertoli cell function
- Blood-testis barrier integrity

### Meiosis Details

**Meiosis I (Reductional Division):**
- Synapsis: Homologous chromosomes pair
- Crossing over: Exchange of genetic material
- Independent assortment: Random chromosome segregation
- Produces two haploid secondary spermatocytes
- Each with 23 chromosomes (2 chromatids each)

**Meiosis II (Equational Division):**
- Similar to mitosis
- Sister chromatids separate
- Produces four haploid spermatids
- Each with 23 chromosomes (1 chromatid each)

**Genetic Recombination:**
- Crossing over occurs at chiasmata
- Creates new allele combinations
- Independent assortment: 2^23 possible combinations
- Ensures genetic diversity

### Spermiogenesis Ultrastructure

**Nuclear Changes:**
- Histones replaced by protamines
- DNA becomes highly compacted
- Nucleus elongates and flattens
- Transcription ceases

**Acrosome Formation:**
- Derived from Golgi apparatus
- Contains hydrolytic enzymes
  - Hyaluronidase
  - Acrosin
  - Neuraminidase
- Covers anterior 2/3 of nucleus

**Flagellum Development:**
- 9+2 microtubule arrangement
- Midpiece: mitochondria spiral (70-80)
- Principal piece: fibrous sheath
- End piece: just axoneme

**Cytoplasmic Shedding:**
- Excess cytoplasm discarded
- Phagocytosed by Sertoli cells
- Essential for motility

### Sertoli Cell Functions

---
Sertoli Cell Support Functions:

Physical support:
  - Extend from basement membrane to lumen
  - Surround all germ cell stages
  - Form blood-testis barrier

Metabolic support:
  - Provide lactate (germ cell preferred fuel)
  - Amino acid transport
  - Transferrin (iron transport)

Structural support:
  - Cytoskeletal elements
  - Adhesion molecules
  - Junctional complexes

Phagocytic function:
  - Remove residual cytoplasm
  - Remove degenerating germ cells
  - Maintain tubular environment

Paracrine signaling:
  - Androgen-binding protein (ABP)
  - Inhibin
  - Growth factors
---

### Epididymal Maturation

**Transport:**
- Cilia and fluid flow move sperm
- Testicular sperm non-motile
- Non-fertilizing capacity

**Epididymal Changes:**
- Membrane protein changes
- Acquire forward motility
- Fertilizing capacity develops
- Concentration increases (fluid reabsorption)
- Surface antigen changes
- 12-day transit time`,
      keyTerms: [
        { term: 'GnRH', definition: 'Gonadotropin-releasing hormone; hypothalamic hormone that regulates pituitary gonadotropins' },
        { term: 'inhibin', definition: 'Hormone from Sertoli cells that selectively inhibits FSH secretion' },
        { term: 'crossing over', definition: 'Exchange of genetic material between homologous chromosomes during meiosis' },
        { term: 'protamines', definition: 'Small arginine-rich proteins that replace histones to compact sperm DNA' },
        { term: 'androgen-binding protein', definition: 'Protein secreted by Sertoli cells that maintains high testosterone levels in tubules' },
      ],
      analogies: [
        'The HPT axis is like a thermostat system - when testosterone is low, the hypothalamus turns up the heat (LH), and when it is high, it turns it down.',
        'Crossing over is like exchanging cards between two hands of cards before dealing, creating new combinations.',
        'The epididymis is like a finishing school where sperm learn to swim properly and gain fertilizing ability.',
      ],
      examples: [
        'Intratesticular testosterone concentration is about 500-1000 ng/dL compared to serum levels of 300-1000 ng/dL.',
        'Approximately 400-600 million spermatogonia are present in each testis at puberty.',
        'Only about 1-5% of sperm formed are morphologically perfect; the rest have some minor abnormalities.',
      ],
      clinicalNotes: 'FSH levels are inversely proportional to spermatogenic activity. Elevated FSH suggests impaired spermatogenesis (elevated because inhibin feedback is reduced). Normal FSH with azoospermia suggests obstruction or hypogonadotropic hypogonadism.',
    },
    4: {
      level: 4,
      summary: 'Advanced spermatogenesis encompasses molecular mechanisms of germ cell development, regulation of the spermatogenic cycle, hormonal disorders affecting sperm production, and the physiology of sperm motility and capacitation.',
      explanation: `## Molecular Regulation of Spermatogenesis

### Spermatogenic Cycle and Wave

**Spermatogenic Cycle:**
- Time for one spermatogonium to produce sperm at a given point
- About 16 days in humans
- Sequential appearance of germ cell associations
- 6 stages (I-VI) recognized in humans

**Spermatogenic Wave:**
- Spatial arrangement along tubule length
- Sequential stages visible along tubule
- Ensures continuous sperm production
- Different tubules at different stages

### Molecular Control

**Retinoic Acid Signaling:**
- Vitamin A metabolite essential for spermatogenesis
- Triggers spermatogonial differentiation
- Regulates timing of meiotic entry
- Sertoli cell-derived

**Stem Cell Factor (SCF)/c-Kit:**
- SCF produced by Sertoli cells
- c-Kit receptor on spermatogonia
- Critical for germ cell survival
- Mutations cause infertility

**Retinoid Receptors:**
- RAR and RXR families
- Stage-specific expression
- Control germ cell development
- Target for male contraception research

### Cell Junctions in the Tubule

**Tight Junctions:**
- Between adjacent Sertoli cells
- Form blood-testis barrier
- Preclude paracellular transport
- Divide tubule into compartments

**Gap Junctions:**
- Allow intercellular communication
- Nutrient and ion exchange
- Electrical coupling
- Between Sertoli cells and germ cells

**Desmosome-like Junctions:**
- Anchor germ cells to Sertoli cells
- Allow movement during development
- Cyclic formation and breakdown
- Essential for germ cell progression

### Hormonal Pathologies

**Hypogonadotropic Hypogonadism:**
- Low GnRH or gonadotropins
- Congenital (Kallmann syndrome)
- Acquired (pituitary tumors, trauma)
- Treatment: hCG + FSH or pulsatile GnRH

**Hypergonadotropic Hypogonadism:**
- Primary testicular failure
- Elevated FSH and LH
- Low testosterone
- Causes: Klinefelter syndrome, chemotherapy, orchitis

**Androgen Insensitivity:**
- Normal testosterone production
- Defective androgen receptor
- Variable phenotype (complete to partial)
- Elevated testosterone and LH

### Sperm Motility Physiology

**Axonemal Structure:**
- 9 peripheral microtubule doublets
- 2 central microtubule singlets
- Dynein arms generate force
- Nexin links maintain structure
- Radial spokes regulate movement

**Mechanism of Movement:**

---
Sperm Flagellar Motion:

Dynein ATPase activity:
  - Hydrolyzes ATP
  - Dynein arms walk along adjacent doublet
  - Sliding force generated
  - Sliding converted to bending by nexin/radial spokes

Wave propagation:
  - Bend initiated at neck
  - Travels along flagellum
  - Symmetric (in fluids) or asymmetric (on surfaces)
  - 8-10 beats per second

Hyperactivation:
  - High-amplitude, asymmetric beats
  - Triggered by capacitation
  - Necessary for penetration
  - Ca2+-dependent
---

**Factors Affecting Motility:**
- Temperature (optimal 37C)
- pH (optimal 7.2-7.8)
- Osmolality
- Energy substrates (fructose, glucose)
- Zinc concentration
- Oxidative stress

### Capacitation and Acrosome Reaction

**Capacitation:**
- Process in female reproductive tract
- Removes cholesterol from membrane
- Increases membrane fluidity
- Enables hyperactivated motility
- Required for acrosome reaction
- Takes 1-10 hours

**Acrosome Reaction:**
- Exocytosis of acrosomal enzymes
- Triggered by zona pellucida (ZP3)
- Calcium influx essential
- Releases enzymes for penetration
- Must occur before fertilization

### Genetic Regulation

**Y Chromosome Genes:**
- SRY: Sex determination
- AZF (azoospermia factor) regions:
  - AZFa: Spermatogonia maintenance
  - AZFb: Meiosis completion
  - AZFc: Sperm production efficiency
- Deletions cause non-obstructive azoospermia

**Autosomal Genes:**
- DAZL: Germ cell development
- BOULE: Meiosis entry
- SYCP3: Synaptonemal complex
- Many others involved

### Heat Stress and Spermatogenesis

**Temperature Sensitivity:**
- Optimal 2-4C below core body temperature
- Heat affects all germ cell stages
- Most sensitive: spermatocytes
- Recovery takes 2-3 spermatogenic cycles

**Mechanisms:**
- Apoptosis induction
- DNA damage
- Oxidative stress
- Impaired Sertoli cell function

**Clinical Causes of Heat Exposure:**
- Cryptorchidism
- Varicocele
- Fever
- Occupational heat exposure
- Laptop use on lap`,
      keyTerms: [
        { term: 'spermatogenic cycle', definition: 'The time required for one spermatogonium to complete development into sperm at a specific point in the tubule' },
        { term: 'capacitation', definition: 'Physiological changes sperm undergo in the female tract that enable fertilization' },
        { term: 'acrosome reaction', definition: 'Release of enzymes from the sperm acrosome that allow penetration of the egg investments' },
        { term: 'AZF region', definition: 'Azoospermia factor regions on Y chromosome; deletions cause spermatogenic failure' },
        { term: 'dynein', definition: 'Motor protein that generates the sliding force between microtubules in the sperm flagellum' },
      ],
      analogies: [
        'The spermatogenic wave is like a stadium wave that moves continuously around the seminiferous tubules, ensuring constant sperm output.',
        'Sperm capacitation is like removing the safety from a gun - it prepares the sperm for action but must happen at the right time.',
        'The blood-testis barrier is like a fortress wall that protects the developing sperm from immune attack.',
      ],
      examples: [
        'Varicocele (dilated scrotal veins) raises testicular temperature and is the most common correctable cause of male infertility.',
        'Y chromosome microdeletions in the AZFc region are found in about 10-15% of men with non-obstructive azoospermia.',
        'Sperm can survive in the female reproductive tract for up to 5 days, but can only fertilize an egg for about 1-2 days after ovulation.',
      ],
      clinicalNotes: 'Elevated FSH with small testes strongly suggests primary testicular failure (hypergonadotropic hypogonadism). In contrast, low or inappropriately normal FSH with azoospermia suggests hypogonadotropic hypogonadism or obstruction. Testicular biopsy is rarely needed with modern genetic testing.',
    },
    5: {
      level: 5,
      summary: 'Expert-level spermatogenesis includes stem cell biology, advances in fertility preservation, genetic diagnosis of male infertility, molecular mechanisms of contraception, and emerging therapies for spermatogenic failure.',
      explanation: `## Advanced Spermatogenic Biology

### Spermatogonial Stem Cells

**Stem Cell Populations:**

---
Spermatogonial Hierarchy:

Undifferentiated spermatogonia:
  - Asingle: True stem cells (reserve)
  - Apaired: Committed to differentiation
  - Aaligned: Chains of 4-16 cells
  - Self-renewal capacity
  - Pluripotency markers

Differentiating spermatogonia:
  - A1-A4 intermediate stages
  - B spermatogonia
  - Committed to meiosis
  - Transit amplifying population
---

**Stem Cell Niche:**
- Microenvironment supporting stem cells
- Includes Sertoli cells, peritubular myoid cells, Leydig cells
- Vascular and neural components
- BMP and GDNF signaling critical
- Regulates self-renewal vs. differentiation

**Spermatogonial Stem Cell Transplantation:**
- Experimental fertility preservation
- SSCs cryopreserved, then reintroduced
- Potential for prepubertal cancer patients
- Successful in animal models
- Clinical trials ongoing

### Genetics of Male Infertility

**Chromosomal Abnormalities:**

Klinefelter syndrome (47,XXY):
- Most common sex chromosome abnormality
- Small, firm testes
- Hypergonadotropic hypogonadism
- Azoospermia in 90% (TESE may find sperm)
- 3-4% of infertile men

XX male syndrome:
- SRY translocation to X
- Phenotypically male
- Azoospermic

**Y Chromosome Microdeletions:**
- AZFa: Sertoli cell-only syndrome
- AZFb: Maturation arrest
- AZFc: Variable phenotype (severe oligozoospermia to azoospermia)
- Inheritance: All sons will carry deletion

**Single Gene Disorders:**
- CFTR mutations (CBAVD)
- Kal1 (Kallmann syndrome)
- NR5A1 (SF1, adrenal/gonadal defects)
- DMRT1 (testicular dysgenesis)

### Fertility Preservation

**Indications:**
- Cancer patients (chemotherapy, radiation)
- Transgender individuals (before transition)
- High-risk occupations
- Sickle cell disease (before transplant)

**Methods:**

| Method | Indication | Success Rate |
|--------|------------|--------------|
| Sperm cryopreservation | Postpubertal | High |
| Testicular tissue banking | Prepubertal | Experimental |
| SSC transplantation | Post-treatment | Experimental |
| In vitro spermatogenesis | Research only | Preclinical |

**Cryopreservation:**
- Slow freezing vs. vitrification
- Cryoprotectants (glycerol, DMSO)
- Storage in liquid nitrogen
- Long-term viability demonstrated

### Assisted Reproductive Technology

**Sperm Retrieval Techniques:**

---
Surgical Sperm Retrieval:

TESA: Testicular sperm aspiration
  - Percutaneous needle aspiration
  - Office procedure
  - For obstructive azoospermia

TESE: Testicular sperm extraction
  - Open surgical biopsy
  - Multiple samples
  - For non-obstructive azoospermia

Micro-TESE:
  - Microscopic approach
  - Identifies tubules with sperm
  - Higher retrieval rates
  - Less tissue damage
---

**ICSI (Intracytoplasmic Sperm Injection):**
- Single sperm injected into egg
- Bypasses many natural barriers
- Enables fertilization with few sperm
- Genetic counseling important
- Can use sperm from ejaculate or testis

### Molecular Contraception Research

**Targets:**
- Hormonal (GnRH, FSH, testosterone)
- Sperm motility (catSper channels)
- Sperm-egg interaction (IZUMO1, Juno)
- Epididymal function
- Sertoli cell factors

**Approaches:**
- Reversible inhibition of sperm under guidance (RISUG)
- Hormonal male contraception
- Immunocontraception
- Gene-specific targeting

### Oxidative Stress and Sperm

**Sources:**
- Leukocytes in semen
- Abnormal sperm metabolism
- Varicocele
- Environmental toxins
- Infection/inflammation

**Consequences:**
- DNA fragmentation
- Lipid peroxidation
- Motility impairment
- Membrane damage

**Antioxidant Therapy:**
- Vitamin C, E
- Coenzyme Q10
- Carnitine
- Mixed results in clinical trials
- May help selected patients

### Epigenetics and Sperm

**Sperm Epigenome:**
- DNA methylation patterns
- Histone retention (5-15% in humans)
- Non-coding RNAs
- Affected by environment, age

**Paternal Effects:**
- Advanced paternal age: increased mutations
- Obesity: altered sperm miRNA
- Diet: epigenetic marks
- Transgenerational inheritance possible

### Single-Cell Analysis

**Applications:**
- Understand spermatogenic failure
- Identify stem cells
- Trace developmental lineages
- Biomarker discovery

**Techniques:**
- Single-cell RNA sequencing
- ATAC-seq (chromatin accessibility)
- Spatial transcriptomics
- Protein analysis

### Clinical Approaches to Azoospermia

**Diagnostic Algorithm:**
1. History and physical exam
2. Semen analysis (confirm azoospermia)
3. Hormone testing (FSH, LH, T)
4. Genetic testing (karyotype, Y microdeletion)
5. Imaging (scrotal ultrasound)
6. Testicular biopsy (if indicated)

**Obstructive vs. Non-obstructive:**

| Feature | Obstructive | Non-obstructive |
|---------|-------------|-----------------|
| Testis size | Normal | Often small |
| FSH | Normal | Elevated |
| Ejaculate volume | Low/normal | Normal |
| Testosterone | Normal | Low/normal |
| Genetic testing | Usually normal | May show abnormalities |
| Treatment | Surgical/ICSI | TESE + ICSI or donor |

**Emerging Therapies:**
- Hormonal stimulation (hypogonadotropic)
- Stem cell approaches
- In vitro spermatogenesis
- Gene therapy (future)`,
      keyTerms: [
        { term: 'micro-TESE', definition: 'Microsurgical testicular sperm extraction; uses microscope to identify tubules containing sperm' },
        { term: 'spermatogonial stem cell', definition: 'Self-renewing cells that can differentiate into sperm; maintain lifelong spermatogenesis' },
        { term: 'RISUG', definition: 'Reversible inhibition of sperm under guidance; experimental male contraceptive' },
        { term: 'sperm DNA fragmentation', definition: 'Damage to sperm DNA; associated with infertility and poor reproductive outcomes' },
        { term: 'catSper', definition: 'Calcium channel in sperm flagellum essential for hyperactivation and fertility' },
      ],
      analogies: [
        'Spermatogonial stem cells are like perennial plants that keep producing new flowers (sperm) throughout the season (life).',
        'ICSI is like hand-delivering a letter directly to the recipient instead of hoping it finds its way through the mail system.',
        'The epigenetic information in sperm is like software code that can be modified by the father\'s lifestyle and passed to offspring.',
      ],
      examples: [
        'Micro-TESE finds sperm in about 50-60% of men with non-obstructive azoospermia, compared to 30-40% with conventional TESE.',
        'Men over 40 have increased risk of offspring with autism, schizophrenia, and genetic disorders due to accumulated sperm mutations.',
        'Sperm DNA fragmentation >30% is associated with increased miscarriage rates even with IVF/ICSI.',
      ],
      clinicalNotes: `Clinical Implementation Pearls:

1. **Genetic Counseling:**
   - All men with non-obstructive azoospermia should have karyotype and Y microdeletion testing
   - Men with CBAVD need CFTR testing
   - Sons of men with Y deletions will inherit the deletion and be infertile

2. **Micro-TESE Timing:**
   - Coordinate with IVF cycle
   - Fresh sperm preferred over frozen
   - Frozen-thawed testicular sperm have lower fertilization rates

3. **DNA Fragmentation Testing:**
   - Consider in recurrent pregnancy loss, unexplained infertility, failed IVF
   - High fragmentation may indicate varicocele, infection, or lifestyle factors
   - Antioxidants may help selected patients

4. **Fertility Preservation:**
   - Sperm banking should be offered to all prepubertal boys facing gonadotoxic therapy
   - Experimental SSC banking may be option when ejaculated sperm not available`,
    },
  },

  media: [
    {
      id: 'spermatogenesis-stages',
      type: 'diagram',
      filename: 'spermatogenesis-stages.svg',
      title: 'Stages of Spermatogenesis',
      description: 'Progression from spermatogonia through meiosis to mature spermatozoa',
    },
    {
      id: 'seminiferous-tubule',
      type: 'histology',
      filename: 'seminiferous-tubule.jpg',
      title: 'Seminiferous Tubule Cross-Section',
      description: 'Histologic view showing Sertoli cells and germ cells at various stages',
    },
  ],

  citations: [
    {
      id: 'campbell-physiology',
      type: 'textbook',
      title: 'Physiology of Reproduction',
      authors: ['Knobil E', 'Neill JD'],
      source: 'Academic Press',
      chapter: 'Spermatogenesis',
    },
    {
      id: 'who-semen-manual',
      type: 'article',
      title: 'WHO Laboratory Manual for the Examination and Processing of Human Semen',
      authors: ['World Health Organization'],
      source: 'WHO',
    },
  ],

  crossReferences: [
    { targetId: 'reproductive-fertility-evaluation', targetType: 'concept', relationship: 'related', label: 'Fertility Evaluation' },
    { targetId: 'reproductive-testis-histology', targetType: 'structure', relationship: 'related', label: 'Testis Histology' },
    { targetId: 'reproductive-male-infertility', targetType: 'condition', relationship: 'related', label: 'Male Infertility' },
  ],

  tags: {
    systems: ['reproductive'],
    topics: ['physiology', 'male-reproduction', 'endocrinology'],
    keywords: ['sperm', 'testosterone', 'Sertoli cells', 'meiosis', 'fertility', 'spermatogenesis'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['obstetrics-gynecology', 'urology'],
    },
  },

  createdAt: '2026-01-28T00:00:00.000Z',
  updatedAt: '2026-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default spermatogenesis;
