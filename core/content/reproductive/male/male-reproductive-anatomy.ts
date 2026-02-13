import { EducationalContent } from '../../types';

/**
 * Male Reproductive Anatomy - Comprehensive Overview
 *
 * Covers the complete male reproductive system including:
 * - Testes (sperm and testosterone production)
 * - Epididymis (sperm maturation and storage)
 * - Vas deferens (sperm transport)
 * - Accessory glands: prostate, seminal vesicles, bulbourethral glands
 * - Penis anatomy (erectile function)
 * - Scrotum (temperature regulation)
 *
 * Includes Spanish translations, analogies, and clinical correlations
 */

export const maleReproductiveAnatomy: EducationalContent = {
  id: 'male-reproductive-anatomy-overview',
  type: 'system',
  name: 'Male Reproductive System Anatomy',
  alternateNames: [
    'Male Reproductive Anatomy',
    'Male Genital System',
    'Sistema reproductor masculino',
  ],

  levels: {
    1: {
      level: 1,
      summary:
        'The male reproductive system makes sperm, stores it, and delivers it during sex.',
      explanation: `The male reproductive system has several parts working together, like a factory and delivery system combined.

**The Main Parts:**

**1. Testes (Testicles)**
- Two egg-shaped organs in the scrotum (the sac of skin behind the penis)
- Make sperm (tiny cells that can create a baby with a female egg)
- Make testosterone (the hormone that causes male features like deep voice and facial hair)
- Need to be cooler than body temperature to make healthy sperm

**2. Epididymis**
- Coiled tube sitting on top of each testis
- Where sperm "grow up" and learn to swim
- Stores sperm until they're needed

**3. Vas Deferens**
- Long tube that carries sperm from the epididymis up and around the bladder
- Like a highway for sperm to travel through

**4. Prostate Gland**
- Walnut-sized gland below the bladder
- Makes fluid that helps sperm move and survive
- The tube that carries pee (urethra) passes through it

**5. Seminal Vesicles**
- Two small pouches behind the bladder
- Make a sugary fluid that gives sperm energy

**6. Penis**
- External organ used for urination and sex
- Contains spongy tissue that fills with blood during an erection
- Delivers sperm during sex

**Spanish Translation (Traducción al español):**
- Testes = Testículos
- Sperm = Espermatozoides
- Prostate = Próstata
- Penis = Pene`,
      keyTerms: [
        {
          term: 'Sperm',
          definition: 'Tiny cells made by males that can join with a female egg to make a baby',
        },
        {
          term: 'Espermatozoides',
          definition: 'Células pequeñas producidas por hombres que pueden unirse con un óvulo femenino para crear un bebé',
        },
        {
          term: 'Testosterone',
          definition: 'Male hormone that causes changes during puberty like deeper voice and muscle growth',
        },
        {
          term: 'Testosterona',
          definition: 'Hormona masculina que causa cambios durante la pubertad como voz más profunda y crecimiento muscular',
        },
        {
          term: 'Scrotum',
          definition: 'The pouch of skin that holds the testes outside the body to keep them cool',
        },
        {
          term: 'Escroto',
          definition: 'La bolsa de piel que sostiene los testículos fuera del cuerpo para mantenerlos frescos',
        },
      ],
      analogies: [
        'The male reproductive system is like a factory (testes make sperm), a warehouse (epididymis stores them), and a delivery truck (vas deferens and penis transport them)',
        'The prostate and seminal vesicles are like pit crew members that add special fuel and fluids to help the sperm on their journey',
      ],
      patientCounselingPoints: [
        'The testes hang outside the body because sperm need to be cooler than body temperature',
        'It takes about 2-3 months to make new sperm from start to finish',
        'Regular self-exams can help detect testicular lumps early',
      ],
    },

    2: {
      level: 2,
      summary:
        'The male reproductive system consists of the testes, ductal system, accessory glands, and external genitalia working together for spermatogenesis and sperm delivery.',
      explanation: `The male reproductive system has internal and external components coordinated by hormones.

**Internal Structures:**

**Testes (Testicles)**
- Paired oval organs (4-5 cm long) in the scrotum
- Contain seminiferous tubules where sperm are produced
- Leydig cells between tubules produce testosterone
- Descended from abdomen during fetal development
- Temperature 2-3°C below body temperature for optimal sperm production

**Epididymis**
- Comma-shaped structure on posterior testis
- 6-meter long coiled tube (compressed into 4 cm)
- Three parts: head (caput), body (corpus), tail (cauda)
- Sperm mature here for 2-4 weeks, gaining motility
- Storage site for mature sperm

**Vas Deferens (Ductus Deferens)**
- Muscular tube (~45 cm long)
- Travels from epididymis through inguinal canal
- Part of spermatic cord with blood vessels and nerves
- Thick smooth muscle wall propels sperm via peristalsis
- Ends by joining with seminal vesicle duct to form ejaculatory duct

**Accessory Glands:**

1. **Seminal Vesicles**
   - Paired glands posterior to bladder
   - Produce 60-70% of semen volume
   - Secretion contains fructose (sperm energy), prostaglandins, proteins

2. **Prostate Gland**
   - Single gland surrounding urethra below bladder
   - Produces 20-30% of semen volume
   - Alkaline fluid neutralizes vaginal acidity
   - Contains enzymes that liquefy semen after ejaculation

3. **Bulbourethral Glands (Cowper's Glands)**
   - Paired pea-sized glands inferior to prostate
   - Produce pre-ejaculate (clear fluid before ejaculation)
   - Lubricates urethra and neutralizes residual urine acidity

**External Structures:**

**Penis**
- Erectile organ for copulation and urination
- Three columns of erectile tissue: 2 corpora cavernosa (dorsal), 1 corpus spongiosum (ventral, contains urethra)
- Glans penis at tip, covered by foreskin (prepuce) unless circumcised
- Erection occurs when erectile tissue fills with blood

**Scrotum**
- Skin and muscle sac holding testes
- Dartos muscle and cremaster muscle regulate temperature
- Contracts in cold, relaxes in warmth

**Spanish Terms (Términos en español):**
- Vas deferens = Conducto deferente
- Seminal vesicles = Vesículas seminales
- Prostate = Próstata
- Epididymis = Epidídimo
- Semen = Semen`,
      keyTerms: [
        {
          term: 'Seminiferous tubules',
          definition: 'Coiled tubes within testes where sperm are produced',
          pronunciation: 'sem-in-IF-er-us',
        },
        {
          term: 'Leydig cells',
          definition: 'Cells between seminiferous tubules that produce testosterone',
          pronunciation: 'LY-dig',
        },
        {
          term: 'Spermatic cord',
          definition: 'Bundle containing vas deferens, blood vessels, nerves, and lymphatics',
        },
        {
          term: 'Ejaculatory duct',
          definition: 'Short duct formed by union of vas deferens and seminal vesicle duct',
        },
        {
          term: 'Corpus cavernosum',
          definition: 'Paired columns of erectile tissue in the penis that fill with blood during erection',
          pronunciation: 'KOR-pus kav-er-NO-sum',
        },
        {
          term: 'Glans',
          definition: 'The rounded head/tip of the penis',
        },
      ],
      analogies: [
        'The epididymis is like a training camp where sperm learn to swim properly and mature',
        'The vas deferens is like a highway with muscular walls that push sperm along like cars',
        'The accessory glands are like a pit stop where special fluids are added to help sperm survive and swim',
        'The penis erectile tissue is like a sponge that fills with blood to become firm',
      ],
      examples: [
        'During a vasectomy, the vas deferens is cut to prevent sperm from reaching semen',
        'Undescended testes (cryptorchidism) can reduce fertility because the higher temperature damages sperm production',
        'Mumps infection in adult males can cause orchitis (testicular inflammation) and affect fertility',
      ],
    },

    3: {
      level: 3,
      summary:
        'The male reproductive system integrates spermatogenic, endocrine, and mechanical functions through coordinated anatomical structures under hypothalamic-pituitary-gonadal axis control.',
      explanation: `The male reproductive system represents a complex integration of gametogenesis, steroidogenesis, and fluid transport mechanisms.

**Testicular Anatomy and Function:**

The testis is enclosed by three layers:
- **Tunica vaginalis**: Serous membrane (derived from peritoneum during descent)
- **Tunica albuginea**: Dense fibrous capsule that extends inward as septa
- **Tunica vasculosa**: Vascular layer supplying parenchyma

Parenchyma contains:
- **Seminiferous tubules** (400-600 per testis): Site of spermatogenesis, lined with Sertoli cells and germ cells at various developmental stages
- **Interstitium**: Contains Leydig cells (testosterone production), blood vessels, lymphatics, nerves
- **Rete testis**: Network in mediastinum testis where seminiferous tubules converge
- **Efferent ductules**: 10-15 ducts connecting rete testis to epididymis

**Sertoli Cell Functions:**
- Form blood-testis barrier (tight junctions)
- Provide structural support and nutrition to developing sperm
- Phagocytose defective germ cells and residual bodies
- Secrete androgen-binding protein (maintains high local testosterone)
- Produce inhibin B (FSH feedback), anti-Müllerian hormone

**Epididymal Function:**
- Sperm transit time: 2-12 days
- Sequential protein modifications of sperm surface
- Absorption of testicular fluid
- Secretion of glycoproteins, sialic acid, carnitine
- Progressive acquisition of motility and fertilization capacity

**Vas Deferens Structure:**
- Three-layered smooth muscle (inner longitudinal, middle circular, outer longitudinal)
- Pseudostratified columnar epithelium with stereocilia
- Ampulla region (terminal dilation) with more glandular epithelium
- Peristaltic contractions during ejaculation

**Accessory Gland Secretions:**

**Seminal Vesicles:**
- Produce fructose (energy substrate for sperm)
- Prostaglandins (promote uterine contractions, may aid sperm transport)
- Fibrinogen (contributes to semen coagulation)
- Semenogelin (forms gel matrix)

**Prostate:**
- Four zones: peripheral (70%), central (25%), transition (5%), anterior fibromuscular
- Secretes: citric acid, zinc, acid phosphatase, PSA (prostate-specific antigen)
- PSA liquefies coagulated semen 15-30 minutes post-ejaculation
- Alkaline pH (6.5-6.9) protects sperm from vaginal acidity

**Penile Erectile Mechanism:**
- Parasympathetic stimulation (S2-S4) releases nitric oxide (NO)
- NO activates guanylate cyclase → increased cGMP
- cGMP causes smooth muscle relaxation in arterioles and sinusoids
- Arterial inflow increases, venous outflow restricted → tumescence
- Sympathetic stimulation causes detumescence

**Vascular Supply:**
- **Testicular artery**: From abdominal aorta (L2 level)
- **Pampiniform plexus**: Venous network providing countercurrent heat exchange
- **Pudendal artery**: Supplies penis and perineum

**Spanish Terms:**
- Blood-testis barrier = Barrera hematotesticular
- Spermatogenesis = Espermatogénesis
- Erectile dysfunction = Disfunción eréctil`,
      keyTerms: [
        {
          term: 'Blood-testis barrier',
          definition:
            'Tight junctions between Sertoli cells creating immunologically privileged compartment',
        },
        {
          term: 'Androgen-binding protein',
          definition: 'Protein that concentrates testosterone in seminiferous tubules',
        },
        {
          term: 'Rete testis',
          definition: 'Network of channels collecting sperm from seminiferous tubules',
          pronunciation: 'REE-tee TES-tis',
        },
        {
          term: 'Pampiniform plexus',
          definition:
            'Venous network providing countercurrent heat exchange to cool arterial blood',
          pronunciation: 'pam-PIN-ih-form',
        },
        {
          term: 'PSA',
          definition: 'Prostate-specific antigen; serine protease that liquefies semen',
        },
        {
          term: 'Nitric oxide',
          definition: 'Vasodilator neurotransmitter mediating penile erection',
        },
      ],
      examples: [
        'Varicocele (dilated pampiniform plexus) impairs testicular cooling and may cause subfertility',
        'Benign prostatic hyperplasia (BPH) typically affects the transition zone, causing urinary obstruction',
        'Phosphodiesterase-5 (PDE5) inhibitors (e.g., sildenafil) prevent cGMP breakdown, prolonging erection',
      ],
    },

    4: {
      level: 4,
      summary:
        'The male reproductive system integrates molecular signaling cascades, paracrine regulation, and neurovascular mechanisms to coordinate spermatogenesis, steroidogenesis, and erectile function.',
      explanation: `Advanced understanding of male reproductive anatomy requires integration of cellular, molecular, and clinical perspectives.

**Testicular Microanatomy and Molecular Regulation:**

**Spermatogenesis Cycle:**
- Duration: ~74 days in humans
- Spermatogonia (stem cells) → primary spermatocytes (meiosis I) → secondary spermatocytes (meiosis II) → spermatids → spermatozoa
- Sertoli cells form basal (immunocompetent) and adluminal (immunoprivileged) compartments
- **Stage-specific gene expression**: DAZL, VASA in germ cells; SOX9, WT1, SF1 in Sertoli cells

**Leydig Cell Steroidogenesis:**
- LH binds GPCR → cAMP/PKA pathway
- **StAR protein** transports cholesterol into mitochondria (rate-limiting step)
- Enzymatic cascade: P450scc (cholesterol → pregnenolone) → 17α-hydroxylase → 17,20-lyase → 17β-HSD → testosterone
- Intratesticular testosterone 50-100× higher than serum
- ~5% converted to dihydrotestosterone (DHT) by 5α-reductase
- Aromatase in Sertoli/Leydig cells converts some testosterone to estradiol

**Blood-Testis Barrier Molecular Components:**
- Tight junctions: occludin, claudins, ZO-1, JAM-A
- Adherens junctions: N-cadherin, catenins
- Gap junctions: connexin 43
- Protects post-meiotic germ cells from autoimmune attack
- Limits drug penetration (chemotherapy resistance of some testicular cancers)

**Epididymal Sperm Maturation:**
- Lumicrine signaling: testicular factors in tubular fluid regulate epididymal function
- Surface protein modifications: acquisition of fertilization-associated antigens
- Membrane remodeling: cholesterol redistribution, lipid raft formation
- Acrosome maturation: preparation for zona pellucida binding and penetration
- DNA condensation: protamine replacement of histones

**Prostatic Biochemistry:**
- Zonal anatomy correlates with pathology: BPH in transition zone, cancer in peripheral zone
- PSA exists as free PSA and complexed PSA (with α1-antichymotrypsin)
- Low free-to-total PSA ratio suggests malignancy
- Citrate accumulation (prostate uniquely cannot metabolize citrate in Krebs cycle)
- Polyamines (spermine, spermidine) stabilize DNA and modulate ion channels

**Erectile Physiology - Molecular Cascade:**
1. Sexual stimulation → parasympathetic activation
2. Non-adrenergic non-cholinergic (NANC) neurons release NO and VIP
3. NO + soluble guanylate cyclase → GTP → cGMP
4. cGMP activates protein kinase G (PKG)
5. PKG phosphorylates targets → Ca²⁺ efflux, K⁺ channel opening
6. Smooth muscle hyperpolarization and relaxation
7. Arterial dilation (helicine arteries), sinusoidal expansion
8. Venous compression (veno-occlusive mechanism) maintains tumescence
9. PDE5 degrades cGMP → detumescence

**Neuroanatomy:**
- Sympathetic: T10-L2 (ejaculation, detumescence)
- Parasympathetic: S2-S4 (erection, secretions)
- Somatic: pudendal nerve S2-S4 (sensation, bulbocavernosus/ischiocavernosus muscles)
- Cavernous nerves from pelvic plexus (risk in radical prostatectomy)

**Spanish Clinical Terms:**
- Infertility = Infertilidad
- Sperm count = Recuento espermático
- Erectile dysfunction = Disfunción eréctil
- Prostate cancer = Cáncer de próstata`,
      keyTerms: [
        {
          term: 'StAR protein',
          definition:
            'Steroidogenic acute regulatory protein; transports cholesterol across mitochondrial membranes',
        },
        {
          term: 'Lumicrine',
          definition: 'Signaling via factors in tubular fluid from one organ region to another',
        },
        {
          term: 'Veno-occlusive mechanism',
          definition: 'Compression of subtunical venules by expanded sinusoids maintains erection',
        },
        {
          term: 'cGMP',
          definition:
            'Cyclic guanosine monophosphate; second messenger mediating smooth muscle relaxation',
        },
        {
          term: 'Inhibin B',
          definition: 'Glycoprotein from Sertoli cells providing negative feedback on FSH',
        },
        {
          term: 'Protamine',
          definition: 'Arginine-rich protein replacing histones in sperm DNA for tight condensation',
        },
      ],
      clinicalNotes:
        'Semen analysis parameters (WHO 2021): volume ≥1.4 mL, concentration ≥16 million/mL, total motility ≥42%, progressive motility ≥30%, normal morphology ≥4%. Hormonal evaluation in male infertility: FSH elevation suggests primary testicular failure; low FSH/LH with low testosterone suggests hypogonadotropic hypogonadism. Inhibin B is direct marker of Sertoli cell function and spermatogenesis.',
    },

    5: {
      level: 5,
      summary:
        'Clinical male reproductive medicine integrates diagnostic evaluation of fertility and sexual function with surgical, medical, and assisted reproductive technologies, informed by molecular genetics and current research.',
      explanation: `**Clinical Assessment and Diagnostic Algorithms:**

**Male Infertility Evaluation:**

**History:**
- Duration of infertility, female partner evaluation
- Developmental history: cryptorchidism, pubertal timing, hypospadias
- Exposures: heat, toxins, medications (testosterone, finasteride, chemotherapy)
- Medical: diabetes, varicocele, prior surgeries (orchiopexy, hernia repair)
- Sexual function: frequency, timing, erectile/ejaculatory function

**Physical Examination:**
- Anthropometry: height, BMI, arm span, secondary sexual characteristics
- Testicular volume: orchidometer (normal ≥15 mL), consistency, masses
- Varicocele: examine standing with Valsalva (Grade I-III)
- Vas deferens: bilateral presence (congenital bilateral absence in CFTR mutations)
- Digital rectal exam: prostate size, consistency, nodules

**Laboratory Evaluation:**
- **Semen analysis** (×2, abstinence 2-7 days): WHO 2021 criteria
- **Hormonal panel**: Morning testosterone (low in 15-20% infertile men), LH, FSH, prolactin
- **Post-ejaculate urinalysis**: If low volume, evaluate for retrograde ejaculation
- **Genetic testing**:
  - Karyotype if concentration <5 million/mL (Klinefelter 47,XXY in 10-15%)
  - Y chromosome microdeletions (AZFa, AZFb, AZFc) if <5 million/mL
  - CFTR mutations if congenital absence of vas deferens (CAVD)

**Imaging:**
- Scrotal ultrasound: testicular size/echotexture, varicocele, masses
- Transrectal ultrasound: if ejaculatory duct obstruction suspected

**Diagnostic Categories:**
- **Azoospermia** (no sperm): Obstructive vs non-obstructive
  - FSH normal, testicular volume normal → likely obstructive
  - FSH elevated, small testes → likely non-obstructive (primary testicular failure)
- **Oligozoospermia** (<15 million/mL): Variable etiologies
- **Asthenozoospermia** (<42% motility): Flagellar defects, antisperm antibodies
- **Teratozoospermia** (<4% normal morphology): Varies with staining/criteria

**Therapeutic Interventions:**

**Medical:**
- Hypogonadotropic hypogonadism: hCG ± FSH, pulsatile GnRH, or clomiphene
- Hyperprolactinemia: dopamine agonists (carambergoline)
- Antisperm antibodies: corticosteroids (controversial efficacy)
- Antioxidants: variable evidence

**Surgical:**
- **Varicocelectomy**: Improves parameters in 60-70%, pregnancy rate ~40%
  - Techniques: microsurgical subinguinal, laparoscopic, radiological embolization
  - Grade III varicocele with abnormal semen most likely to benefit
- **Vasovasostomy**: Reversal of vasectomy (patency 80-95%, pregnancy 50-70%)
- **Vasoepididymostomy**: If epididymal obstruction
- **Transurethral resection of ejaculatory ducts (TURED)**: For ejaculatory duct obstruction

**Sperm Retrieval Techniques:**
- **TESA** (testicular sperm aspiration): Needle aspiration, simple, less sperm yield
- **TESE** (testicular sperm extraction): Open biopsy, moderate yield
- **Micro-TESE** (microsurgical TESE): Operating microscope identifies tubules with spermatogenesis, highest yield in non-obstructive azoospermia (50-60%)
- **PESA/MESA**: Percutaneous/microsurgical epididymal sperm aspiration (obstructive cases)

**Assisted Reproductive Technology:**
- **IUI** (intrauterine insemination): Total motile sperm count ≥5-10 million post-wash
- **IVF-ICSI** (intracytoplasmic sperm injection): Single sperm injected into oocyte, bypasses most male factors
- **Preimplantation genetic testing**: For genetic causes (e.g., translocations)

**Erectile Dysfunction:**

**Evaluation:**
- Vascular (arterial insufficiency, venous leak), neurogenic (diabetes, MS, spinal injury), hormonal (hypogonadism, hyperprolactinemia), psychogenic, medication-induced
- **Nocturnal penile tumescence testing**: Assesses organic vs psychogenic
- **Penile Doppler ultrasound**: After intracavernosal injection (PGE1), peak systolic velocity >30 cm/s normal
- **Labs**: Testosterone, prolactin, glucose, lipids

**Treatment Ladder:**
1. **PDE5 inhibitors**: Sildenafil, tadalafil, vardenafil, avanafil (~70% effective)
2. **Intraurethral alprostadil** (MUSE): Prostaglandin E1 suppository
3. **Intracavernosal injection**: Alprostadil, papaverine, phentolamine (bi/tri-mix)
4. **Vacuum erection device**: Mechanical, non-invasive
5. **Penile prosthesis**: Inflatable or malleable, for refractory cases

**Prostate Disease:**
- **BPH**: α-blockers (tamsulosin), 5α-reductase inhibitors (finasteride), combination, surgery (TURP, laser enucleation)
- **Prostate cancer screening**: PSA + DRE controversial (USPSTF: shared decision-making 55-69 years)
- **Prostate biopsy**: Transrectal or transperineal, 12-core systematic ± targeted (MRI fusion)
- **Gleason grading**: Sum of two most common patterns (e.g., 3+4=7)
- **Staging**: TNM system, imaging (MRI, bone scan if high-risk)
- **Treatment**: Active surveillance (low-risk), radical prostatectomy (nerve-sparing techniques), radiation (external beam, brachytherapy), androgen deprivation therapy (metastatic)

**Testicular Cancer:**
- Most common solid tumor in men 15-35 years
- **Germ cell tumors**: Seminoma (radiosensitive) vs non-seminoma (teratoma, embryonal, choriocarcinoma, yolk sac)
- **Tumor markers**: AFP (non-seminoma), β-hCG (choriocarcinoma, 10-20% seminoma), LDH (nonspecific)
- **Treatment**: Radical inguinal orchiectomy, staging (CT chest/abdomen/pelvis), risk-adapted therapy
- **Fertility preservation**: Sperm banking before orchiectomy/chemotherapy/radiation

**Emerging Research:**
- Testicular tissue cryopreservation and autotransplantation for prepubertal boys
- In vitro spermatogenesis from stem cells
- Gene therapy for monogenic causes (e.g., Y microdeletions)
- Novel sperm selection techniques for ART

**Spanish Medical Terms:**
- Semen analysis = Análisis de semen/Espermiograma
- Infertility = Infertilidad
- Vasectomy = Vasectomía
- Sperm retrieval = Recuperación espermática`,
      keyTerms: [
        {
          term: 'Klinefelter syndrome',
          definition:
            '47,XXY karyotype; most common genetic cause of male infertility, presents with small firm testes, azoospermia, elevated FSH/LH, low-normal testosterone',
        },
        {
          term: 'Y chromosome microdeletions',
          definition:
            'Deletions in AZF (azoospermia factor) regions on Yq; AZFa/b have poor prognosis, AZFc may allow sperm retrieval',
        },
        {
          term: 'Micro-TESE',
          definition:
            'Microsurgical testicular sperm extraction; identifies seminiferous tubules with active spermatogenesis under magnification',
        },
        {
          term: 'ICSI',
          definition:
            'Intracytoplasmic sperm injection; bypasses most male factor infertility by directly injecting single sperm into oocyte',
        },
        {
          term: 'Gleason score',
          definition:
            'Histologic grading system for prostate adenocarcinoma based on glandular architecture (1-5 scale, sum of two most common patterns)',
        },
        {
          term: 'Cavernous nerve',
          definition:
            'Branch of pelvic plexus providing parasympathetic innervation for erection; at risk in radical prostatectomy',
        },
      ],
      clinicalNotes:
        'In non-obstructive azoospermia, FSH level and testicular volume predict sperm retrieval success: FSH >20 IU/L has lower micro-TESE success (~30-40%) vs FSH <15 IU/L (~60%). Klinefelter syndrome can have focal spermatogenesis; micro-TESE retrieves sperm in 40-50% despite azoospermia. For prostate cancer, nerve-sparing radical prostatectomy preserves erectile function in 40-70% depending on patient age, preoperative function, and surgical expertise. ICSI with testicular sperm has similar success rates as with ejaculated sperm but requires genetic counseling if Y microdeletions (male offspring will inherit deletion).',
    },
  },

  media: [],
  citations: [
    {
      id: 'grays-anatomy-male',
      type: 'textbook',
      title: "Gray's Anatomy",
      authors: ['Susan Standring'],
      source: "Gray's Anatomy: The Anatomical Basis of Clinical Practice, 42nd Edition",
      chapter: 'Male Reproductive System',
    },
    {
      id: 'campbells-urology',
      type: 'textbook',
      title: "Campbell-Walsh-Wein Urology",
      source: 'Campbell-Walsh-Wein Urology, 12th Edition',
      chapter: 'Male Reproductive Physiology',
    },
    {
      id: 'who-semen-2021',
      type: 'article',
      title: 'WHO laboratory manual for the examination and processing of human semen, 6th edition',
      source: 'World Health Organization',
      url: 'https://www.who.int/publications/i/item/9789240030787',
      accessedDate: '2026-01-30',
    },
  ],
  crossReferences: [
    { targetId: 'structure-testes', targetType: 'structure', relationship: 'related', label: 'Testes' },
    { targetId: 'structure-prostate', targetType: 'structure', relationship: 'related', label: 'Prostate' },
    { targetId: 'process-spermatogenesis', targetType: 'process', relationship: 'related', label: 'Spermatogenesis' },
    { targetId: 'pathway-hpg-axis', targetType: 'pathway', relationship: 'related', label: 'HPG Axis' },
    { targetId: 'reproductive-male-infertility', targetType: 'condition', relationship: 'related', label: 'Male Infertility' },
  ],
  tags: {
    systems: ['reproductive'],
    topics: ['anatomy', 'physiology', 'endocrinology', 'fertility'],
    keywords: [
      'testes',
      'testículos',
      'sperm',
      'espermatozoides',
      'prostate',
      'próstata',
      'penis',
      'pene',
      'testosterone',
      'testosterona',
      'fertility',
      'fertilidad',
      'erectile function',
      'función eréctil',
    ],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['surgery', 'medicine', 'ob-gyn'],
    },
  },
  createdAt: '2026-01-30T00:00:00.000Z',
  updatedAt: '2026-01-30T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
