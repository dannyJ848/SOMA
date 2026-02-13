/**
 * Cervix Anatomy
 *
 * Comprehensive anatomy of the cervix including structure, histology,
 * function, and clinical correlations.
 */

import { EducationalContent } from '../../../types';

export const cervixAnatomy: EducationalContent = {
  id: 'obgyn-anatomy-cervix',
  type: 'structure',
  name: 'Cervix',
  alternateNames: ['Uterine cervix', 'Cervix uteri', 'Neck of the uterus'],
  fmaId: 'FMA:17740',

  levels: {
    1: {
      level: 1,
      summary: 'The cervix is the lower part of the uterus that connects to the vagina and acts like a doorway.',
      explanation: `The cervix is the bottom part of the uterus (womb) that opens into the vagina.

**What it looks like:**
- Shaped like a small cylinder or donut
- About 2.5-3 cm (1 inch) long
- Has a small opening in the middle

**What the cervix does:**

1. **Protects the uterus:**
   - Acts like a security guard for the uterus
   - Makes mucus that blocks germs from entering
   - Keeps the baby inside during pregnancy

2. **Controls what goes in and out:**
   - Usually stays mostly closed
   - Opens slightly during a period to let blood out
   - Produces mucus that changes during the month
   - Opens wide during childbirth to let the baby out

3. **Makes special mucus:**
   - Thick and sticky most of the month (blocks sperm)
   - Thin and slippery around ovulation (helps sperm travel)

**Important facts:**
- Doctors check the cervix during a Pap smear
- The cervix opens to about 10 cm during labor
- The cervix helps hold a pregnancy in place`,
      keyTerms: [
        { term: 'cervix', definition: 'The lower, narrow part of the uterus that opens into the vagina' },
        { term: 'cervical mucus', definition: 'Fluid made by the cervix that changes throughout the month' },
        { term: 'Pap smear', definition: 'A test where cells are collected from the cervix to check for problems' },
      ],
      analogies: [
        'The cervix is like the neck of a bottle - it is the narrow opening that connects the main part (uterus) to the outside (vagina).',
        'Think of the cervix as a drawbridge that stays up most of the time but can open when needed.',
        'The cervical mucus acts like a gate that opens during fertile times and closes otherwise.',
      ],
      examples: [
        'When a doctor does a Pap smear, they gently collect cells from the surface of the cervix.',
        'During pregnancy, a thick mucus plug forms in the cervix to protect the baby.',
      ],
    },
    2: {
      level: 2,
      summary: 'The cervix is the cylindrical lower portion of the uterus that projects into the vagina, featuring an internal and external os, and producing cyclic mucus changes that regulate sperm transport.',
      explanation: `**Anatomy Overview:**

**Structure:**
- Length: 2.5-3 cm
- Diameter: 2-3 cm
- Position: Projects into upper vagina

**Two Main Portions:**

1. **Supravaginal cervix:**
   - Upper 2/3 above vaginal attachment
   - Connected to bladder anteriorly
   - Connected to rectum posteriorly

2. **Vaginal cervix (portio vaginalis):**
   - Lower 1/3 visible in vagina
   - What is seen during speculum exam
   - Has visible external os

**Important Openings:**
- **External os:** Opens into vagina
  - Nulliparous (never given birth): Small, circular
  - Parous (has given birth): Slit-like, transverse
- **Internal os:** Opens into uterine cavity
- **Endocervical canal:** Connects the two os

**Two Types of Epithelium:**
1. **Ectocervix:** Pink, smooth (squamous epithelium)
2. **Endocervix:** Red, bumpy (columnar epithelium)
3. **Squamocolumnar junction:** Where they meet

**Cervical Mucus Changes:**
| Cycle Phase | Mucus Type | Function |
|-------------|------------|----------|
| Follicular | Thick, scant | Barrier to sperm |
| Ovulation | Thin, stretchy, clear | Facilitates sperm |
| Luteal | Thick, sticky | Barrier again |

**Functions:**
- Passage for menstrual blood
- Sperm transport/reservoir
- Mucus production
- Barrier to infection
- Dilates for childbirth
- Maintains pregnancy (competent cervix)`,
      keyTerms: [
        { term: 'external os', definition: 'The opening of the cervix visible in the vagina', pronunciation: 'OSS' },
        { term: 'endocervical canal', definition: 'The passageway through the cervix connecting uterus to vagina' },
        { term: 'squamocolumnar junction', definition: 'Where the two types of cervical covering meet' },
        { term: 'portio vaginalis', definition: 'The portion of cervix visible in the vagina during exam' },
      ],
      analogies: [
        'The cervix is like a bottleneck - narrow to control flow but can expand when needed.',
        'The two types of epithelium are like different flooring materials meeting at a threshold.',
      ],
    },
    3: {
      level: 3,
      summary: 'The cervix comprises supravaginal and vaginal portions with distinct histological zones, featuring the clinically significant transformation zone where metaplastic epithelium develops and most cervical pathology arises.',
      explanation: `**Detailed Anatomy:**

**Gross Structure:**

*Supravaginal cervix:*
- Superior 2/3 above vaginal reflection
- Anterior: Separated from bladder by loose connective tissue
- Posterior: Peritoneal covering (pouch of Douglas access)
- Lateral: Cardinal ligaments, uterine vessels

*Vaginal cervix:*
- Inferior 1/3 projecting into vagina
- Creates anterior, posterior, and lateral fornices
- Posterior fornix is deepest

**Histological Zones:**

1. **Ectocervix:**
   - Non-keratinized stratified squamous epithelium
   - Similar to vaginal epithelium
   - Estrogen-responsive (glycogenation)
   - Supports normal vaginal flora (Lactobacillus)

2. **Endocervix:**
   - Simple columnar epithelium (mucus-secreting)
   - Crypts (glands) extending into stroma
   - Produces cervical mucus

3. **Transformation zone (T-zone):**
   - Area between original and current SCJ
   - Squamous metaplasia replaces columnar epithelium
   - Location varies with age, hormones, parity
   - **Clinical importance:** Site of 95%+ cervical cancers

**Squamocolumnar Junction (SCJ):**
- Dynamic; position changes throughout life
- Young/reproductive: External (ectropion)
- Postmenopausal: Internal (in endocervix)
- Important for Pap smear sampling

**Cervical Stroma:**
- Dense fibrous connective tissue (85%)
- Small amount of smooth muscle (15%)
- Collagen types I and III
- Important for cervical competence

**Blood Supply:**
- Cervical branches of uterine artery
- Descending cervical vessels
- Rich anastomoses

**Lymphatic Drainage:**
- Primary: External iliac, internal iliac, obturator nodes
- Also: Presacral, parametrial nodes
- Critical for cervical cancer staging

**Innervation:**
- Sympathetic: T10-L2 (hypogastric plexus)
- Parasympathetic: S2-S4 (pelvic splanchnic)
- Limited sensory innervation (procedures often without anesthesia)`,
      keyTerms: [
        { term: 'transformation zone', definition: 'Area of squamous metaplasia between original and current SCJ; site of most cervical cancers' },
        { term: 'squamous metaplasia', definition: 'Normal process where columnar epithelium is replaced by squamous in response to acidic vaginal environment' },
        { term: 'ectropion', definition: 'Columnar epithelium visible on ectocervix; normal finding especially in young women, OCP use' },
        { term: 'nabothian cyst', definition: 'Retention cyst from blocked endocervical gland; common benign finding' },
      ],
      clinicalNotes: 'Adequate Pap smear requires sampling the transformation zone to detect cervical dysplasia. The T-zone location affects screening adequacy - if completely internal (postmenopausal), endocervical brush sampling is critical. Colposcopy targets the transformation zone for biopsy.',
    },
    4: {
      level: 4,
      summary: 'The cervix demonstrates dynamic histological changes with age and hormonal status, complex mucus biochemistry regulating fertility, and structural composition essential for maintaining pregnancy, with the transformation zone representing the intersection of HPV biology and carcinogenesis.',
      explanation: `**Cervical Mucus Biochemistry:**

**Composition:**
- Water: 92-98% (varies with cycle)
- Mucins: Glycoprotein network
- Proteins: IgA, IgG, lysozyme, lactoferrin
- Electrolytes: Na, K, Ca, Cl
- Glucose, amino acids

**Cyclic Changes:**

| Phase | Estrogen | Progesterone | Mucus Properties |
|-------|----------|--------------|------------------|
| Follicular | Rising | Low | Increasing, less viscous |
| Periovulatory | Peak | Low | Copious, thin, spinnbarkeit |
| Luteal | Moderate | High | Scant, thick, cellular |

**Spinnbarkeit:** Stretchability at ovulation (>8-10 cm)
**Ferning:** Crystallization pattern on slide (estrogen effect)

**Sperm-Mucus Interaction:**
- Favorable mucus: Parallel channels for sperm transit
- Unfavorable mucus: Dense network trapping sperm
- Cervical crypts: Sperm reservoir (48-72 hours viability)

**Transformation Zone Biology:**

*Metaplasia process:*
1. Columnar epithelium exposed to acidic vaginal pH
2. Reserve cell proliferation
3. Immature metaplastic squamous cells
4. Mature squamous epithelium

*HPV vulnerability:*
- Metaplastic cells express viral receptors
- Access to basal cells during active metaplasia
- Persistence leads to CIN (cervical intraepithelial neoplasia)

**Cervical Stroma and Competence:**

*Composition:*
- Collagen: 80% of dry weight
- Type I:III ratio: 70:30
- Glycosaminoglycans: Dermatan sulfate, hyaluronic acid
- Smooth muscle: ~10-15%

*Pregnancy remodeling:*
1. Softening (increased water, decreased collagen cross-links)
2. Ripening (increased HA, decreased dermatan sulfate)
3. Dilation (collagen reorganization, inflammatory infiltrate)
4. Repair (postpartum restoration)

*Cervical insufficiency:*
- Painless dilation in second trimester
- Risk factors: Prior cervical surgery (cone, LEEP), DES exposure
- Management: Cerclage (cervical stitch)

**Colposcopy Findings:**

| Finding | Significance |
|---------|--------------|
| Acetowhite epithelium | Increased nuclear density (dysplasia) |
| Punctation | Abnormal vessels (capillaries end-on) |
| Mosaicism | Abnormal vessels (vascular network) |
| Atypical vessels | Concerning for invasion |
| Lugol's non-uptake | Absence of glycogen (abnormal) |

**Cervical Cancer Staging (FIGO 2018):**
- IA: Microscopic only
- IB: Clinically visible or IA > 5mm depth
- II: Beyond uterus, not to pelvic wall/lower vagina
- III: Pelvic wall/lower vagina/hydronephrosis/nodes
- IV: Bladder/rectum mucosa or distant metastases`,
      keyTerms: [
        { term: 'spinnbarkeit', definition: 'Stretchability of cervical mucus peaking at ovulation due to estrogen effect' },
        { term: 'CIN', definition: 'Cervical intraepithelial neoplasia; precancerous changes graded 1-3' },
        { term: 'cervical insufficiency', definition: 'Inability of cervix to maintain pregnancy; painless second-trimester dilation' },
        { term: 'acetowhite', definition: 'Whitening of abnormal epithelium with acetic acid application during colposcopy' },
      ],
      clinicalNotes: 'LEEP (loop electrosurgical excision) removes transformation zone for both diagnosis and treatment of high-grade CIN. Cold knife cone biopsy may be preferred when adenocarcinoma in situ is suspected. Cervical length measurement by transvaginal ultrasound (<25mm at 16-24 weeks) identifies risk for preterm birth.',
    },
    5: {
      level: 5,
      summary: 'The cervix represents a complex interface between reproductive function and oncologic risk, with molecular understanding of HPV carcinogenesis informing screening and vaccination strategies, cervical remodeling mechanisms guiding preterm birth prevention, and surgical techniques evolving for fertility-preserving cancer treatment.',
      explanation: `**HPV and Cervical Carcinogenesis:**

**High-Risk HPV Types:**
- Oncogenic: 16, 18, 31, 33, 35, 39, 45, 51, 52, 56, 58, 59
- HPV 16: 50% of cervical cancers
- HPV 18: 20% of cervical cancers; adenocarcinoma association
- HPV 16/18 together: 70% of cervical cancers globally

**Molecular Mechanisms:**
- E6 oncoprotein: Binds p53 → degradation → loss of cell cycle control
- E7 oncoprotein: Binds Rb → E2F release → uncontrolled proliferation
- Integration: Disruption of E2 regulatory gene → constitutive E6/E7
- Immortalization → chromosomal instability → invasive cancer

**Progression Timeline:**
- HPV infection → CIN1: 1-5 years
- CIN1 → CIN3: 5-10 years
- CIN3 → Invasive: 10+ years
- Overall: 15-20 years typical

**Screening Guidelines (ASCCP 2019):**

*Average risk:*
- 21-24: Cytology alone every 3 years
- 25-29: HPV primary (preferred) or cotesting or cytology every 3 years
- 30-65: HPV primary every 5 years (preferred), cotesting every 5 years, or cytology every 3 years
- >65: Discontinue if adequate negative prior screening

*Risk-based management:*
- HPV+/cytology negative: Repeat in 1 year
- LSIL: Colposcopy (or repeat if <25)
- HSIL: Expedited LEEP or colposcopy/biopsy
- ASC-H: Colposcopy

**Cervical Remodeling Molecular Basis:**

*Softening (first trimester):*
- Increased hyaluronan synthesis
- Collagen fiber dispersion
- Tissue hydration
- Prostaglandin pathway priming

*Ripening (late pregnancy):*
- Inflammatory infiltrate (macrophages, neutrophils)
- MMP activation (MMP-2, MMP-9)
- Decreased collagen cross-linking (LOXL1, LOX)
- Cervical shortening

*Dilation:*
- IL-8 driven neutrophil influx
- Collagen degradation and reorganization
- Gap junction formation
- NO synthesis (vasodilation)

**Preterm Birth Prevention:**

*Cervical length screening:*
- 16-24 weeks: TV ultrasound
- Short cervix: <25mm
- Intervention threshold: <20-25mm

*Interventions:*
| Intervention | Indication | Mechanism |
|--------------|------------|-----------|
| Vaginal progesterone | Short cervix, singleton | Anti-inflammatory, maintains quiescence |
| 17-OHP injection | Prior PTB | Unclear, possibly anti-inflammatory |
| Cerclage | Prior PTB + short cervix | Mechanical support |
| Pessary | Under investigation | Angle change, mechanical |

**Fertility-Preserving Surgery:**

*Cervical conization:*
- Indication: CIN 2/3, select AIS
- Techniques: LEEP, CKC, laser
- Margin assessment critical
- Subsequent pregnancy considerations

*Radical trachelectomy:*
- Indication: Stage IA2-IB1 (<2cm), desire fertility
- Vaginal vs. abdominal approach
- Parametrial resection with lymphadenectomy
- Cerclage placed at time of surgery
- Pregnancy outcomes: ~70% successful

**Emerging Therapeutic Approaches:**

*Therapeutic HPV vaccines:*
- Target E6/E7 antigens
- VGX-3100 (DNA vaccine) in trials
- Aim: Clearance of CIN 2/3 without excision

*Topical treatments:*
- Imiquimod for CIN (investigational)
- 5-FU for vaginal/vulvar HSIL
- Cidofovir (antiviral) research

*Immunotherapy:*
- Checkpoint inhibitors for advanced cervical cancer
- Pembrolizumab: FDA approved for PD-L1+ cervical cancer
- Tisotumab vedotin: Antibody-drug conjugate approved

**Surgical Technique Considerations:**

*LEEP technique:*
- Wire loop with electrosurgical current
- Depth: 7-10mm (type 1 excision)
- Minimum 5mm margins sought
- Endocervical curettage often follows

*Cold knife cone:*
- Indication: Concern for adenocarcinoma, endocervical disease
- Top-hat configuration for AIS
- Larger tissue volume obtained
- Higher obstetric morbidity

*Complications:*
- Hemorrhage: 2-5%
- Stenosis: 1-2%
- Cervical insufficiency: Increased risk with multiple/deep excisions
- Preterm birth: RR 1.5-2.0 after LEEP/cone`,
      keyTerms: [
        { term: 'E6/E7 oncoproteins', definition: 'HPV proteins that inactivate p53 and Rb tumor suppressors, driving cervical carcinogenesis' },
        { term: 'radical trachelectomy', definition: 'Fertility-preserving surgery removing cervix and parametria while retaining uterine body' },
        { term: 'LOXL1', definition: 'Lysyl oxidase-like 1; enzyme involved in collagen cross-linking; decreased activity in cervical ripening' },
        { term: 'VGX-3100', definition: 'Therapeutic HPV DNA vaccine targeting E6/E7 for CIN treatment without surgery' },
      ],
      clinicalNotes: 'Current screening emphasizes HPV primary testing with extended intervals. The 2019 ASCCP Risk-Based Management guidelines use tables incorporating HPV type, cytology, and history to determine management. For adenocarcinoma in situ, cold knife cone with clear margins and close surveillance may avoid hysterectomy in select patients desiring fertility. Short cervix identified on routine anatomy scan should prompt referral for specialized management.',
    },
  },

  media: [
    {
      id: 'cervix-anatomy-1',
      type: 'diagram',
      filename: 'cervix-anatomy.svg',
      title: 'Cervical Anatomy',
      description: 'Cross-section showing ectocervix, endocervix, and transformation zone',
    },
    {
      id: 'cervix-anatomy-2',
      type: 'diagram',
      filename: 'cervix-histology-zones.svg',
      title: 'Cervical Histological Zones',
      description: 'Squamous, columnar epithelium and transformation zone',
    },
  ],

  citations: [
    {
      id: 'williams-gyn-cervix',
      type: 'textbook',
      title: 'Preinvasive Lesions of the Lower Genital Tract',
      source: 'Williams Gynecology, 4th Edition',
      chapter: '29',
      license: 'Copyrighted',
    },
    {
      id: 'asccp-guidelines',
      type: 'article',
      title: '2019 ASCCP Risk-Based Management Consensus Guidelines',
      source: 'Journal of Lower Genital Tract Disease',
      url: 'https://www.asccp.org/guidelines',
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'obgyn-anatomy-uterus', targetType: 'structure', relationship: 'parent', label: 'Uterus' },
    { targetId: 'obgyn-screening-cervical-cancer', targetType: 'topic', relationship: 'related', label: 'Cervical Cancer Screening' },
    { targetId: 'obgyn-oncology-cervical-cancer', targetType: 'condition', relationship: 'see-also', label: 'Cervical Cancer' },
    { targetId: 'obgyn-screening-hpv', targetType: 'topic', relationship: 'related', label: 'HPV Testing' },
  ],

  tags: {
    systems: ['reproductive'],
    structures: ['FMA:17740', 'cervix'],
    topics: ['anatomy', 'gynecology', 'oncology', 'screening'],
    keywords: ['cervix', 'transformation zone', 'HPV', 'pap smear', 'cervical cancer'],
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
