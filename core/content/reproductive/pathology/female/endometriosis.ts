import { EducationalContent } from '../../../types';

export const endometriosisContent: EducationalContent = {
  id: 'reproductive-endometriosis',
  type: 'condition',
  name: 'Endometriosis',
  alternateNames: ['Endo', 'Endometriotic disease'],
  levels: {
    1: {
      level: 1,
      summary: 'Endometriosis is a condition where tissue similar to the uterus lining grows outside the uterus, causing pain and sometimes difficulty getting pregnant.',
      explanation: `Endometriosis happens when tissue that is similar to the lining inside the uterus (called endometrium) grows in places where it should not be, like on the ovaries, fallopian tubes, or other areas in the pelvis.

**What Happens:**
- This tissue acts like uterine lining - it thickens, breaks down, and bleeds with each period
- But unlike menstrual blood that leaves the body, this blood has nowhere to go
- This causes irritation, inflammation, scar tissue, and pain

**Common Symptoms:**
- Painful periods (dysmenorrhea) - often worse over time
- Chronic pelvic pain
- Pain during or after sex
- Pain with bowel movements or urination
- Heavy periods
- Fatigue
- Difficulty getting pregnant

**How Common Is It?**
- Affects about 1 in 10 women and people with uteruses
- Often starts in teenage years
- Can take years to diagnose

**Where Does It Grow?**
- Ovaries (can form cysts called "chocolate cysts")
- Fallopian tubes
- Outside of the uterus
- Tissue lining the pelvis
- Bladder, bowel (less common)

**Treatment Options:**
- Pain medications
- Hormonal treatments (birth control pills, IUDs)
- Surgery to remove the tissue
- Fertility treatments if having trouble getting pregnant

**Important to Know:**
- Endometriosis is real and not just "bad periods"
- Treatment can help manage symptoms
- Many people with endometriosis have successful pregnancies`,
      keyTerms: [
        { term: 'Endometriosis', definition: 'A condition where tissue similar to uterus lining grows outside the uterus' },
        { term: 'Endometrium', definition: 'The tissue that lines the inside of the uterus' },
        { term: 'Dysmenorrhea', definition: 'Medical term for painful menstrual cramps' },
        { term: 'Adhesions', definition: 'Bands of scar tissue that can form between organs' },
      ],
      analogies: [
        'Endometriosis is like having monthly skin that sheds - but trapped inside where it causes inflammation',
        'The tissue is like a plant growing in the wrong place - it does not belong there but still goes through its normal cycle',
      ],
      patientCounselingPoints: [
        'Your pain is real and deserves treatment',
        'It can take time to find the right treatment approach',
        'Many people with endometriosis have babies',
        'Keeping a symptom diary can help your doctor understand your experience',
      ],
    },
    2: {
      level: 2,
      summary: 'Endometriosis involves ectopic endometrial-like tissue causing inflammation, pain, and infertility. Diagnosis often requires surgery, but empiric treatment based on clinical suspicion is appropriate. Management includes hormonal suppression and surgery.',
      explanation: `Endometriosis affects 6-10% of reproductive-age women and is found in up to 50% of women with infertility or chronic pelvic pain.

**Pathology:**
- Endometrial glands and stroma outside the uterine cavity
- Responds to hormonal cycles (estrogen-dependent)
- Causes chronic inflammation and fibrosis
- Can distort pelvic anatomy

**Common Locations:**
- Ovaries (endometriomas/"chocolate cysts")
- Uterosacral ligaments
- Posterior cul-de-sac
- Bladder, ureter, bowel
- Rarely: Lungs, diaphragm, surgical scars

**Clinical Manifestations:**

*Pain (dysmenorrhea, dyspareunia, chronic pelvic pain)*
- Classically begins before menses, persists throughout
- Often progressive over years
- Severity may not correlate with disease extent

*Infertility*
- 30-50% of women with endometriosis are infertile
- Mechanisms: Tubal/ovarian distortion, inflammation, altered implantation

*Other Symptoms*
- Dyschezia (painful bowel movements)
- Dysuria
- Heavy or irregular periods
- Fatigue

**Diagnosis:**

*Clinical*
- History: Cyclic pain, dysmenorrhea, family history
- Exam: Uterosacral nodularity, adnexal mass, fixed uterus

*Imaging*
- Ultrasound: Endometriomas (homogeneous low-level echoes)
- MRI: Better for deep infiltrating endometriosis

*Definitive*
- Laparoscopy with histologic confirmation (gold standard)
- However, empiric treatment is often started based on clinical presentation

**Staging (ASRM):**
- Stage I (Minimal): Isolated implants, no significant adhesions
- Stage II (Mild): More implants, minimal adhesions
- Stage III (Moderate): Endometriomas, more adhesions
- Stage IV (Severe): Large endometriomas, dense adhesions

*Note: Staging does not correlate well with symptoms or fertility outcomes*

**Treatment:**

**Medical (Hormonal Suppression)**
- NSAIDs for pain
- Combined oral contraceptives (continuous use preferred)
- Progestins (oral, IUD, injection)
- GnRH agonists (with add-back therapy)
- GnRH antagonists (elagolix)

**Surgical**
- Laparoscopic excision or ablation of implants
- Cystectomy for endometriomas
- Adhesiolysis
- Hysterectomy ± oophorectomy (definitive, for completed childbearing)

**For Infertility**
- Surgical treatment of moderate-severe disease may improve fertility
- IVF often most effective, especially for significant disease`,
      keyTerms: [
        { term: 'Endometrioma', definition: 'Ovarian cyst filled with old blood from endometriosis; also called chocolate cyst' },
        { term: 'Dyspareunia', definition: 'Pain during or after sexual intercourse' },
        { term: 'GnRH agonist', definition: 'Medication that suppresses ovarian hormones; creates temporary menopause-like state' },
        { term: 'Add-back therapy', definition: 'Low-dose hormone replacement given with GnRH agonists to prevent bone loss and symptoms' },
        { term: 'Deep infiltrating endometriosis', definition: 'Endometriosis that penetrates >5mm into affected tissue; often more symptomatic' },
      ],
      examples: [
        'A woman with progressive dysmenorrhea starting in teens, dyspareunia, and difficulty conceiving has a classic presentation for endometriosis',
        'Endometriomas have a characteristic "ground glass" appearance on ultrasound due to old blood content',
      ],
    },
    3: {
      level: 3,
      summary: 'Endometriosis pathogenesis likely involves retrograde menstruation with implantation, supported by immune dysfunction and genetic susceptibility. The disease creates a hostile pelvic environment affecting fertility through multiple mechanisms.',
      explanation: `**Pathogenesis Theories:**

**Retrograde Menstruation (Sampson\'s Theory)**
- Menstrual tissue flows backward through tubes
- Implants on peritoneal surfaces
- Supported by: Increased incidence with obstructed outflow
- Challenge: Retrograde flow is common, but not all develop endometriosis

**Coelomic Metaplasia**
- Peritoneal cells transform into endometrial tissue
- May explain endometriosis in unusual locations
- May explain cases in pre-menarchal girls or men

**Lymphatic/Vascular Spread**
- Explains distant sites (lungs, brain)
- Endometrial cells found in lymph nodes

**Stem Cell Theory**
- Bone marrow-derived stem cells contribute
- May explain ectopic differentiation

**Why Some Women Develop Disease:**

**Immune Dysfunction**
- Decreased clearance of ectopic cells
- Altered NK cell function
- Increased inflammatory cytokines (IL-1, IL-6, TNF-α)
- Reduced cellular immunity to endometrial cells

**Genetic Factors**
- 6-9x increased risk with first-degree relative
- Polygenic inheritance
- GWAS loci: WNT4, GREB1, ESR1, and others

**Environmental Factors**
- Dioxin exposure (controversial)
- Early menarche, short cycles, low BMI

**Molecular Features:**

**Estrogen Dependence**
- Implants express aromatase (local estrogen production)
- Aberrant expression of estrogen receptors
- Progesterone resistance (impaired PR-B expression)

**Inflammation**
- Elevated PGE2, COX-2
- Macrophage activation
- Angiogenesis (VEGF elevation)

**Neuroangiogenesis**
- Nerve fiber infiltration of lesions
- Contributes to pain
- Sensory nerve sensitization

**Effects on Fertility:**

| Mechanism | Effect |
|-----------|--------|
| Anatomic distortion | Tubal occlusion, ovarian adhesions |
| Peritoneal environment | Inflammatory cytokines toxic to sperm/embryo |
| Endometrial receptivity | Altered implantation markers |
| Oocyte quality | Oxidative stress affects oocytes |
| Ovarian reserve | Endometriomas and surgery reduce reserve |

**Deep Infiltrating Endometriosis (DIE):**

*Definition*: Penetration >5mm below peritoneal surface

*Locations*
- Rectovaginal septum
- Uterosacral ligaments
- Bladder, ureter
- Bowel wall

*Features*
- More severe pain symptoms
- Often requires surgical expertise
- MRI superior to ultrasound for detection
- May require multidisciplinary surgical approach

**Adenomyosis (Related Condition):**
- Endometrial tissue within myometrium
- May coexist with endometriosis
- Causes dysmenorrhea, heavy bleeding
- Diagnosed by MRI or ultrasound
- Often affects older reproductive-age women`,
      keyTerms: [
        { term: 'Retrograde menstruation', definition: 'Backward flow of menstrual tissue through fallopian tubes into pelvic cavity' },
        { term: 'Progesterone resistance', definition: 'Reduced response to progesterone in endometriotic tissue due to receptor abnormalities' },
        { term: 'Aromatase', definition: 'Enzyme that produces estrogen; aberrantly expressed in endometriotic lesions enabling local estrogen synthesis' },
        { term: 'Adenomyosis', definition: 'Presence of endometrial tissue within the uterine muscle wall; related to but distinct from endometriosis' },
        { term: 'Neuroangiogenesis', definition: 'Growth of nerves and blood vessels into endometriotic lesions; contributes to pain' },
      ],
      examples: [
        'Local aromatase expression in endometriotic implants explains why lesions persist even when ovarian function is suppressed',
        'The ASRM staging system was designed for infertility prognosis but correlates poorly with pain severity',
      ],
    },
    4: {
      level: 4,
      summary: 'Advanced understanding of endometriosis encompasses molecular mechanisms of estrogen-driven proliferation and progesterone resistance, neurobiological basis of pain, and emerging diagnostic biomarkers and targeted therapies.',
      explanation: `**Molecular Pathology:**

**Estrogen Metabolism Aberrations**

*Local Estrogen Production*
- CYP19A1 (aromatase) expressed in lesions (not normal endometrium)
- Converts androstenedione to estrone
- 17β-HSD type 1 converts estrone to potent estradiol
- Creates autocrine estrogen loop

*Deficient Estrogen Inactivation*
- Reduced 17β-HSD type 2 (normally inactivates estradiol)
- Perpetuates estrogen action
- Progesterone normally induces 17β-HSD2; resistance prevents this

**Progesterone Resistance Mechanisms**
- Decreased PR-B (transcriptionally active isoform)
- PR-A dominant (may act as repressor)
- Epigenetic silencing of PR promoter
- Downstream signaling defects

**Inflammation and Immunity:**

*Peritoneal Fluid Changes*
- Increased macrophages (activated phenotype)
- Elevated cytokines: IL-1β, IL-6, IL-8, TNF-α, MCP-1
- Increased VEGF → angiogenesis
- Elevated PGE2 and COX-2

*Immune Cell Dysfunction*
- Reduced NK cell cytotoxicity
- Altered T cell responses
- Regulatory T cell abnormalities
- Autoimmune features (autoantibodies present in some)

**Pain Mechanisms:**

*Peripheral Sensitization*
- Nerve growth factor (NGF) elevated
- Sensory nerve fiber density increased in lesions
- TRPV1 receptor upregulation
- Prostaglandins sensitize nociceptors

*Central Sensitization*
- Chronic pain → spinal cord changes
- Reduced descending inhibition
- Cross-sensitization (visceral-visceral, visceral-somatic)
- May explain persistent pain after lesion removal

*Neural-Immune Interaction*
- Lesions develop nerve supply (neuroangiogenesis)
- Semaphorins and netrins guide nerve growth
- Direct interaction between nerves and immune cells

**Genetic/Epigenetic Factors:**

*GWAS Findings*
| Gene/Locus | Function |
|------------|----------|
| WNT4 | Reproductive tract development |
| GREB1 | Estrogen-regulated cell proliferation |
| ESR1 | Estrogen receptor |
| CDKN2B-AS | Cell cycle regulation |
| ID4 | Proliferation |

*Epigenetic Alterations*
- DNA methylation changes at multiple loci
- Histone modifications
- microRNA dysregulation (miR-145, miR-200)
- Contribute to aberrant gene expression

**Biomarker Research:**

*Serum/Plasma*
- CA-125: Elevated but not specific or sensitive
- miRNAs: Panels under investigation
- Cytokines: Not clinically useful
- None currently validated for diagnosis

*Endometrial*
- BCL6: Elevated in eutopic endometrium of women with endometriosis
- May be diagnostic without surgery (research stage)

*Imaging Advances*
- MRI with contrast for DIE mapping
- Sonovaginography
- 3D ultrasound

**Emerging Therapies:**

*GnRH Antagonists*
- Oral administration (elagolix, relugolix, linzagolix)
- Dose-dependent partial estrogen suppression
- Fewer side effects than agonists
- Some formulations have add-back built in

*Aromatase Inhibitors*
- Target local estrogen production
- Used with GnRH agonist or progestin
- Not first-line but may help refractory cases

*Novel Targets*
- Selective progesterone receptor modulators (SPRMs)
- Anti-angiogenic agents
- Immunomodulators
- Epigenetic therapies (investigational)`,
      keyTerms: [
        { term: 'CYP19A1', definition: 'Gene encoding aromatase; aberrantly expressed in endometriotic lesions' },
        { term: '17β-HSD', definition: 'Hydroxysteroid dehydrogenase enzymes that interconvert estrone and estradiol' },
        { term: 'Central sensitization', definition: 'Increased excitability of CNS neurons leading to chronic pain state' },
        { term: 'BCL6', definition: 'Transcription factor elevated in eutopic endometrium of women with endometriosis; potential diagnostic marker' },
        { term: 'Elagolix', definition: 'Oral GnRH antagonist approved for endometriosis with dose-dependent estrogen suppression' },
      ],
      clinicalNotes: 'The persistence of pain after surgical treatment may reflect central sensitization that has developed over years of nociceptive input. This has implications for early treatment and multidisciplinary pain management approaches including physical therapy and neuromodulators.',
    },
    5: {
      level: 5,
      summary: 'Contemporary endometriosis management requires a patient-centered approach integrating medical and surgical therapies based on symptom profile and reproductive goals, with attention to multidisciplinary care for complex disease and long-term outcomes.',
      explanation: `**Diagnostic Approach:**

**When to Suspect Endometriosis**
- Dysmenorrhea (especially progressive, not relieved by NSAIDs/OCPs)
- Chronic pelvic pain
- Deep dyspareunia
- Infertility with pelvic pain
- Family history

**Physical Examination**
- Adnexal mass (endometrioma)
- Uterosacral nodularity (examine during menses if possible)
- Fixed, retroverted uterus
- Tenderness in posterior fornix
- Normal exam does not exclude diagnosis

**Imaging**
- Transvaginal ultrasound: First-line
  - Endometriomas: Characteristic "ground glass"
  - DIE: Specialized technique can detect rectovaginal/bladder lesions
- MRI: For surgical planning in DIE, uncertain cases
- No imaging can detect peritoneal implants

**Diagnosis Without Surgery**
- ESHRE guidelines: Empiric treatment appropriate based on clinical diagnosis
- Surgery not required for diagnosis in many cases
- If symptoms respond to empiric hormonal treatment, diagnosis supported

**Surgical Diagnosis**
- Laparoscopy with biopsy remains gold standard
- Indicated when: Treatment fails, uncertain diagnosis, planning excision
- Visual diagnosis has ~50% false positive rate; biopsy recommended

**Medical Management:**

**First-Line Options**

| Treatment | Mechanism | Notes |
|-----------|-----------|-------|
| Combined OCPs | Suppress ovulation, reduce menstrual flow | Continuous preferred; breakthrough bleeding common initially |
| Progestins | Decidualize and atrophy endometrium | Dienogest, norethindrone, DMPA |
| LNG-IUD | Local progestin effect | May reduce pain; good option if contraception needed |

**Second-Line Options**

| Treatment | Mechanism | Duration Limit |
|-----------|-----------|----------------|
| GnRH agonists | Induce hypoestrogenism | 6-12 months with add-back |
| GnRH antagonists (elagolix) | Partial estrogen suppression | Dose-dependent; up to 24 months |
| Aromatase inhibitors | Block local estrogen synthesis | With progestin; limited data |

**Add-Back Therapy**
- Norethindrone 5 mg or low-dose estrogen/progestin
- Prevents bone loss and vasomotor symptoms
- Does not reduce efficacy

**Surgical Management:**

**Indications**
- Failed medical management
- Diagnostic uncertainty
- Endometrioma >4 cm
- Infertility (to improve natural conception or before IVF)
- Deep infiltrating disease with organ involvement

**Techniques**

*Peritoneal Endometriosis*
- Excision vs. ablation (excision may be superior but controversial)
- Complete treatment in one surgery if possible

*Endometriomas*
- Cystectomy (excision of cyst wall) preferred over drainage/ablation
- Concern: May reduce ovarian reserve (discuss with fertility patients)

*Deep Infiltrating Endometriosis*
- Requires surgical expertise
- May need bowel resection, ureteral repair
- Multidisciplinary approach (gynecology, colorectal, urology)
- Associated with improved pain but significant morbidity

*Definitive Surgery*
- Hysterectomy ± bilateral salpingo-oophorectomy
- For completed childbearing, failed conservative treatment
- BSO provides best pain relief but requires HRT until menopause age
- Without BSO: ~15% will need reoperation

**Fertility Management:**

**Mild Disease**
- May improve fertility after surgical treatment
- Consider IUI with ovulation stimulation

**Moderate-Severe Disease**
- Surgery may restore anatomy but benefit unclear
- IVF often most effective

**Endometriomas and IVF**
- Surgery before IVF: Weigh benefit (access, environment) vs. risk (ovarian reserve)
- Generally avoid surgery for endometriomas <4 cm if IVF planned
- Aspirate only at time of retrieval (high recurrence with aspiration alone)

**Special Considerations:**

*Adolescents*
- Early diagnosis important
- NSAIDs and OCPs first-line
- Avoid repeated surgeries if possible

*Menopause*
- Disease usually regresses
- HRT may reactivate; use with caution if history of severe disease
- Rare malignant transformation in long-standing endometriomas

*Centers of Excellence*
- Complex cases benefit from specialized multidisciplinary care
- Better outcomes with expert surgical treatment`,
      keyTerms: [
        { term: 'ESHRE', definition: 'European Society of Human Reproduction and Embryology; provides major endometriosis guidelines' },
        { term: 'Dienogest', definition: 'Progestin specifically studied and approved for endometriosis treatment' },
        { term: 'Deep infiltrating endometriosis', definition: 'Endometriosis penetrating >5mm; often requires expert surgical management' },
        { term: 'Endometriosis excision surgery', definition: 'Complete surgical removal of lesions; may be superior to ablation for outcomes' },
        { term: 'Add-back therapy', definition: 'Low-dose hormone replacement given with GnRH agonists to prevent bone loss while maintaining efficacy' },
      ],
      clinicalNotes: 'ESHRE guidelines emphasize that laparoscopy is no longer required for diagnosis if clinical suspicion is high and empiric treatment is appropriate. For fertility patients with endometriomas, the decision to operate before IVF should balance potential improvement in outcomes against the risk of reduced ovarian reserve. Surgical excision of endometriomas reduces AMH and AFC. Centers specializing in endometriosis surgery demonstrate better outcomes for DIE.',
    },
  },
  media: [],
  citations: [
    {
      id: 'ref-1',
      type: 'article',
      title: 'ESHRE Guideline: Endometriosis',
      source: 'Human Reproduction',
      authors: ['ESHRE Endometriosis Guideline Development Group'],
      url: 'https://doi.org/10.1093/humrep/dead379',
    },
    {
      id: 'ref-2',
      type: 'article',
      title: 'Endometriosis - Lancet Seminar',
      source: 'The Lancet',
      authors: ['Zondervan, K.T.', 'Becker, C.M.', 'Missmer, S.A.'],
      url: 'https://doi.org/10.1016/S0140-6736(18)32278-1',
    },
  ],
  crossReferences: [
    { targetId: 'reproductive-menstrual-cycle', targetType: 'process', relationship: 'related', label: 'Menstrual Cycle' },
    { targetId: 'reproductive-fertility', targetType: 'process', relationship: 'related', label: 'Fertility' },
    { targetId: 'reproductive-pcos', targetType: 'condition', relationship: 'related', label: 'PCOS' },
  ],
  tags: {
    systems: ['reproductive'],
    topics: ['pathology', 'gynecology', 'chronic pain', 'infertility'],
    keywords: ['endometriosis', 'dysmenorrhea', 'pelvic pain', 'endometrioma', 'infertility'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['obstetrics-gynecology'],
    },
  },
  createdAt: '2025-01-28T00:00:00.000Z',
  updatedAt: '2025-01-28T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
