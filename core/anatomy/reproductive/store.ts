/**
 * Reproductive System Data Store
 *
 * Male and female reproductive anatomy,
 * gametogenesis, menstrual cycle, and pregnancy.
 */

import type {
  MaleReproductiveStructure,
  FemaleReproductiveStructure,
  GametogenesisStage,
  MenstrualCyclePhase,
  ReproductiveHormone,
  PregnancyMilestone,
  ReproductiveStatistics,
} from './types';

// ============================================================================
// MALE REPRODUCTIVE STRUCTURES
// ============================================================================

const maleStructures: Map<string, MaleReproductiveStructure> = new Map();

maleStructures.set('testis', {
  id: 'testis',
  name: 'Testis',
  latinName: 'Testis',
  fmaId: 'FMA:7210',
  type: 'gonad',
  location: 'Scrotum, descended from retroperitoneum during fetal development',
  function: 'Spermatogenesis and testosterone production',
  dimensions: '4-5 cm × 2.5-3 cm × 2-3 cm; 10-15 g each',
  histology: 'Seminiferous tubules (spermatogenesis), Leydig cells (testosterone), Sertoli cells (support)',
  bloodSupply: ['Testicular artery (from aorta at L2)'],
  venousDrainage: ['Pampiniform plexus → Testicular vein (left to renal vein, right to IVC)'],
  innervation: {
    sympathetic: 'T10-L1 via testicular plexus',
  },
  explanations: {
    level1: 'The testes make sperm and the hormone testosterone.',
    level2: 'The testes have two main jobs: producing millions of sperm daily in seminiferous tubules, and making testosterone in Leydig cells which causes male characteristics.',
    level3: 'Seminiferous tubules contain Sertoli cells (support spermatogenesis) and germ cells at various stages. Leydig cells in the interstitium produce testosterone under LH stimulation. The blood-testis barrier protects developing sperm.',
    level4: 'Spermatogenesis takes ~74 days: spermatogonia → primary spermatocyte → secondary spermatocyte → spermatid → spermatozoa. Sertoli cells provide nutrients, phagocytose residual bodies, and secrete inhibin B (negative feedback on FSH). Testosterone has local (high concentration for spermatogenesis) and systemic effects.',
    level5: 'The blood-testis barrier (Sertoli cell tight junctions) creates an immunologically privileged site, preventing immune attack on haploid spermatocytes. FSH acts on Sertoli cells via cAMP; LH acts on Leydig cells via cAMP. Sertoli cells express aromatase, converting testosterone to estradiol for local regulation. Temperature sensitivity requires scrotal location (2-3°C below core) - varicocele and cryptorchidism impair spermatogenesis.',
  },
  keyFacts: [
    'Produces ~200-300 million sperm daily',
    'Optimal temperature 2-3°C below body temperature',
    'Left testicular vein drains to left renal vein (varicocele more common on left)',
    'Leydig cells produce testosterone under LH control',
    'Sertoli cells form blood-testis barrier, produce inhibin B',
  ],
  pathologies: [
    {
      name: 'Testicular cancer',
      description: 'Germ cell tumors (95%): seminoma or non-seminoma',
      symptoms: ['Painless testicular mass', 'Heaviness', 'Hydrocele'],
      causes: ['Cryptorchidism', 'Family history', 'Klinefelter syndrome'],
      labFindings: ['AFP (non-seminoma)', 'β-hCG (both)', 'LDH'],
      relevantImaging: ['Scrotal ultrasound', 'CT chest/abdomen/pelvis'],
    },
    {
      name: 'Cryptorchidism',
      description: 'Undescended testis',
      symptoms: ['Empty scrotum', 'Palpable inguinal mass'],
      causes: ['Hormonal', 'Mechanical factors', 'Genetic'],
    },
    {
      name: 'Varicocele',
      description: 'Dilated pampiniform plexus, usually left-sided',
      symptoms: ['Scrotal heaviness', '"Bag of worms" on exam', 'Infertility'],
      causes: ['Left testicular vein anatomy', 'Absent valves'],
    },
  ],
  relevantLabs: ['Testosterone', 'FSH', 'LH', 'Semen analysis', 'Inhibin B'],
  relevantImaging: ['Scrotal ultrasound'],
  relatedStructures: ['epididymis', 'spermatic-cord', 'scrotum'],
});

maleStructures.set('epididymis', {
  id: 'epididymis',
  name: 'Epididymis',
  latinName: 'Epididymis',
  fmaId: 'FMA:18255',
  type: 'duct',
  location: 'Posterior aspect of testis',
  function: 'Sperm maturation and storage',
  dimensions: '~6 meters coiled into 5 cm',
  histology: 'Pseudostratified columnar epithelium with stereocilia',
  bloodSupply: ['Testicular artery', 'Deferential artery'],
  venousDrainage: ['Pampiniform plexus'],
  innervation: {
    sympathetic: 'Testicular plexus',
  },
  explanations: {
    level1: 'The epididymis is a coiled tube where sperm mature and are stored.',
    level2: 'Sperm spend 2-3 weeks traveling through the 6-meter-long epididymis, gaining the ability to swim and fertilize eggs.',
    level3: 'The epididymis has three parts: head (caput), body (corpus), and tail (cauda). Sperm mature as they transit, acquiring motility and fertilizing capacity. The tail stores mature sperm.',
    level4: 'Epididymal epithelial cells secrete proteins that modify sperm membrane composition (capacitation preparation). The acidic environment (pH ~6.5) keeps sperm quiescent. Principal cells have stereocilia for absorption; clear cells remove damaged sperm.',
    level5: 'Sperm acquire forward motility via membrane cholesterol efflux and lipid reorganization. Secreted proteins like clusterin and CRISP1 coat sperm surface. The blood-epididymis barrier maintains the unique luminal environment. Epididymal obstruction (vasectomy, infection) causes azoospermia with normal spermatogenesis.',
  },
  keyFacts: [
    '~6 meters coiled into 5 cm',
    'Sperm transit time: 2-3 weeks',
    'Site of sperm maturation and storage',
    'Head receives ductuli efferentes from testis',
    'Tail stores mature sperm',
  ],
  pathologies: [
    {
      name: 'Epididymitis',
      description: 'Inflammation of epididymis',
      symptoms: ['Scrotal pain', 'Swelling', 'Fever', 'Dysuria'],
      causes: ['<35 years: STIs (Chlamydia, Gonorrhea)', '>35 years: E. coli (UTI)'],
      relevantImaging: ['Scrotal ultrasound with Doppler'],
    },
  ],
  relatedStructures: ['testis', 'vas-deferens'],
});

maleStructures.set('vas-deferens', {
  id: 'vas-deferens',
  name: 'Vas Deferens (Ductus Deferens)',
  latinName: 'Ductus deferens',
  fmaId: 'FMA:19368',
  type: 'duct',
  location: 'From epididymis through inguinal canal to ejaculatory duct',
  function: 'Sperm transport, storage, and rapid expulsion during ejaculation',
  dimensions: '~45 cm long, 2-3 mm diameter',
  histology: 'Pseudostratified columnar epithelium, thick muscular wall',
  bloodSupply: ['Deferential artery (from inferior vesical)'],
  innervation: {
    sympathetic: 'Hypogastric nerve (ejaculation)',
  },
  explanations: {
    level1: 'The vas deferens is a tube that carries sperm from the epididymis during ejaculation.',
    level2: 'The vas deferens is a muscular tube that rapidly propels sperm during ejaculation. It\'s cut during a vasectomy to prevent pregnancy.',
    level3: 'The vas deferens has thick muscular walls for powerful peristalsis during ejaculation. It travels through the inguinal canal as part of the spermatic cord, crosses the ureter, and joins the seminal vesicle duct to form the ejaculatory duct.',
    level4: 'Sympathetic innervation (T10-L2) triggers coordinated peristaltic waves during emission (movement of sperm to prostatic urethra). The ampulla of the vas deferens stores sperm and secretes fructose-poor fluid.',
    level5: 'Ejaculation has two phases: emission (sympathetic: vas deferens, seminal vesicles, prostate contract; bladder neck closes) and expulsion (somatic pudendal nerve: bulbospongiosus contractions). Vasectomy interrupts the vas deferens; reversal success depends on time since procedure and presence of anti-sperm antibodies.',
  },
  keyFacts: [
    '~45 cm long with thick muscular wall',
    'Travels through inguinal canal in spermatic cord',
    '"Water under the bridge": vas crosses ureter posteriorly',
    'Vasectomy site: scrotal portion',
    'Congenital bilateral absence in CF (CFTR mutations)',
  ],
  pathologies: [
    {
      name: 'Congenital bilateral absence of vas deferens (CBAVD)',
      description: 'Absent vas deferens, associated with CF mutations',
      symptoms: ['Azoospermia', 'Infertility'],
      causes: ['CFTR mutations (even without clinical CF)'],
    },
  ],
  relatedStructures: ['epididymis', 'seminal-vesicle', 'ejaculatory-duct', 'spermatic-cord'],
});

maleStructures.set('prostate', {
  id: 'prostate',
  name: 'Prostate Gland',
  latinName: 'Prostata',
  fmaId: 'FMA:9600',
  type: 'accessory-gland',
  location: 'Below bladder, surrounds prostatic urethra',
  function: 'Produces alkaline fluid with PSA, proteases, citric acid, zinc',
  dimensions: '~3 × 4 × 2 cm; ~20 g (walnut-sized)',
  histology: 'Tubuloalveolar glands in fibromuscular stroma; 3 zones (peripheral, central, transitional)',
  bloodSupply: ['Inferior vesical artery', 'Middle rectal artery'],
  venousDrainage: ['Prostatic venous plexus → Internal iliac vein'],
  innervation: {
    sympathetic: 'Hypogastric nerve (smooth muscle contraction)',
    parasympathetic: 'Pelvic splanchnic nerves S2-S4 (secretion)',
  },
  secretions: [
    {
      name: 'Prostatic fluid',
      function: 'Liquefies semen, provides nutrients and enzymes',
      composition: ['PSA', 'Citric acid', 'Zinc', 'Acid phosphatase', 'Proteases'],
    },
  ],
  explanations: {
    level1: 'The prostate makes fluid that mixes with sperm to create semen.',
    level2: 'The prostate is a walnut-sized gland that surrounds the urethra below the bladder. It makes prostatic fluid that helps sperm survive and move. It commonly enlarges with age.',
    level3: 'The prostate has three zones: peripheral (70%, cancer site), central (25%), and transitional (5%, BPH site). It secretes PSA (liquefies semen), citric acid, and zinc. The prostatic urethra receives ejaculatory ducts.',
    level4: 'Prostatic secretion is androgen-dependent (testosterone → DHT via 5α-reductase). The peripheral zone is palpable on DRE and is where 70% of cancers arise. BPH involves the transitional zone around the urethra, causing obstruction. PSA is a serine protease that liquefies the coagulum after ejaculation.',
    level5: 'DHT binds androgen receptor in prostate epithelium, regulating growth and secretion. 5α-reductase inhibitors (finasteride, dutasteride) reduce DHT and prostate size. PSA is not cancer-specific; elevated in BPH, prostatitis, and cancer. Prostate cancer often spreads to bone (osteoblastic metastases) and lymph nodes. Radical prostatectomy risks: incontinence and ED (cavernous nerves course along prostate).',
  },
  keyFacts: [
    '~20 g (walnut size), enlarges with age',
    'Peripheral zone: 70% of gland, 70% of cancers',
    'Transitional zone: BPH location',
    'PSA: organ-specific, not cancer-specific',
    'DRE can palpate peripheral zone posteriorly',
  ],
  pathologies: [
    {
      name: 'Benign prostatic hyperplasia (BPH)',
      description: 'Nodular enlargement of transitional zone',
      symptoms: ['LUTS: frequency, urgency, weak stream, nocturia, incomplete emptying'],
      causes: ['Age-related DHT effect', 'Stromal-epithelial interactions'],
      labFindings: ['PSA may be mildly elevated'],
      relevantImaging: ['TRUS', 'Post-void residual'],
    },
    {
      name: 'Prostate cancer',
      description: 'Adenocarcinoma, usually in peripheral zone',
      symptoms: ['Often asymptomatic', 'LUTS', 'Bone pain (metastases)', 'Hematuria'],
      causes: ['Age', 'Family history', 'African descent', 'Diet'],
      labFindings: ['Elevated PSA', 'Abnormal DRE'],
      relevantImaging: ['MRI prostate', 'Bone scan', 'TRUS-guided biopsy'],
    },
    {
      name: 'Prostatitis',
      description: 'Inflammation of prostate',
      symptoms: ['Pelvic pain', 'Dysuria', 'Fever (acute bacterial)'],
      causes: ['Bacterial (E. coli)', 'Chronic pelvic pain syndrome'],
    },
  ],
  relevantLabs: ['PSA', 'Free PSA', 'PSA density', 'Urinalysis'],
  relevantImaging: ['TRUS', 'MRI prostate'],
  relatedStructures: ['bladder', 'prostatic-urethra', 'seminal-vesicle', 'ejaculatory-duct'],
});

maleStructures.set('seminal-vesicle', {
  id: 'seminal-vesicle',
  name: 'Seminal Vesicle',
  latinName: 'Vesicula seminalis',
  fmaId: 'FMA:19386',
  type: 'accessory-gland',
  location: 'Posterior to bladder, lateral to ampulla of vas deferens',
  function: 'Produces fructose-rich alkaline fluid (60-70% of semen volume)',
  dimensions: '~5 cm long',
  histology: 'Pseudostratified columnar epithelium with honeycomb appearance',
  bloodSupply: ['Inferior vesical artery', 'Middle rectal artery'],
  innervation: {
    sympathetic: 'Hypogastric nerve',
  },
  secretions: [
    {
      name: 'Seminal vesicle fluid',
      function: 'Provides fructose (energy for sperm), coagulation factors',
      composition: ['Fructose', 'Prostaglandins', 'Semenogelin', 'Fibrinogen'],
    },
  ],
  explanations: {
    level1: 'The seminal vesicles make sugary fluid that gives sperm energy.',
    level2: 'The seminal vesicles produce most of the liquid in semen. This fluid contains fructose sugar that sperm use for energy to swim.',
    level3: 'The seminal vesicles contribute 60-70% of semen volume, providing fructose (sperm energy source), prostaglandins, and semenogelin (forms the coagulum). The duct joins the vas deferens to form the ejaculatory duct.',
    level4: 'Seminal vesicle secretion is androgen-dependent. Fructose level in semen is a marker of seminal vesicle function; absence suggests ejaculatory duct obstruction or CBAVD. Prostaglandins may modulate female reproductive tract.',
    level5: 'Semenogelin I and II from seminal vesicles form the initial coagulum, later liquefied by PSA. This may protect sperm in the acidic vaginal environment. Seminal vesicle invasion by prostate cancer upstages to T3b and worsens prognosis.',
  },
  keyFacts: [
    'Produces 60-70% of semen volume',
    'Fructose: primary energy source for sperm',
    'Not a sperm storage site (despite name)',
    'Absence of fructose suggests ejaculatory duct obstruction',
    'Joins vas deferens to form ejaculatory duct',
  ],
  relatedStructures: ['vas-deferens', 'prostate', 'ejaculatory-duct', 'bladder'],
});

maleStructures.set('penis', {
  id: 'penis',
  name: 'Penis',
  latinName: 'Penis',
  fmaId: 'FMA:9707',
  type: 'external-genitalia',
  location: 'External male genitalia',
  function: 'Urination, copulation, semen delivery',
  histology: 'Corpora cavernosa (paired, erectile), Corpus spongiosum (single, contains urethra)',
  bloodSupply: ['Internal pudendal artery → dorsal artery, deep artery (cavernosal), bulbar artery'],
  venousDrainage: ['Deep dorsal vein → prostatic plexus'],
  innervation: {
    sympathetic: 'T11-L2 (detumescence, ejaculation)',
    parasympathetic: 'S2-S4 via cavernous nerves (erection)',
    somatic: 'Pudendal nerve (sensation, bulbospongiosus)',
  },
  explanations: {
    level1: 'The penis is used for urination and reproduction.',
    level2: 'The penis has three tubes of spongy tissue. During erection, blood fills these tubes making it firm. The urethra runs through the corpus spongiosum for urine and semen.',
    level3: 'The corpora cavernosa are paired erectile bodies; the corpus spongiosum surrounds the urethra and forms the glans. Erection is a vascular event: parasympathetic → NO release → smooth muscle relaxation → blood engorgement.',
    level4: 'Erection: parasympathetic nerves (S2-S4) release acetylcholine, activating endothelial NO synthase (eNOS). NO diffuses into smooth muscle, activating guanylate cyclase → cGMP → relaxation → arterial dilation and venous compression. PDE5 degrades cGMP; PDE5 inhibitors (sildenafil) enhance erection.',
    level5: 'Penile erection involves: 1) neurogenic NO from cavernous nerves, 2) endothelial NO from sinusoidal endothelium, 3) smooth muscle relaxation via cGMP-dependent protein kinase, 4) engorgement compresses subtunical venules against tunica albuginea (veno-occlusive mechanism). Erectile dysfunction reflects endothelial dysfunction and predicts cardiovascular disease. Priapism (prolonged erection) is a urologic emergency.',
  },
  keyFacts: [
    'Corpora cavernosa: paired, erectile',
    'Corpus spongiosum: contains urethra, forms glans',
    'Erection: parasympathetic (Point) via NO/cGMP',
    'Ejaculation: sympathetic (Shoot)',
    'PDE5 inhibitors enhance cGMP-mediated erection',
  ],
  pathologies: [
    {
      name: 'Erectile dysfunction',
      description: 'Inability to achieve/maintain erection',
      symptoms: ['Difficulty with erection', 'Decreased rigidity'],
      causes: ['Vascular', 'Neurogenic', 'Psychogenic', 'Hormonal', 'Medications'],
    },
    {
      name: 'Peyronie disease',
      description: 'Fibrous plaque in tunica albuginea',
      symptoms: ['Penile curvature', 'Pain', 'ED'],
      causes: ['Repeated trauma', 'Genetic predisposition'],
    },
    {
      name: 'Priapism',
      description: 'Prolonged erection >4 hours',
      symptoms: ['Painful erection (ischemic)', 'Persistent tumescence'],
      causes: ['Sickle cell disease', 'Medications', 'Idiopathic'],
    },
  ],
  relatedStructures: ['urethra', 'scrotum', 'prostate'],
});

// ============================================================================
// FEMALE REPRODUCTIVE STRUCTURES
// ============================================================================

const femaleStructures: Map<string, FemaleReproductiveStructure> = new Map();

femaleStructures.set('ovary', {
  id: 'ovary',
  name: 'Ovary',
  latinName: 'Ovarium',
  fmaId: 'FMA:7209',
  type: 'gonad',
  location: 'Pelvic cavity, lateral to uterus in ovarian fossa',
  function: 'Oogenesis and steroid hormone production (estrogen, progesterone)',
  dimensions: '3-5 cm × 1.5-3 cm × 1-1.5 cm; 5-8 g',
  histology: 'Follicles at various stages (primordial to Graafian), corpus luteum, corpus albicans, stroma',
  bloodSupply: ['Ovarian artery (from aorta)', 'Uterine artery branches'],
  venousDrainage: ['Ovarian vein (left to renal vein, right to IVC)'],
  innervation: {
    sympathetic: 'Ovarian plexus (T10-L1)',
  },
  explanations: {
    level1: 'The ovaries make eggs and female hormones.',
    level2: 'The ovaries contain all your eggs at birth. Each month, one egg matures and is released (ovulation). The ovaries also make estrogen and progesterone.',
    level3: 'Oogenesis begins before birth; primordial follicles are arrested in prophase I. Each month, FSH recruits follicles; one becomes dominant. LH surge triggers ovulation. The corpus luteum produces progesterone; it degenerates if no pregnancy.',
    level4: 'Two-cell theory: LH stimulates theca cells to produce androgens; FSH stimulates granulosa cells to aromatize androgens to estrogens. The dominant follicle produces increasing estrogen, triggering positive feedback and LH surge. Corpus luteum produces progesterone for 14 days.',
    level5: 'Oocytes are arrested in dictyate stage of meiosis I from fetal life until ovulation. LH surge causes meiosis resumption; second arrest at metaphase II until fertilization. AMH from granulosa cells inhibits primordial follicle recruitment. Ovarian reserve declines with age (diminished reserve → menopause). PCOS involves excess androgen, anovulation, and metabolic dysfunction.',
  },
  keyFacts: [
    '~1-2 million oocytes at birth; ~300,000 at puberty',
    '~400 oocytes ovulated in reproductive life',
    'One dominant follicle selected each cycle',
    'Estrogen from granulosa cells (aromatization)',
    'Corpus luteum lifespan: 14 days without hCG rescue',
  ],
  pathologies: [
    {
      name: 'Polycystic ovary syndrome (PCOS)',
      description: 'Hyperandrogenism with anovulation',
      symptoms: ['Irregular periods', 'Hirsutism', 'Acne', 'Infertility'],
      causes: ['Insulin resistance', 'Excess LH', 'Genetic'],
      labFindings: ['Elevated androgens', 'LH:FSH > 2:1'],
      relevantImaging: ['Pelvic ultrasound (polycystic morphology)'],
    },
    {
      name: 'Ovarian cysts',
      description: 'Fluid-filled structures in/on ovary',
      symptoms: ['Often asymptomatic', 'Pelvic pain', 'Bloating'],
      causes: ['Functional (follicular, corpus luteum)', 'Endometrioma', 'Dermoid'],
      relevantImaging: ['Pelvic ultrasound'],
    },
    {
      name: 'Ovarian cancer',
      description: 'Malignancy of ovary (epithelial most common)',
      symptoms: ['Often asymptomatic until advanced', 'Bloating', 'Early satiety', 'Pelvic pain'],
      causes: ['BRCA1/2 mutations', 'Family history', 'Nulliparity'],
      labFindings: ['CA-125 (elevated in epithelial)'],
      relevantImaging: ['Pelvic ultrasound', 'CT abdomen/pelvis'],
    },
  ],
  relevantLabs: ['FSH', 'LH', 'Estradiol', 'Progesterone', 'AMH', 'CA-125'],
  relevantImaging: ['Pelvic ultrasound'],
  relatedStructures: ['fallopian-tube', 'uterus', 'broad-ligament'],
});

femaleStructures.set('fallopian-tube', {
  id: 'fallopian-tube',
  name: 'Fallopian Tube (Uterine Tube)',
  latinName: 'Tuba uterina',
  fmaId: 'FMA:18245',
  type: 'duct',
  location: 'Upper border of broad ligament, from ovary to uterus',
  function: 'Oocyte transport, site of fertilization',
  dimensions: '~10-12 cm long',
  histology: 'Ciliated columnar epithelium, smooth muscle',
  bloodSupply: ['Uterine artery', 'Ovarian artery'],
  innervation: {
    sympathetic: 'Ovarian and hypogastric plexuses',
    parasympathetic: 'Pelvic splanchnic nerves',
  },
  explanations: {
    level1: 'The fallopian tubes carry eggs from the ovaries to the uterus.',
    level2: 'The fallopian tubes catch the released egg with their fimbriated ends and use cilia and muscle contractions to move it toward the uterus. Fertilization usually happens here.',
    level3: 'The tube has four parts: infundibulum (fimbriae), ampulla (fertilization site), isthmus, and intramural. Cilia beat toward the uterus; smooth muscle creates peristaltic waves.',
    level4: 'The fimbriae sweep over the ovary at ovulation. Oocyte transport takes 3-4 days. Fertilization occurs in the ampulla; the resulting zygote undergoes cleavage during transport. Tubal damage (PID, surgery) increases ectopic pregnancy risk.',
    level5: 'Tubal secretions provide nutrients for gametes and early embryo. Sperm capacitation completes in the tube. Ectopic pregnancy occurs when embryo implants in tube (usually ampulla or isthmus); risk factors include PID, prior ectopic, tubal surgery, and IUD.',
  },
  keyFacts: [
    '~10-12 cm long',
    'Fertilization occurs in ampulla',
    'Oocyte transport: 3-4 days',
    'Ciliated epithelium and peristalsis move egg',
    'Ectopic pregnancy: embryo implants in tube',
  ],
  pathologies: [
    {
      name: 'Ectopic pregnancy',
      description: 'Implantation outside uterus, usually in tube',
      symptoms: ['Pelvic pain', 'Vaginal bleeding', 'Missed period', 'Hemodynamic instability if ruptured'],
      causes: ['PID/STIs', 'Prior ectopic', 'Tubal surgery', 'IUD'],
      labFindings: ['Positive β-hCG', 'Abnormally rising hCG'],
      relevantImaging: ['Transvaginal ultrasound'],
    },
    {
      name: 'Salpingitis (PID)',
      description: 'Infection of fallopian tube',
      symptoms: ['Pelvic pain', 'Fever', 'Vaginal discharge', 'Cervical motion tenderness'],
      causes: ['Chlamydia', 'Gonorrhea', 'Polymicrobial'],
    },
  ],
  relatedStructures: ['ovary', 'uterus', 'broad-ligament'],
});

femaleStructures.set('uterus', {
  id: 'uterus',
  name: 'Uterus',
  latinName: 'Uterus',
  fmaId: 'FMA:17558',
  type: 'uterus',
  location: 'Pelvis, between bladder and rectum, normally anteverted and anteflexed',
  function: 'Implantation, pregnancy, menstruation',
  dimensions: '~7-8 cm × 5 cm × 2-3 cm (nulliparous); larger if parous',
  histology: 'Endometrium (functional/basal layers), myometrium (smooth muscle), perimetrium (serosa)',
  bloodSupply: ['Uterine artery (from internal iliac)'],
  venousDrainage: ['Uterine venous plexus → Internal iliac vein'],
  innervation: {
    sympathetic: 'T12-L1 via hypogastric plexus',
    parasympathetic: 'S2-S4 via pelvic splanchnic nerves',
  },
  explanations: {
    level1: 'The uterus is where a baby grows during pregnancy.',
    level2: 'The uterus has a thick muscular wall (myometrium) and an inner lining (endometrium) that thickens each month for possible pregnancy. If no pregnancy occurs, the lining sheds (menstruation).',
    level3: 'The uterus has three parts: fundus, body, and cervix. The endometrium has a functional layer (shed during menses) and basal layer (regenerates the functional layer). Estrogen causes proliferation; progesterone causes secretory changes.',
    level4: 'The menstrual cycle: follicular phase (estrogen → proliferative endometrium) → ovulation → luteal phase (progesterone → secretory endometrium). Without implantation, corpus luteum degenerates → progesterone drops → endometrial shedding. Implantation occurs ~6 days post-fertilization.',
    level5: 'Endometrial receptivity (implantation window) requires progesterone-induced secretory transformation. Pinopodes are endometrial protrusions that facilitate embryo attachment. Decidualization transforms stromal cells for implantation. The myometrium remains quiescent via progesterone; labor involves progesterone withdrawal and oxytocin/prostaglandin sensitization.',
  },
  keyFacts: [
    'Three layers: endometrium, myometrium, perimetrium',
    'Normally anteverted and anteflexed',
    'Uterine artery crosses ureter ("water under the bridge")',
    'Endometrium regenerates from basalis layer',
    'Implantation occurs ~6 days post-fertilization',
  ],
  pathologies: [
    {
      name: 'Endometriosis',
      description: 'Endometrial tissue outside uterus',
      symptoms: ['Dysmenorrhea', 'Dyspareunia', 'Chronic pelvic pain', 'Infertility'],
      causes: ['Retrograde menstruation', 'Genetic factors'],
      relevantImaging: ['Pelvic ultrasound', 'MRI', 'Laparoscopy (gold standard)'],
    },
    {
      name: 'Uterine fibroids (leiomyomas)',
      description: 'Benign smooth muscle tumors',
      symptoms: ['Heavy menstrual bleeding', 'Pelvic pressure', 'Urinary frequency'],
      causes: ['Estrogen-dependent', 'Genetic'],
      relevantImaging: ['Pelvic ultrasound', 'MRI'],
    },
    {
      name: 'Endometrial cancer',
      description: 'Malignancy of endometrium, usually adenocarcinoma',
      symptoms: ['Postmenopausal bleeding', 'Abnormal uterine bleeding'],
      causes: ['Unopposed estrogen', 'Obesity', 'PCOS', 'Lynch syndrome'],
      relevantImaging: ['Transvaginal ultrasound', 'Endometrial biopsy'],
    },
  ],
  relevantLabs: ['β-hCG', 'CA-125'],
  relevantImaging: ['Transvaginal ultrasound', 'MRI pelvis', 'Hysteroscopy'],
  relatedStructures: ['fallopian-tube', 'ovary', 'cervix', 'vagina', 'bladder', 'rectum'],
});

femaleStructures.set('vagina', {
  id: 'vagina',
  name: 'Vagina',
  latinName: 'Vagina',
  fmaId: 'FMA:19949',
  type: 'duct',
  location: 'Between bladder/urethra anteriorly and rectum posteriorly',
  function: 'Birth canal, copulation, menstrual flow',
  dimensions: '~7-10 cm long',
  histology: 'Stratified squamous non-keratinized epithelium (no glands)',
  bloodSupply: ['Vaginal artery (from internal iliac)', 'Uterine artery branches'],
  venousDrainage: ['Vaginal venous plexus'],
  innervation: {
    sympathetic: 'Hypogastric plexus',
    parasympathetic: 'Pelvic splanchnic nerves',
    somatic: 'Pudendal nerve (lower vagina)',
  },
  explanations: {
    level1: 'The vagina is the birth canal and connects the uterus to outside the body.',
    level2: 'The vagina is a muscular tube that serves as the birth canal, receives the penis during intercourse, and allows menstrual blood to exit. Its acidic environment protects against infections.',
    level3: 'The vagina has no glands; lubrication comes from transudation and Bartholin glands. Normal flora (Lactobacillus) maintains acidic pH (3.8-4.5) that inhibits pathogens. The cervix projects into the upper vagina, creating fornices.',
    level4: 'Vaginal epithelium is estrogen-dependent; postmenopausal atrophy causes symptoms. Glycogen in epithelial cells is metabolized by Lactobacillus to lactic acid. The posterior fornix is the deepest, important for specimen collection and culdocentesis.',
    level5: 'Vaginal flora dominated by Lactobacillus species produces lactic acid and H₂O₂. Bacterial vaginosis reflects shift to anaerobic bacteria (Gardnerella, Prevotella). The vaginal microbiome influences STI susceptibility and pregnancy outcomes. Estrogen maintains epithelial thickness and glycogen content.',
  },
  keyFacts: [
    '~7-10 cm long, highly distensible',
    'Acidic pH (3.8-4.5) maintained by Lactobacillus',
    'No glands in vaginal wall itself',
    'Posterior fornix deepest (culdocentesis site)',
    'Stratified squamous epithelium, estrogen-dependent',
  ],
  pathologies: [
    {
      name: 'Bacterial vaginosis',
      description: 'Overgrowth of anaerobic bacteria',
      symptoms: ['Thin gray discharge', 'Fishy odor (worse after intercourse)', 'Often asymptomatic'],
      causes: ['Disruption of normal flora', 'Multiple partners'],
      labFindings: ['Clue cells', 'Positive whiff test', 'pH >4.5'],
    },
    {
      name: 'Vaginal candidiasis',
      description: 'Yeast infection',
      symptoms: ['Thick white "cottage cheese" discharge', 'Pruritus', 'Erythema'],
      causes: ['Candida albicans (usually)', 'Antibiotics', 'Diabetes', 'Pregnancy'],
    },
    {
      name: 'Vaginal atrophy',
      description: 'Thinning of vaginal epithelium due to estrogen loss',
      symptoms: ['Dryness', 'Dyspareunia', 'Burning', 'Recurrent UTIs'],
      causes: ['Menopause', 'Breastfeeding', 'Oophorectomy'],
    },
  ],
  relatedStructures: ['uterus', 'cervix', 'bladder', 'rectum', 'vulva'],
});

// ============================================================================
// GAMETOGENESIS
// ============================================================================

export const SPERMATOGENESIS: GametogenesisStage[] = [
  {
    stage: 'Spermatogonium',
    cellType: 'Type A (stem) and Type B (committed)',
    ploidy: '2n (diploid)',
    location: 'Basal compartment, near basement membrane',
    description: 'Mitotic division maintains stem cell pool and produces cells committed to meiosis',
    duration: '~16 days',
  },
  {
    stage: 'Primary spermatocyte',
    cellType: 'Preleptotene to pachytene',
    ploidy: '2n (diploid, 4C DNA)',
    location: 'Adluminal compartment (crosses blood-testis barrier)',
    description: 'Undergoes meiosis I; longest stage due to DNA replication and recombination',
    duration: '~24 days',
  },
  {
    stage: 'Secondary spermatocyte',
    cellType: 'Haploid cell before meiosis II',
    ploidy: 'n (haploid, 2C DNA)',
    location: 'Adluminal compartment',
    description: 'Brief stage; quickly undergoes meiosis II',
    duration: '~1 day',
  },
  {
    stage: 'Spermatid',
    cellType: 'Round then elongating',
    ploidy: 'n (haploid, 1C DNA)',
    location: 'Adluminal compartment, near lumen',
    description: 'Undergoes spermiogenesis: acrosome formation, flagellum development, nuclear condensation, cytoplasm removal',
    duration: '~24 days',
  },
  {
    stage: 'Spermatozoon',
    cellType: 'Mature sperm',
    ploidy: 'n (haploid)',
    location: 'Released into lumen',
    description: 'Structurally complete but not yet motile or capable of fertilization; needs epididymal maturation',
  },
];

export const OOGENESIS: GametogenesisStage[] = [
  {
    stage: 'Oogonium',
    cellType: 'Primordial germ cell',
    ploidy: '2n (diploid)',
    location: 'Fetal ovary',
    description: 'Mitotic proliferation during fetal development; reaches ~7 million by 20 weeks gestation',
    duration: 'Fetal period',
  },
  {
    stage: 'Primary oocyte',
    cellType: 'Arrested in prophase I',
    ploidy: '2n (diploid, 4C DNA)',
    location: 'Primordial follicle',
    description: 'Arrested in dictyate stage from fetal life until ovulation (up to 50 years)',
    duration: 'Birth to ovulation',
  },
  {
    stage: 'Secondary oocyte',
    cellType: 'Arrested in metaphase II',
    ploidy: 'n (haploid, 2C DNA)',
    location: 'Graafian follicle / Fallopian tube',
    description: 'Meiosis I completes at ovulation (LH surge); first polar body extruded; arrested at metaphase II',
    duration: 'Ovulation until fertilization',
  },
  {
    stage: 'Ovum (Ootid)',
    cellType: 'Mature egg',
    ploidy: 'n (haploid, 1C DNA)',
    location: 'Fallopian tube',
    description: 'Meiosis II completes only if fertilized by sperm; second polar body extruded',
  },
];

// ============================================================================
// MENSTRUAL CYCLE
// ============================================================================

export const MENSTRUAL_CYCLE_PHASES: MenstrualCyclePhase[] = [
  {
    name: 'Menstrual Phase',
    duration: '~5 days',
    dayRange: 'Days 1-5',
    ovarian: 'Early follicular (follicle recruitment)',
    uterine: 'Menstruation (shedding of functional layer)',
    hormones: [
      { name: 'Estrogen', level: 'low', source: 'Ovary' },
      { name: 'Progesterone', level: 'low', source: 'Corpus luteum (regressed)' },
      { name: 'FSH', level: 'rising', source: 'Pituitary' },
      { name: 'LH', level: 'low', source: 'Pituitary' },
    ],
    events: ['Endometrial shedding', 'FSH rises, recruiting follicles', 'Prostaglandins cause uterine contractions'],
  },
  {
    name: 'Follicular (Proliferative) Phase',
    duration: '~9 days (variable)',
    dayRange: 'Days 6-14',
    ovarian: 'Follicle selection and dominance',
    uterine: 'Proliferation (endometrium thickens)',
    hormones: [
      { name: 'Estrogen', level: 'rising', source: 'Dominant follicle (granulosa cells)' },
      { name: 'Progesterone', level: 'low', source: 'Ovary' },
      { name: 'FSH', level: 'falling', source: 'Pituitary' },
      { name: 'LH', level: 'low', source: 'Pituitary' },
    ],
    events: ['Dominant follicle selected', 'Estrogen stimulates endometrial proliferation', 'Negative feedback on FSH'],
  },
  {
    name: 'Ovulation',
    duration: '~24-36 hours',
    dayRange: 'Day ~14',
    ovarian: 'Follicle rupture, oocyte release',
    uterine: 'Transition to secretory',
    hormones: [
      { name: 'Estrogen', level: 'peak', source: 'Dominant follicle' },
      { name: 'LH', level: 'peak', source: 'Pituitary (LH surge)' },
      { name: 'FSH', level: 'rising', source: 'Pituitary (FSH surge)' },
    ],
    events: ['LH surge triggers ovulation (~36 hours later)', 'Meiosis I resumes', 'Cervical mucus becomes thin (spinnbarkeit)'],
  },
  {
    name: 'Luteal (Secretory) Phase',
    duration: '~14 days (fixed)',
    dayRange: 'Days 15-28',
    ovarian: 'Corpus luteum formation and function',
    uterine: 'Secretory changes (gland coiling, glycogen)',
    hormones: [
      { name: 'Progesterone', level: 'high', source: 'Corpus luteum' },
      { name: 'Estrogen', level: 'high', source: 'Corpus luteum' },
      { name: 'LH', level: 'falling', source: 'Pituitary' },
      { name: 'FSH', level: 'low', source: 'Pituitary' },
    ],
    events: ['Corpus luteum produces progesterone', 'Endometrium becomes secretory', 'Basal body temperature rises', 'Without pregnancy, corpus luteum degenerates'],
  },
];

// ============================================================================
// REPRODUCTIVE HORMONES
// ============================================================================

export const REPRODUCTIVE_HORMONES: ReproductiveHormone[] = [
  {
    id: 'gnrh',
    name: 'Gonadotropin-Releasing Hormone',
    abbreviation: 'GnRH',
    source: 'Hypothalamus (arcuate nucleus)',
    targetTissues: ['Anterior pituitary (gonadotrophs)'],
    functions: ['Stimulates FSH and LH release', 'Pulsatile secretion essential'],
    regulation: {
      stimulatedBy: ['Kisspeptin', 'Norepinephrine'],
      inhibitedBy: ['Sex steroids (negative feedback)', 'Continuous GnRH (downregulation)'],
    },
    clinicalNote: 'GnRH agonists (continuous) used for prostate cancer, endometriosis; GnRH antagonists for ART',
  },
  {
    id: 'fsh',
    name: 'Follicle-Stimulating Hormone',
    abbreviation: 'FSH',
    source: 'Anterior pituitary (gonadotrophs)',
    targetTissues: ['Ovary (granulosa cells)', 'Testis (Sertoli cells)'],
    functions: ['Follicle development (female)', 'Spermatogenesis support (male)'],
    regulation: {
      stimulatedBy: ['GnRH', 'Activin'],
      inhibitedBy: ['Inhibin', 'Estrogen (negative feedback)'],
    },
    normalRangeMale: '1.5-12 mIU/mL',
    normalRangeFemale: '3-10 mIU/mL (follicular), 2-8 mIU/mL (luteal), surge at ovulation',
    clinicalNote: 'Elevated FSH indicates ovarian failure (female) or testicular failure (male)',
  },
  {
    id: 'lh',
    name: 'Luteinizing Hormone',
    abbreviation: 'LH',
    source: 'Anterior pituitary (gonadotrophs)',
    targetTissues: ['Ovary (theca cells, corpus luteum)', 'Testis (Leydig cells)'],
    functions: ['Triggers ovulation', 'Corpus luteum formation', 'Testosterone production (male)'],
    regulation: {
      stimulatedBy: ['GnRH', 'Estrogen (positive feedback at high levels)'],
      inhibitedBy: ['Testosterone', 'Progesterone', 'Estrogen (negative feedback at low levels)'],
    },
    normalRangeMale: '1.5-9 mIU/mL',
    normalRangeFemale: '2-15 mIU/mL (follicular), 20-80 mIU/mL (mid-cycle surge), 1-12 mIU/mL (luteal)',
    clinicalNote: 'LH surge triggers ovulation; LH:FSH ratio >2:1 suggests PCOS',
  },
  {
    id: 'estrogen',
    name: 'Estrogen (Estradiol)',
    abbreviation: 'E2',
    source: 'Ovary (granulosa cells), Placenta, Adipose tissue',
    targetTissues: ['Uterus', 'Breast', 'Bone', 'Brain', 'Liver', 'Cardiovascular system'],
    functions: ['Endometrial proliferation', 'Secondary sex characteristics', 'Bone maintenance', 'HDL increase'],
    regulation: {
      stimulatedBy: ['FSH (aromatase induction)'],
      inhibitedBy: ['Menopause (ovarian failure)'],
    },
    normalRangeFemale: '30-400 pg/mL depending on cycle phase',
    normalRangeMale: '10-40 pg/mL',
    clinicalNote: 'Deficiency causes menopausal symptoms, osteoporosis; excess linked to breast/endometrial cancer',
  },
  {
    id: 'progesterone',
    name: 'Progesterone',
    abbreviation: 'P4',
    source: 'Corpus luteum, Placenta',
    targetTissues: ['Uterus', 'Breast', 'Brain'],
    functions: ['Secretory endometrium', 'Pregnancy maintenance', 'Thermogenic (raises BBT)'],
    regulation: {
      stimulatedBy: ['LH'],
      inhibitedBy: ['Corpus luteum regression'],
    },
    normalRangeFemale: '<1 ng/mL (follicular), >10 ng/mL (luteal, confirms ovulation)',
    clinicalNote: 'Low progesterone in luteal phase deficiency; supplemented in early pregnancy',
  },
  {
    id: 'testosterone',
    name: 'Testosterone',
    abbreviation: 'T',
    source: 'Testis (Leydig cells), Ovary, Adrenal cortex',
    targetTissues: ['Reproductive organs', 'Muscle', 'Bone', 'Brain', 'Skin'],
    functions: ['Spermatogenesis', 'Secondary sex characteristics', 'Muscle mass', 'Libido'],
    regulation: {
      stimulatedBy: ['LH'],
      inhibitedBy: ['Testosterone (negative feedback on GnRH, LH)'],
    },
    normalRangeMale: '300-1000 ng/dL',
    normalRangeFemale: '15-70 ng/dL',
    clinicalNote: 'Low testosterone causes hypogonadism symptoms; high in females suggests PCOS or tumor',
  },
  {
    id: 'hcg',
    name: 'Human Chorionic Gonadotropin',
    abbreviation: 'hCG',
    source: 'Syncytiotrophoblast (placenta)',
    targetTissues: ['Corpus luteum'],
    functions: ['Maintains corpus luteum in early pregnancy', 'Stimulates progesterone production'],
    regulation: {
      stimulatedBy: ['Implantation'],
      inhibitedBy: ['Declining trophoblast function'],
    },
    clinicalNote: 'Pregnancy test marker; abnormal levels suggest ectopic, molar pregnancy, or miscarriage',
  },
];

// ============================================================================
// PREGNANCY MILESTONES
// ============================================================================

export const PREGNANCY_MILESTONES: PregnancyMilestone[] = [
  {
    week: 4,
    trimester: 1,
    fetalDevelopment: ['Implantation complete', 'Neural plate forming', 'Heart tube forming'],
    maternalChanges: ['Missed period', 'hCG detectable'],
    keyEvents: ['Positive pregnancy test possible'],
  },
  {
    week: 8,
    trimester: 1,
    fetalDevelopment: ['All major organs forming', 'Heart beating', 'Limb buds present', 'Face forming'],
    maternalChanges: ['Morning sickness common', 'Breast tenderness', 'Fatigue'],
    keyEvents: ['Embryo now called fetus', 'Critical period for teratogens'],
  },
  {
    week: 12,
    trimester: 1,
    fetalDevelopment: ['External genitalia distinguishable', 'Kidneys producing urine', 'Reflexes developing'],
    maternalChanges: ['Uterus palpable above pubic symphysis', 'Morning sickness often improving'],
    keyEvents: ['First trimester screening (NT, PAPP-A, β-hCG)', 'Miscarriage risk decreasing'],
  },
  {
    week: 20,
    trimester: 2,
    fetalDevelopment: ['Quickening (mother feels movement)', 'Vernix caseosa forming', 'Lanugo covering body'],
    maternalChanges: ['Fundal height at umbilicus', 'Second trimester energy boost'],
    keyEvents: ['Anatomy scan (20-week ultrasound)', 'Sex often determinable'],
  },
  {
    week: 28,
    trimester: 3,
    fetalDevelopment: ['Eyes open', 'Surfactant production begins', 'Viable with intensive care'],
    maternalChanges: ['Third trimester begins', 'Braxton Hicks contractions', 'Increased urinary frequency'],
    keyEvents: ['Viability milestone', 'Rh immunoglobulin if Rh negative', 'Glucose tolerance test'],
  },
  {
    week: 36,
    trimester: 3,
    fetalDevelopment: ['Lungs nearly mature', 'Head engaging in pelvis', 'Gaining ~200g/week'],
    maternalChanges: ['Lightening (baby drops)', 'Cervical ripening begins', 'Pelvic pressure'],
    keyEvents: ['Late preterm if born now', 'GBS screening'],
  },
  {
    week: 40,
    trimester: 3,
    fetalDevelopment: ['Full term', 'Average weight 3.4 kg', 'Mature lungs and organs'],
    maternalChanges: ['Cervical effacement and dilation', 'Rupture of membranes', 'Labor'],
    keyEvents: ['Expected date of delivery', 'Post-dates induction discussed after 41 weeks'],
  },
];

// ============================================================================
// API FUNCTIONS
// ============================================================================

/**
 * Get a male reproductive structure by ID
 */
export function getMaleStructure(id: string): MaleReproductiveStructure | undefined {
  return maleStructures.get(id);
}

/**
 * Get all male reproductive structures
 */
export function getAllMaleStructures(): MaleReproductiveStructure[] {
  return Array.from(maleStructures.values());
}

/**
 * Get a female reproductive structure by ID
 */
export function getFemaleStructure(id: string): FemaleReproductiveStructure | undefined {
  return femaleStructures.get(id);
}

/**
 * Get all female reproductive structures
 */
export function getAllFemaleStructures(): FemaleReproductiveStructure[] {
  return Array.from(femaleStructures.values());
}

/**
 * Search reproductive structures
 */
export function searchReproductive(query: string): (MaleReproductiveStructure | FemaleReproductiveStructure)[] {
  const lowerQuery = query.toLowerCase();
  const results: (MaleReproductiveStructure | FemaleReproductiveStructure)[] = [];

  for (const structure of maleStructures.values()) {
    if (
      structure.name.toLowerCase().includes(lowerQuery) ||
      structure.function.toLowerCase().includes(lowerQuery)
    ) {
      results.push(structure);
    }
  }

  for (const structure of femaleStructures.values()) {
    if (
      structure.name.toLowerCase().includes(lowerQuery) ||
      structure.function.toLowerCase().includes(lowerQuery)
    ) {
      results.push(structure);
    }
  }

  return results;
}

/**
 * Get explanation at a specific level
 */
export function getReproductiveExplanation(
  id: string,
  level: 1 | 2 | 3 | 4 | 5
): string | undefined {
  const male = maleStructures.get(id);
  if (male) return male.explanations[`level${level}`];

  const female = femaleStructures.get(id);
  if (female) return female.explanations[`level${level}`];

  return undefined;
}

/**
 * Get reproductive hormone by ID
 */
export function getReproductiveHormone(id: string): ReproductiveHormone | undefined {
  return REPRODUCTIVE_HORMONES.find((h) => h.id === id);
}

/**
 * Get reproductive system statistics
 */
export function getReproductiveStatistics(): ReproductiveStatistics {
  return {
    maleStructures: maleStructures.size,
    femaleStructures: femaleStructures.size,
    hormones: REPRODUCTIVE_HORMONES.length,
    menstrualCycleLength: '~28 days (21-35 normal range)',
    gestationLength: '~40 weeks (280 days)',
  };
}
