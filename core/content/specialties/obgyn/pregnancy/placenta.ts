/**
 * Placenta Physiology
 *
 * Comprehensive coverage of placental development, structure, and function.
 */

import { EducationalContent } from '../../../types';

export const placentaPhysiology: EducationalContent = {
  id: 'obgyn-pregnancy-placenta',
  type: 'structure',
  name: 'Placenta',
  alternateNames: ['Afterbirth', 'Placental organ'],
  fmaId: 'FMA:63934',

  levels: {
    1: {
      level: 1,
      summary: 'The placenta is the organ that connects mother and baby, providing oxygen and nutrients.',
      explanation: `The placenta develops during pregnancy to support the growing baby.

**What it does:**
- Brings oxygen and nutrients from mom to baby
- Removes waste from baby's blood
- Makes hormones needed for pregnancy
- Protects baby from some infections

**Key facts:**
- Attaches to uterine wall
- Connected to baby by umbilical cord
- Delivered after the baby (afterbirth)`,
      keyTerms: [
        { term: 'placenta', definition: 'Organ connecting mother and baby during pregnancy' },
        { term: 'umbilical cord', definition: 'Cord connecting baby to placenta' },
      ],
    },
    2: {
      level: 2,
      summary: 'The placenta develops from trophoblast cells and performs respiratory, nutritive, excretory, and endocrine functions.',
      explanation: `**Placental Structure:**
- Fetal side: Chorionic plate with umbilical vessels
- Maternal side: Decidua basalis (uterine lining)
- Villi: Finger-like projections where exchange occurs

**Functions:**
1. **Respiratory**: O2 to fetus, CO2 to mother
2. **Nutritive**: Glucose, amino acids, lipids transfer
3. **Excretory**: Fetal waste to maternal circulation
4. **Endocrine**: hCG, progesterone, estrogen, HPL
5. **Immunologic**: Some antibody transfer (IgG)

**Development:**
- Forms from blastocyst outer layer
- Fully functional by week 12
- Weighs ~500g at term
- Disk shape, ~20cm diameter`,
      keyTerms: [
        { term: 'villi', definition: 'Projections where maternal-fetal exchange occurs' },
        { term: 'hCG', definition: 'Human chorionic gonadotropin - maintains pregnancy early' },
        { term: 'HPL', definition: 'Human placental lactogen - affects metabolism' },
      ],
    },
    3: {
      level: 3,
      summary: 'Placental development involves trophoblast differentiation, spiral artery remodeling, and establishment of maternal-fetal circulation.',
      explanation: `**Trophoblast Types:**
- Cytotrophoblast: Stem cells, proliferative
- Syncytiotrophoblast: Hormone production, transport
- Extravillous trophoblast: Invasion, artery remodeling

**Spiral Artery Remodeling:**
- Extravillous trophoblast invades arteries
- Replaces smooth muscle
- Creates low-resistance vessels
- Increases blood flow to placenta
- Failure → preeclampsia, FGR

**Placental Circulation:**
- Maternal blood enters intervillous space
- Surrounds villi (no direct contact with fetal blood)
- Exchange across villous membrane
- Fetal blood in umbilical vessels

**Placental Membrane:**
- Syncytiotrophoblast
- Cytotrophoblast (early)
- Villous stroma
- Fetal capillary endothelium`,
      keyTerms: [
        { term: 'intervillous space', definition: 'Space filled with maternal blood surrounding villi' },
        { term: 'spiral artery remodeling', definition: 'Conversion of uterine arteries for pregnancy blood flow' },
      ],
    },
    4: {
      level: 4,
      summary: 'Advanced placental physiology includes hormone biosynthesis, transport mechanisms, and immune function.',
      explanation: `**Hormone Production:**
- hCG: Peaks at 10 weeks, maintains corpus luteum
- Progesterone: Takes over from corpus luteum at 7-10 weeks
- Estrogens: Estriol requires fetal precursors
- HPL: Insulin resistance, lipolysis
- CRH: Increases toward term

**Transport Mechanisms:**
- Simple diffusion: O2, CO2, water
- Facilitated diffusion: Glucose (GLUT1)
- Active transport: Amino acids, ions
- Receptor-mediated: IgG, insulin
- Pinocytosis: Large proteins

**Immune Function:**
- Physical barrier
- Immunomodulation at interface
- IgG transfer (third trimester)
- Excludes most pathogens

**Placental Abnormalities:**
- Placenta previa: Covers cervix
- Placental abruption: Premature separation
- Placenta accreta spectrum: Abnormal invasion
- Insufficiency: Poor function → FGR`,
      keyTerms: [
        { term: 'placenta accreta', definition: 'Placenta abnormally attached to or invading uterine wall' },
        { term: 'estriol', definition: 'Estrogen requiring fetal DHEA-S for synthesis' },
      ],
    },
    5: {
      level: 5,
      summary: 'Comprehensive placental knowledge encompasses molecular regulation of invasion, angiogenesis, and biomarkers for placental dysfunction.',
      explanation: `**Molecular Regulation of Invasion:**
- Oxygen tension: Low O2 promotes invasion
- MMPs: Matrix degradation
- uPA system: Plasminogen activation
- Integrins: Adhesion molecules
- HIF-1: Hypoxia-inducible factors

**Angiogenesis:**
- VEGF: Vascular endothelial growth factor
- PlGF: Placental growth factor
- sFlt-1: Soluble receptor, anti-angiogenic
- Imbalance → preeclampsia

**Biomarkers:**
- sFlt-1/PlGF ratio for preeclampsia
- Cell-free DNA for aneuploidy
- PAPP-A in first trimester screening
- AFP for neural tube defects

**Placental Pathology Correlates:**
- Infarcts: Maternal vascular disease
- Chronic villitis: Inflammation
- Chorioamnionitis: Infection ascending
- Villous maturation defects: Diabetes

**Research Frontiers:**
- Placental organoids
- Single-cell sequencing
- Maternal blood biomarkers
- Placental origins of disease`,
      keyTerms: [
        { term: 'sFlt-1', definition: 'Soluble fms-like tyrosine kinase-1 - anti-angiogenic, elevated in preeclampsia' },
        { term: 'PlGF', definition: 'Placental growth factor - pro-angiogenic, decreased in preeclampsia' },
      ],
      clinicalNotes: 'Placental dysfunction underlies many pregnancy complications including preeclampsia and FGR. sFlt-1/PlGF ratio helps diagnose and predict preeclampsia. Placental pathology examination can explain adverse outcomes and inform future pregnancy counseling.',
    },
  },

  media: [],

  citations: [
    {
      id: 'williams-placenta',
      type: 'textbook',
      title: 'Placental Abnormalities',
      source: 'Williams Obstetrics, 26th Edition',
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'obgyn-pregnancy-overview', targetType: 'pathway', relationship: 'parent', label: 'Pregnancy Overview' },
    { targetId: 'obgyn-pregnancy-fetal-development', targetType: 'pathway', relationship: 'related', label: 'Fetal Development' },
  ],

  tags: {
    systems: ['reproductive'],
    structures: ['FMA:63934', 'placenta'],
    topics: ['pregnancy', 'physiology'],
    keywords: ['placenta', 'umbilical cord', 'maternal-fetal', 'hormones'],
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
