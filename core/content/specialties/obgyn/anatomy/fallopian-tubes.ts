/**
 * Fallopian Tubes Anatomy
 *
 * Comprehensive anatomy of the fallopian tubes including structure,
 * function, blood supply, and clinical correlations.
 */

import { EducationalContent } from '../../../types';

export const fallopianTubesAnatomy: EducationalContent = {
  id: 'obgyn-anatomy-fallopian-tubes',
  type: 'structure',
  name: 'Fallopian Tubes',
  alternateNames: ['Uterine tubes', 'Oviducts', 'Salpinx'],
  fmaId: 'FMA:18245',

  levels: {
    1: {
      level: 1,
      summary: 'The fallopian tubes are two thin tubes that connect the ovaries to the uterus and help eggs travel to where they might meet sperm.',
      explanation: `The fallopian tubes are like two special pathways that connect each ovary to the uterus.

**What they look like:**
- Two thin tubes, one on each side
- About 10-12 cm (4-5 inches) long
- About as thick as a piece of spaghetti
- The end near the ovary looks like tiny fingers

**What they do:**

1. **Catch eggs:**
   - When an ovary releases an egg, the finger-like ends catch it
   - These fingers are called fimbriae (say: FIM-bree-ay)

2. **Transport eggs:**
   - Tiny hair-like structures called cilia sweep the egg toward the uterus
   - The tube also squeezes gently to push the egg along

3. **Meeting place:**
   - This is where an egg and sperm usually meet
   - If they join together, fertilization happens
   - The fertilized egg then travels to the uterus

**Fun fact:** The egg takes about 3-5 days to travel through the fallopian tube to the uterus!`,
      keyTerms: [
        { term: 'fallopian tubes', definition: 'Two tubes that connect the ovaries to the uterus' },
        { term: 'fimbriae', definition: 'Finger-like structures at the end of the tubes that catch eggs' },
        { term: 'cilia', definition: 'Tiny hair-like structures that help move the egg along' },
        { term: 'fertilization', definition: 'When an egg and sperm join together' },
      ],
      analogies: [
        'The fimbriae are like gentle fingers that reach out to catch the egg, like catching a ball.',
        'The cilia work like tiny brooms, sweeping the egg toward the uterus.',
        'Think of the fallopian tube as a water slide that helps the egg travel from the ovary to the uterus.',
      ],
      examples: [
        'When you learn about pregnancy, the fallopian tube is where the very first step happens.',
        'Twins can happen when two eggs are released and both get fertilized in the fallopian tubes.',
      ],
    },
    2: {
      level: 2,
      summary: 'The fallopian tubes are paired muscular structures that transport oocytes from the ovaries to the uterus and provide the site for fertilization, using ciliary action and peristaltic contractions.',
      explanation: `**Structure Overview:**

**Dimensions:**
- Length: 10-12 cm
- Diameter: 0.5-1.2 cm (varies by region)

**Four Anatomical Regions (from ovary to uterus):**

1. **Infundibulum:**
   - Funnel-shaped opening near ovary
   - Contains fimbriae (finger-like projections)
   - One fimbria (fimbria ovarica) attaches to ovary
   - Catches released eggs

2. **Ampulla:**
   - Widest and longest part (~2/3 of tube)
   - Typical site of fertilization
   - Thin-walled with complex mucosal folds

3. **Isthmus:**
   - Narrow, thick-walled segment
   - Connects ampulla to uterus
   - Muscular; important for transport

4. **Intramural (interstitial):**
   - Passes through uterine wall
   - Narrowest part (1 mm diameter)
   - Opens into uterine cavity

**Wall Structure (three layers):**
1. **Mucosa:** Ciliated and secretory cells
2. **Muscularis:** Smooth muscle (inner circular, outer longitudinal)
3. **Serosa:** Outer peritoneal covering

**Functions:**
- Oocyte capture via fimbrial movement
- Oocyte and sperm transport
- Provides environment for fertilization
- Supports early embryo development (3-4 days)
- Transports embryo to uterus

**Supporting Structure:**
- Mesosalpinx: Part of broad ligament supporting tubes`,
      keyTerms: [
        { term: 'ampulla', definition: 'Widest part of the fallopian tube where fertilization typically occurs', pronunciation: 'am-PUL-ah' },
        { term: 'infundibulum', definition: 'Funnel-shaped end of the tube with finger-like fimbriae', pronunciation: 'in-fun-DIB-yoo-lum' },
        { term: 'isthmus', definition: 'Narrow portion of the tube connecting ampulla to uterus', pronunciation: 'IS-mus' },
        { term: 'mesosalpinx', definition: 'Fold of broad ligament that supports the fallopian tube', pronunciation: 'mez-oh-SAL-pinks' },
      ],
      analogies: [
        'The four parts of the tube are like sections of a funnel that gets progressively narrower from the ovary end to the uterus.',
        'The fimbriae move like sea anemone tentacles, gently waving to catch and guide the egg.',
      ],
    },
    3: {
      level: 3,
      summary: 'The fallopian tubes (salpinges) are bilateral muscular conduits featuring four anatomical regions, lined by ciliated and secretory epithelium, responsible for oocyte capture, gamete transport, fertilization, and early embryo development.',
      explanation: `**Detailed Anatomy:**

**Regional Anatomy:**

| Region | Length | Diameter | Wall | Features |
|--------|--------|----------|------|----------|
| Infundibulum | 1 cm | 1 cm | Thin | Fimbriae (25+), ostium |
| Ampulla | 6-7 cm | 6-8 mm | Thin | Complex folds, fertilization site |
| Isthmus | 3-4 cm | 2-3 mm | Thick | Reduced folds, muscular |
| Intramural | 1 cm | 1 mm | Thick | Through myometrium |

**Histological Structure:**

1. **Mucosa:**
   - Highly folded (plicae); most complex in ampulla
   - Two cell types:
     - **Ciliated cells:** Beat toward uterus; estrogen-responsive
     - **Secretory (peg) cells:** Produce tubal fluid; progesterone-responsive
   - Ratio changes during cycle (more ciliated in follicular phase)

2. **Muscularis:**
   - Inner circular layer
   - Outer longitudinal layer
   - Peristalsis influenced by hormones and prostaglandins

3. **Serosa:**
   - Peritoneal covering
   - Continuous with mesosalpinx

**Blood Supply:**
- Tubal branches of both uterine and ovarian arteries
- Anastomosis in mesosalpinx
- Venous drainage parallels arterial supply

**Lymphatic Drainage:**
- Para-aortic nodes (with ovarian)
- Some to internal iliac nodes

**Innervation:**
- Sympathetic: T10-L2 (via ovarian and hypogastric plexuses)
- Parasympathetic: S2-S4 (pelvic splanchnic nerves)

**Tubal Fluid:**
- Composed of: Plasma transudate + secretory products
- Contains: Nutrients (glucose, pyruvate), electrolytes, proteins
- Functions: Sperm capacitation, oocyte maturation, embryo nutrition
- Volume changes with cycle (peak at ovulation)

**Gamete Transport:**
- Oocyte: Passive transport (cilia, peristalsis); 3-4 days transit
- Sperm: Active swimming + muscular contractions; hours to reach ampulla
- Sperm capacitation occurs in tubal environment`,
      keyTerms: [
        { term: 'plicae', definition: 'Mucosal folds within the fallopian tube that increase surface area', pronunciation: 'PLY-kee' },
        { term: 'peg cells', definition: 'Non-ciliated secretory cells in tubal epithelium that produce tubal fluid' },
        { term: 'sperm capacitation', definition: 'Final maturation of sperm in female tract enabling fertilization' },
        { term: 'tubal ostium', definition: 'Opening of the fallopian tube; abdominal (fimbrial) and uterine (intramural)' },
      ],
      clinicalNotes: 'The fallopian tube is the most common site for ectopic pregnancy, with 95% occurring in the tube (most in ampulla). Tubal damage from PID, endometriosis, or surgery increases ectopic risk. Salpingitis can cause tubal occlusion leading to infertility.',
    },
    4: {
      level: 4,
      summary: 'The fallopian tube provides a dynamic microenvironment for gamete transport and fertilization, with hormone-responsive ciliary and secretory function, and serves as the site for critical reproductive events including sperm capacitation, fertilization, and early embryonic development.',
      explanation: `**Functional Physiology:**

**Oocyte Capture and Transport:**
- Ovulation → fimbrial sweep toward ovary
- Oocyte pickup: Fimbrial cilia + cumulus-oocyte complex adhesion
- Cumulus cells: Aid in capture and initial transport
- Ampullary transport: Slow (allows fertilization opportunity)
- Ampullary-isthmic junction: Temporary delay
- Isthmic transport: Faster; enters uterus at morula/blastocyst stage

**Sperm Transport:**
- Rapid phase: Minutes to hours post-coitus
- Uterine contractions and cervical mucus assist
- Isthmic reservoir: Sperm bind to epithelium
- Capacitation: Cholesterol efflux, hyperactivation
- Chemotaxis: Progesterone gradient guides to oocyte

**Fertilization (in ampulla):**
1. Cumulus penetration (hyaluronidase)
2. Zona pellucida binding (ZP3 receptor)
3. Acrosome reaction
4. Zona penetration
5. Sperm-oocyte fusion
6. Cortical reaction (block to polyspermy)
7. Meiosis II completion
8. Pronuclei formation

**Early Embryo Development:**
- Day 1: Zygote (pronuclear stage)
- Day 2: 2-4 cell stage (cleavage)
- Day 3: 8-cell stage (compaction begins)
- Day 4: Morula (in isthmus/uterine cavity)
- Day 5: Blastocyst (in uterus)

**Tubal Secretory Function:**

| Component | Source | Function |
|-----------|--------|----------|
| Pyruvate, lactate | Secretory cells | Embryo energy substrate |
| Amino acids | Secretory cells | Protein synthesis |
| Bicarbonate | Active transport | pH buffering |
| Glycoproteins | Peg cells | Zona modification |
| Growth factors | Epithelium | Embryo development |
| Oviductin | Peg cells | Fertilization enhancement |

**Hormonal Regulation:**
- Estrogen:
  - ↑ Ciliogenesis
  - ↑ Ciliary beat frequency
  - ↑ Secretion
  - ↑ Muscular activity
- Progesterone:
  - ↓ Ciliary beat
  - Deciliation
  - ↓ Smooth muscle activity
  - Changes secretory composition

**Tubal Factor Infertility:**
- Proximal obstruction: Salpingitis isthmica nodosa, cornual polyps
- Distal obstruction: Hydrosalpinx, fimbrial damage
- Peritubal: Adhesions from PID, endometriosis, surgery

**Imaging:**
- Hysterosalpingography (HSG): Contrast study of tubal patency
- Sonohysterography with contrast: Alternative to HSG
- Laparoscopy with chromopertubation: Gold standard`,
      keyTerms: [
        { term: 'oviductin', definition: 'Tubal glycoprotein that enhances fertilization by modifying zona pellucida' },
        { term: 'acrosome reaction', definition: 'Release of enzymes from sperm head enabling zona penetration' },
        { term: 'hydrosalpinx', definition: 'Fluid-filled, distended fallopian tube from distal obstruction' },
        { term: 'chromopertubation', definition: 'Intraoperative dye test to assess tubal patency at laparoscopy' },
      ],
      clinicalNotes: 'Hydrosalpinx fluid is embryotoxic and reduces IVF success rates. Salpingectomy or proximal tubal occlusion is recommended before IVF in patients with hydrosalpinx. HSG has 60-80% sensitivity for tubal pathology; laparoscopy remains the gold standard.',
    },
    5: {
      level: 5,
      summary: 'Contemporary tubal biology encompasses molecular mechanisms of sperm-oocyte interaction, embryo-maternal signaling, and the fallopian tube as origin site for high-grade serous ovarian cancer, with clinical applications in ART, contraception, and risk-reducing surgery.',
      explanation: `**Molecular Biology of Fertilization:**

**Sperm Capacitation (in tube):**
- Cholesterol efflux → membrane fluidity ↑
- Bicarbonate → sAC activation → cAMP → PKA
- Ca²⁺ influx → hyperactivated motility
- Tyrosine phosphorylation cascade
- Duration: 5-7 hours in humans

**Zona Pellucida Interactions:**
- ZP3: Primary sperm receptor (species-specific binding)
- Acrosome reaction trigger: ZP3 → Ca²⁺ influx → vesicle fusion
- ZP2: Secondary binding (acrosome-reacted sperm)
- Zona hardening: Cortical granule enzymes modify ZP (polyspermy block)

**Sperm-Egg Fusion:**
- IZUMO1 (sperm) + JUNO (oocyte) interaction essential
- Tetraspanins: CD9 required on oocyte
- Fusion triggers Ca²⁺ oscillations → meiosis completion

**Tubal-Embryo Signaling:**

*Embryonic signals:*
- PAF (platelet-activating factor): Embryo viability marker
- hCG: Early signaling (even before implantation)
- IL-1α: Modulates tubal secretion

*Tubal responses:*
- Altered ciliary beat
- Modified secretory profile
- Growth factor production (EGF, IGF)

**Tubal Origin of Ovarian Cancer:**

*Evidence:*
- STICs (serous tubal intraepithelial carcinoma) in fimbriae
- p53 signatures in tubal epithelium
- BRCA carriers: Tubal lesions precede ovarian involvement
- Prophylactic salpingo-oophorectomy specimens: STICs found

*Molecular progression:*
- p53 mutation (signature) → STIC → invasive carcinoma
- PAX2 loss, Ki-67 elevation in STICs
- STIC shares molecular profile with high-grade serous carcinoma

*Clinical implications:*
- Risk-reducing salpingectomy with delayed oophorectomy (RSDO) under study
- Opportunistic salpingectomy at benign surgery

**Contraceptive Techniques:**

*Tubal occlusion methods:*
| Method | Mechanism | Failure Rate |
|--------|-----------|--------------|
| Bilateral salpingectomy | Complete removal | <0.1% |
| Electrocautery | Coagulation | 2-4 per 1000 |
| Falope ring | Mechanical occlusion | 2-3 per 1000 |
| Hulka clip | Mechanical | 4-5 per 1000 |
| Filshie clip | Mechanical | 2-3 per 1000 |

*Preference shifting to bilateral salpingectomy:*
- Zero ectopic pregnancy risk
- Ovarian cancer risk reduction
- ACOG supports discussion with patients

**ART and Tubal Factor:**

*In vitro fertilization:*
- Bypasses tubal function
- Success rates similar regardless of tubal factor
- Hydrosalpinx: Salpingectomy improves outcomes

*Tubal surgery:*
- Fimbrioplasty: Lysis of fimbrial adhesions
- Neosalpingostomy: Create new ostium for hydrosalpinx
- Tubal anastomosis: Reversal of sterilization
- Success depends on: Tubal length, fimbrial preservation, absence of disease

**Surgical Anatomy:**

*Salpingectomy technique:*
1. Identify mesosalpinx
2. Create window near tube
3. Sequential coagulation/transection of mesosalpinx
4. Transect at cornual junction
5. Preserve ovarian blood supply (avoid infundibulopelvic ligament)

*Ectopic pregnancy surgery:*
- Salpingostomy: Linear incision, remove products, conservative
- Salpingectomy: Complete removal; preferred if stable and no fertility desire
- Follow hCG to negative (persistent ectopic risk with salpingostomy)

**Emerging Research:**
- Tubal organoids: Model for fertilization, disease
- Hydrosalpinx fluid proteomics: Understanding embryotoxicity
- Tubal microbiome: Role in health and disease
- Falloposcopy: Hysteroscopic tubal visualization`,
      keyTerms: [
        { term: 'IZUMO1', definition: 'Sperm surface protein essential for fusion with oocyte; partner of JUNO' },
        { term: 'JUNO', definition: 'Oocyte receptor for IZUMO1; loss after fusion blocks polyspermy' },
        { term: 'STIC', definition: 'Serous tubal intraepithelial carcinoma; precursor lesion for high-grade serous ovarian cancer' },
        { term: 'opportunistic salpingectomy', definition: 'Fallopian tube removal at time of benign gynecologic surgery to reduce ovarian cancer risk' },
      ],
      clinicalNotes: 'ACOG and SGO support opportunistic salpingectomy at hysterectomy or in lieu of tubal ligation after counseling. For BRCA carriers, bilateral salpingectomy with delayed oophorectomy (RSDO) is under investigation to preserve ovarian function while reducing cancer risk. Complete salpingectomy is preferred over partial sterilization procedures when permanent contraception is desired.',
    },
  },

  media: [
    {
      id: 'fallopian-tube-1',
      type: 'diagram',
      filename: 'fallopian-tube-anatomy.svg',
      title: 'Fallopian Tube Regions',
      description: 'Four anatomical regions from infundibulum to intramural portion',
    },
    {
      id: 'fallopian-tube-2',
      type: 'diagram',
      filename: 'fallopian-tube-histology.svg',
      title: 'Tubal Histology',
      description: 'Cross-section showing mucosal folds and cell types',
    },
  ],

  citations: [
    {
      id: 'williams-gyn-tubes',
      type: 'textbook',
      title: 'Pelvic Anatomy',
      source: 'Williams Gynecology, 4th Edition',
      chapter: '38',
      license: 'Copyrighted',
    },
    {
      id: 'speroff-tubes',
      type: 'textbook',
      title: 'The Fallopian Tube',
      source: 'Speroff Clinical Gynecologic Endocrinology and Infertility, 9th Edition',
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'obgyn-anatomy-female-reproductive-overview', targetType: 'structure', relationship: 'parent', label: 'Female Reproductive System' },
    { targetId: 'obgyn-anatomy-ovaries', targetType: 'structure', relationship: 'related', label: 'Ovaries' },
    { targetId: 'obgyn-pregnancy-fertilization', targetType: 'process', relationship: 'related', label: 'Fertilization' },
    { targetId: 'obgyn-contraception-permanent', targetType: 'topic', relationship: 'see-also', label: 'Permanent Contraception' },
  ],

  tags: {
    systems: ['reproductive'],
    structures: ['FMA:18245', 'fallopian-tube', 'uterine-tube'],
    topics: ['anatomy', 'gynecology', 'fertility'],
    keywords: ['fallopian tube', 'oviduct', 'salpinx', 'fimbriae', 'fertilization'],
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
