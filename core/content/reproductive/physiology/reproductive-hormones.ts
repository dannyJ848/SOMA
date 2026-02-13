import { EducationalContent } from '../../types';

export const reproductiveHormonesContent: EducationalContent = {
  id: 'reproductive-hormones',
  type: 'process',
  name: 'Reproductive Hormones',
  alternateNames: ['Sex hormones', 'Gonadal hormones', 'Gonadotropins'],
  levels: {
    1: {
      level: 1,
      summary: 'Reproductive hormones are chemical messengers that control puberty, fertility, and sexual development in both males and females.',
      explanation: `Reproductive hormones are like text messages that your brain sends to different parts of your body to control how you grow and develop.

**The Main Hormones:**

**In Everyone:**
- **FSH (Follicle Stimulating Hormone)**: Helps eggs and sperm develop
- **LH (Luteinizing Hormone)**: Triggers release of eggs and helps make other hormones

**In People with Ovaries:**
- **Estrogen**: Helps with puberty changes like breast development, causes the uterus lining to grow, and affects mood
- **Progesterone**: Prepares the uterus for pregnancy and helps maintain it

**In People with Testes:**
- **Testosterone**: Causes puberty changes like voice deepening, muscle growth, facial hair, and sperm production

**What These Hormones Do:**

1. **During puberty**: They cause all the changes that turn kids into adults - growth spurts, body hair, voice changes, and development of reproductive organs

2. **For fertility**: They help make eggs and sperm, and prepare the body for pregnancy

3. **Throughout life**: They continue to affect mood, energy, bone health, and many other body functions

Hormone levels change throughout life - they increase during puberty, fluctuate monthly in menstrual cycles, and decrease with age.`,
      keyTerms: [
        { term: 'Hormone', definition: 'A chemical messenger made in one part of the body that travels through blood to affect other parts' },
        { term: 'Estrogen', definition: 'The main female sex hormone that controls puberty changes and the menstrual cycle' },
        { term: 'Testosterone', definition: 'The main male sex hormone that controls puberty changes and sperm production' },
        { term: 'Puberty', definition: 'The time when a child\'s body changes into an adult body capable of reproduction' },
      ],
      analogies: [
        'Hormones are like text messages from your brain telling different body parts what to do',
        'Think of hormones as conductors of an orchestra, coordinating all the different instruments (organs) to play together',
      ],
      patientCounselingPoints: [
        'Hormone changes during puberty can affect mood and emotions - this is normal',
        'Everyone develops at different rates',
        'If you have concerns about development, talk to a doctor',
      ],
    },
    2: {
      level: 2,
      summary: 'Reproductive hormones work through a feedback system between the brain (hypothalamus and pituitary) and the gonads to regulate sexual development, menstrual cycles, and fertility.',
      explanation: `Reproductive hormones are controlled by a communication system between your brain and reproductive organs.

**The Hormone Hierarchy:**

**1. Hypothalamus (Brain)**
- Releases GnRH (Gonadotropin-Releasing Hormone)
- Acts as the master controller

**2. Pituitary Gland (Base of Brain)**
- Receives signals from hypothalamus
- Releases FSH and LH into bloodstream
- FSH: Stimulates egg/sperm development
- LH: Triggers ovulation and hormone production

**3. Gonads (Ovaries or Testes)**
- Receive FSH and LH signals
- Produce sex hormones (estrogen, progesterone, testosterone)
- Produce eggs or sperm

**Key Hormones and Functions:**

| Hormone | Made In | Main Functions |
|---------|---------|----------------|
| Estrogen | Ovaries, fat tissue | Breast development, uterine lining growth, bone health |
| Progesterone | Ovaries (corpus luteum) | Prepares uterus for pregnancy, maintains early pregnancy |
| Testosterone | Testes, adrenals, ovaries | Muscle mass, bone density, libido, sperm production |
| FSH | Pituitary | Follicle development, sperm production |
| LH | Pituitary | Ovulation trigger, testosterone production |

**Feedback Loops:**
- When sex hormone levels are high, they signal the brain to reduce FSH/LH
- When sex hormone levels are low, the brain increases FSH/LH
- This keeps hormone levels balanced (homeostasis)

**Hormone Changes Through Life:**
- Childhood: Low levels, gonads inactive
- Puberty: Hormones increase, triggering development
- Reproductive years: Cyclic patterns in females, steady in males
- Menopause/Andropause: Hormone levels decline`,
      keyTerms: [
        { term: 'Gonadotropins', definition: 'Hormones from the pituitary (FSH and LH) that stimulate the gonads' },
        { term: 'Feedback loop', definition: 'A system where the output affects the input - hormones regulate their own production' },
        { term: 'Gonads', definition: 'The reproductive organs that make eggs or sperm - ovaries in females, testes in males' },
        { term: 'Pituitary gland', definition: 'A pea-sized gland at the base of the brain that controls many hormones' },
        { term: 'GnRH', definition: 'Gonadotropin-releasing hormone; the brain signal that starts the hormone cascade' },
      ],
      examples: [
        'Birth control pills work by providing steady estrogen and progesterone, which tells the brain not to release FSH and LH, preventing ovulation',
        'Testosterone therapy in low-T conditions provides the hormone the body isn\'t making enough of',
      ],
    },
    3: {
      level: 3,
      summary: 'The hypothalamic-pituitary-gonadal axis coordinates reproductive function through pulsatile GnRH release, gonadotropin secretion, and steroid hormone feedback, with distinct patterns in males and females.',
      explanation: `The reproductive endocrine system operates through the hypothalamic-pituitary-gonadal (HPG) axis, utilizing both negative and positive feedback mechanisms.

**Hypothalamic Regulation:**

**GnRH Secretion**
- Released in pulsatile fashion from the arcuate nucleus
- Pulse frequency determines FSH vs. LH predominance
- Fast pulses (every 60-90 min): Favor LH secretion
- Slow pulses (every 2-4 hours): Favor FSH secretion
- Kisspeptin neurons regulate GnRH pulse generator

**Pituitary Gonadotropins:**

**FSH (Follicle-Stimulating Hormone)**
- Heterodimeric glycoprotein (α and β subunits)
- Female: Stimulates follicular development and aromatase activity
- Male: Stimulates Sertoli cells and spermatogenesis
- Regulated by inhibin (negative feedback)

**LH (Luteinizing Hormone)**
- Shares α subunit with FSH, hCG, and TSH
- Female: Triggers ovulation, stimulates theca cells and corpus luteum
- Male: Stimulates Leydig cells to produce testosterone
- Regulated by sex steroids

**Gonadal Steroid Hormones:**

**Estrogens**
- Estradiol (E2): Most potent, primary ovarian estrogen
- Estrone (E1): From peripheral conversion, predominates after menopause
- Estriol (E3): Weakest, produced by placenta during pregnancy
- Synthesis: Aromatization of androgens
- Effects: Reproductive tract development, bone mineralization, lipid metabolism

**Progesterone**
- Produced by corpus luteum and placenta
- Effects: Endometrial transformation, pregnancy maintenance, breast development
- Thermogenic effect raises basal body temperature after ovulation

**Androgens**
- Testosterone: Primary androgen
- DHT (dihydrotestosterone): More potent, peripheral conversion by 5α-reductase
- DHEA/DHEA-S: Adrenal androgens
- Effects: Spermatogenesis, secondary sex characteristics, muscle mass, libido

**Feedback Mechanisms:**

**Negative Feedback**
- Sex steroids inhibit GnRH pulse frequency and pituitary responsiveness
- Inhibin B (male) and inhibin A (female) specifically inhibit FSH

**Positive Feedback**
- Unique to females: High sustained estrogen triggers LH surge
- Requires estrogen >200 pg/mL for >50 hours
- Mediated by hypothalamic kisspeptin activation`,
      keyTerms: [
        { term: 'HPG axis', definition: 'Hypothalamic-pituitary-gonadal axis; the hormonal control system regulating reproduction' },
        { term: 'Aromatase', definition: 'Enzyme (CYP19A1) that converts androgens to estrogens' },
        { term: '5α-reductase', definition: 'Enzyme that converts testosterone to the more potent DHT', pronunciation: 'five-alpha-re-DUK-tase' },
        { term: 'Inhibin', definition: 'Glycoprotein hormone from gonads that specifically inhibits FSH secretion' },
        { term: 'Leydig cells', definition: 'Testicular interstitial cells that produce testosterone in response to LH' },
        { term: 'Sertoli cells', definition: 'Testicular cells that support spermatogenesis and produce inhibin B' },
      ],
      examples: [
        'GnRH agonists initially cause hormone surge (flare) but continuous administration leads to receptor downregulation and hormone suppression - used to treat prostate cancer and endometriosis',
        '5α-reductase inhibitors (finasteride) block DHT production, treating both benign prostatic hyperplasia and male pattern baldness',
      ],
    },
    4: {
      level: 4,
      summary: 'Reproductive endocrinology involves complex molecular signaling including steroid hormone receptor activation, transcriptional regulation, and intricate paracrine networks within the gonads.',
      explanation: `**Molecular Mechanisms of Hormone Action:**

**GnRH Signaling**
- GnRH receptor: GPCR coupled to Gq/11
- Activates phospholipase C → IP3 and DAG
- IP3 → Ca²⁺ release from ER
- DAG → PKC activation
- Results in gonadotropin gene transcription and secretion
- Receptor internalization leads to downregulation with continuous exposure

**Gonadotropin Receptors**
- FSH-R and LH-R: GPCRs coupled to Gs
- Activate adenylyl cyclase → cAMP → PKA
- Phosphorylate CREB and other transcription factors
- FSH-R: Exclusively on granulosa and Sertoli cells
- LH-R: Theca cells, mature granulosa cells, Leydig cells

**Steroid Hormone Synthesis:**

**Cholesterol to Pregnenolone**
- Rate-limiting step: StAR protein transports cholesterol to inner mitochondrial membrane
- CYP11A1 (P450scc) cleaves side chain
- Acute regulation: StAR, TSPO proteins
- Chronic regulation: Gene expression of steroidogenic enzymes

**Steroidogenic Pathways**
- Δ5 pathway: Pregnenolone → 17α-OH-pregnenolone → DHEA → androstenediol → testosterone
- Δ4 pathway: Pregnenolone → progesterone → 17α-OH-progesterone → androstenedione → testosterone
- Key enzymes: CYP17A1 (17α-hydroxylase/17,20-lyase), 3β-HSD, 17β-HSD

**Two-Cell Model of Estrogen Synthesis**
- Theca cells: LH → CYP17A1 → androstenedione
- Granulosa cells: FSH → CYP19A1 (aromatase) → estradiol
- Androgens diffuse from theca to granulosa for aromatization

**Steroid Hormone Receptors:**

**Nuclear Receptor Mechanism**
- Lipophilic hormones cross membrane freely
- Bind cytoplasmic or nuclear receptors
- Receptor dimerization and DNA binding (HREs)
- Recruit coactivators/corepressors
- Modulate gene transcription

**Receptor Types**
- ER-α: Uterus, breast, bone, cardiovascular
- ER-β: Ovary, prostate, brain
- PR-A and PR-B: Different functions in reproductive tissues
- AR: Muscle, prostate, skin, brain

**Non-Genomic Actions**
- Membrane-associated receptors (GPER for estrogen)
- Rapid signaling via MAPK, PI3K pathways
- Effects within minutes (vs. hours for genomic)

**Paracrine Signaling in Gonads:**

**Ovarian Paracrine Factors**
- AMH: Inhibits primordial follicle recruitment
- Activin/Inhibin: Regulate FSH and follicular development
- GDF-9, BMP-15: Oocyte-secreted factors essential for folliculogenesis
- IGF system: Amplifies gonadotropin action

**Testicular Paracrine Factors**
- ABP (androgen-binding protein): Concentrates testosterone near developing sperm
- SCF (stem cell factor): Sertoli-Leydig communication
- TGF-β family members: Regulate spermatogenesis`,
      keyTerms: [
        { term: 'StAR protein', definition: 'Steroidogenic acute regulatory protein; rate-limiting transporter of cholesterol into mitochondria for steroid synthesis' },
        { term: 'CYP17A1', definition: 'Cytochrome P450 enzyme with dual 17α-hydroxylase and 17,20-lyase activities, key for androgen synthesis' },
        { term: 'GPER', definition: 'G protein-coupled estrogen receptor; mediates rapid non-genomic estrogen signaling' },
        { term: 'HRE', definition: 'Hormone response element; DNA sequence where steroid hormone receptor complexes bind' },
        { term: 'Coactivator', definition: 'Protein that enhances transcriptional activation when recruited by hormone-receptor complexes' },
      ],
      clinicalNotes: 'Understanding steroidogenic enzyme pathways is essential for interpreting congenital adrenal hyperplasia phenotypes. 21-hydroxylase deficiency (CYP21A2 mutation) causes cortisol deficiency with androgen excess, while 17α-hydroxylase deficiency causes cortisol deficiency with mineralocorticoid excess and absent androgens.',
    },
    5: {
      level: 5,
      summary: 'Clinical reproductive endocrinology encompasses diagnosis and management of hormonal disorders through targeted testing, pharmacologic manipulation of the HPG axis, and emerging therapies including kisspeptin analogs and gene therapy approaches.',
      explanation: `**Clinical Evaluation of the HPG Axis:**

**Female Reproductive Hormone Assessment**

*Ovarian Reserve Testing*
- Day 3 FSH/estradiol: FSH >10 IU/L or E2 >80 pg/mL suggests diminished reserve
- AMH: <1.0 ng/mL concerning; >3.5 may indicate PCOS
- Antral follicle count (AFC): <5 poor prognosis, >12 good reserve
- Clomiphene citrate challenge test: Largely replaced by AMH/AFC

*Ovulatory Function*
- Mid-luteal progesterone (day 21-23): >3 ng/mL confirms ovulation
- Urinary LH surge detection: Ovulation ~24-36 hours after positive
- Basal body temperature: 0.3-0.5°C rise with progesterone
- Endometrial biopsy: Secretory changes confirm ovulation (rarely used now)

*Hyperandrogenism Workup*
- Total and free testosterone
- DHEA-S: Adrenal source if elevated
- 17-OHP: Screen for non-classic CAH if >200 ng/dL
- Consider dexamethasone suppression if Cushing syndrome suspected

**Male Reproductive Hormone Assessment**

*Hypogonadism Evaluation*
- Early morning total testosterone (2 samples): <300 ng/dL = low
- Free testosterone or bioavailable testosterone
- SHBG: Elevated in liver disease, aging, hyperthyroidism
- LH/FSH: Distinguishes primary (high) from secondary (low/normal) hypogonadism
- Prolactin: Elevated in pituitary lesions
- Semen analysis: Assess impact on fertility

**Pharmacologic Manipulation:**

**GnRH Agonists (leuprolide, goserelin, nafarelin)**
- Initial flare effect (1-2 weeks)
- Continuous exposure → receptor downregulation
- Indications: Prostate cancer, endometriosis, uterine fibroids, precocious puberty
- Add-back therapy: Low-dose hormones to prevent bone loss

**GnRH Antagonists (cetrorelix, ganirelix, degarelix)**
- Immediate suppression without flare
- IVF: Prevent premature LH surge
- Prostate cancer: Immediate castrate levels

**Selective Estrogen Receptor Modulators (SERMs)**
- Tamoxifen: Antagonist in breast, agonist in bone/uterus
- Raloxifene: Antagonist in breast/uterus, agonist in bone
- Clomiphene: Antagonist in hypothalamus → increased GnRH/gonadotropins

**Aromatase Inhibitors**
- Letrozole, anastrozole: Block peripheral estrogen synthesis
- First-line ovulation induction in PCOS
- Breast cancer adjuvant therapy

**Androgens and Anti-androgens**
- Testosterone: TRT for hypogonadism (gel, injection, patch)
- Spironolactone: AR antagonist, used for hirsutism/acne
- 5α-reductase inhibitors: Block DHT formation

**Emerging Therapies:**

**Kisspeptin-Based Treatments**
- Kisspeptin-54: Short-acting GnRH stimulation
- Potential for ovulation induction with lower OHSS risk
- May restore pulsatility in hypothalamic amenorrhea

**Selective Progesterone Receptor Modulators (SPRMs)**
- Ulipristal acetate: Fibroid treatment, emergency contraception
- Tissue-selective effects on progesterone signaling

**Gene Therapy Approaches**
- Research in Kallmann syndrome (KAL1, FGFR1 mutations)
- Potential for restoration of GnRH neuron function

**Clinical Pearls:**

1. Testosterone assays vary significantly - use same lab for monitoring
2. Biotin supplements interfere with many immunoassays - hold for 48 hours
3. Oral estrogen increases SHBG, potentially lowering free testosterone
4. GnRH agonist flare can exacerbate symptoms initially
5. AMH not affected by OCPs (unlike FSH), useful in women on contraception`,
      keyTerms: [
        { term: 'SHBG', definition: 'Sex hormone-binding globulin; carrier protein that affects free hormone levels, synthesized in liver' },
        { term: 'Non-classic CAH', definition: 'Late-onset congenital adrenal hyperplasia presenting as hyperandrogenism in adolescence/adulthood' },
        { term: 'Add-back therapy', definition: 'Low-dose hormones given with GnRH agonists to prevent bone loss while maintaining therapeutic suppression' },
        { term: 'Kisspeptin', definition: 'Neuropeptide product of KISS1 gene that activates GnRH neurons; emerging therapeutic target' },
        { term: 'Bioavailable testosterone', definition: 'Free testosterone plus albumin-bound testosterone; better reflects biologically active hormone than total testosterone' },
      ],
      clinicalNotes: 'The Endocrine Society guidelines recommend testosterone therapy only in men with unequivocally low morning testosterone (<300 ng/dL on two occasions) AND clinical symptoms. Monitor hematocrit (risk of erythrocytosis), PSA, and lipids. Exogenous testosterone suppresses spermatogenesis - counsel regarding fertility implications before initiating therapy.',
    },
  },
  media: [],
  citations: [
    {
      id: 'ref-1',
      type: 'textbook',
      title: 'Williams Textbook of Endocrinology',
      authors: ['Melmed, S.', 'Polonsky, K.S.', 'Larsen, P.R.', 'Kronenberg, H.M.'],
      source: 'Elsevier',
      chapter: 'Chapters on Reproductive Endocrinology',
      license: 'Proprietary',
    },
    {
      id: 'ref-2',
      type: 'article',
      title: 'Testosterone Therapy in Men With Hypogonadism: An Endocrine Society Clinical Practice Guideline',
      source: 'Journal of Clinical Endocrinology & Metabolism',
      authors: ['Bhasin, S.', 'et al.'],
      url: 'https://doi.org/10.1210/jc.2018-00229',
    },
  ],
  crossReferences: [
    { targetId: 'reproductive-menstrual-cycle', targetType: 'process', relationship: 'related', label: 'Menstrual Cycle' },
    { targetId: 'reproductive-fertility', targetType: 'process', relationship: 'related', label: 'Fertility' },
    { targetId: 'reproductive-pcos', targetType: 'condition', relationship: 'related', label: 'PCOS' },
  ],
  tags: {
    systems: ['reproductive', 'endocrine'],
    topics: ['physiology', 'endocrinology', 'hormones'],
    keywords: ['estrogen', 'testosterone', 'progesterone', 'FSH', 'LH', 'GnRH', 'HPG axis', 'gonadotropins'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['obstetrics-gynecology', 'endocrinology'],
    },
  },
  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
