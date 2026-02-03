/**
 * First Trimester Development
 *
 * Coverage of embryonic development and maternal changes during weeks 1-12.
 */

import { EducationalContent } from '../../../types';

export const firstTrimesterDevelopment: EducationalContent = {
  id: 'obgyn-pregnancy-first-trimester',
  type: 'pathway',
  name: 'First Trimester Development',
  alternateNames: ['Weeks 1-12', 'Early pregnancy'],
  fmaId: undefined,

  levels: {
    1: {
      level: 1,
      summary: 'The first trimester covers weeks 1-12 when the baby forms all major organs.',
      explanation: `During the first trimester, the fertilized egg develops into an embryo with all major organs.

**What happens:**
- Heart begins beating (week 6)
- Brain and spinal cord form
- Arms and legs appear
- By week 12, baby is about 3 inches long

**Mom may experience:**
- Nausea ("morning sickness")
- Tiredness
- Breast tenderness
- Frequent urination`,
      keyTerms: [
        { term: 'embryo', definition: 'Developing baby during first 8 weeks' },
        { term: 'morning sickness', definition: 'Nausea and vomiting common in early pregnancy' },
      ],
    },
    2: {
      level: 2,
      summary: 'The first trimester includes conception, implantation, embryogenesis, and organogenesis with critical developmental milestones each week.',
      explanation: `**Week-by-Week Development:**

- **Week 1-2**: Fertilization and implantation
- **Week 3**: Gastrulation (three germ layers form)
- **Week 4**: Neural tube closes, heart tube forms
- **Week 5**: Brain vesicles, limb buds appear
- **Week 6**: Heart beats, facial features form
- **Week 8**: All organs present, embryo → fetus
- **Week 12**: External genitalia differentiate

**First Trimester Screening:**
- Ultrasound: Dating, viability, number of fetuses
- Labs: Blood type, Rh, CBC, rubella, HIV, etc.
- Genetic screening: Cell-free DNA or combined screening

**Common Symptoms:**
- Nausea/vomiting (50-80%)
- Fatigue
- Breast changes
- Urinary frequency`,
      keyTerms: [
        { term: 'organogenesis', definition: 'Formation of organs during embryonic development' },
        { term: 'neural tube', definition: 'Precursor to brain and spinal cord' },
      ],
    },
    3: {
      level: 3,
      summary: 'First trimester embryology involves gastrulation, neurulation, and organ system development with teratogen susceptibility during critical periods.',
      explanation: `**Gastrulation (Week 3):**
- Bilaminar disc → trilaminar disc
- Ectoderm: Skin, nervous system
- Mesoderm: Muscle, bone, heart, blood
- Endoderm: GI tract, respiratory, liver

**Neurulation (Weeks 3-4):**
- Neural plate → neural tube
- Closure complete by day 28
- Failure → neural tube defects

**Critical Periods:**
- Neural tube: Days 17-30
- Heart: Days 20-50
- Limbs: Days 24-36
- Palate: Weeks 6-9

**Teratogen Exposure:**
- All-or-none period: Week 1-2
- Embryonic period (3-8): Highest risk
- Fetal period: Growth/functional effects

**First Trimester Ultrasound:**
- Crown-rump length (CRL) for dating
- Nuchal translucency (NT) screening
- Nasal bone assessment`,
      keyTerms: [
        { term: 'gastrulation', definition: 'Formation of three embryonic germ layers' },
        { term: 'teratogen', definition: 'Agent causing birth defects' },
        { term: 'nuchal translucency', definition: 'Ultrasound measurement for Down syndrome screening' },
      ],
    },
    4: {
      level: 4,
      summary: 'Advanced first trimester understanding includes molecular signaling in development, genetic screening options, and early pregnancy complications.',
      explanation: `**Molecular Signaling:**
- Sonic hedgehog: Patterning
- Wnt pathway: Axis formation
- BMP: Tissue differentiation
- Retinoic acid: Anteroposterior patterning

**Genetic Screening Options:**
- Cell-free DNA: 99% detection for T21, >10 weeks
- Combined screening: NT + PAPP-A + free β-hCG
- Sequential screening: First + second trimester
- CVS: Diagnostic, 10-13 weeks

**First Trimester Complications:**
- Threatened abortion: Bleeding, closed cervix
- Inevitable/incomplete abortion: Open cervix
- Missed abortion: No cardiac activity
- Ectopic pregnancy
- Molar pregnancy

**Hyperemesis Gravidarum:**
- Severe nausea/vomiting
- Dehydration, ketonuria
- Weight loss >5%
- Treatment: IV fluids, antiemetics`,
      keyTerms: [
        { term: 'cell-free DNA', definition: 'Fetal DNA in maternal blood used for screening' },
        { term: 'CVS', definition: 'Chorionic villus sampling - diagnostic test' },
      ],
    },
    5: {
      level: 5,
      summary: 'Comprehensive first trimester knowledge encompasses embryonic signaling networks, implantation biology, and early pregnancy loss mechanisms.',
      explanation: `**Implantation Biology:**
- Apposition, adhesion, invasion
- Window of implantation: Days 20-24
- Pinopode development
- Integrin expression
- Cytokine signaling (LIF, IL-11)

**Early Pregnancy Loss:**
- 10-20% of recognized pregnancies
- 50%+ have chromosomal abnormalities
- Aneuploidy most common cause
- Recurrent loss workup after 2-3 losses

**Trophoblast Development:**
- Cytotrophoblast: Stem cells
- Syncytiotrophoblast: Hormone production, invasion
- Extravillous trophoblast: Spiral artery remodeling

**Molar Pregnancy:**
- Complete mole: 46,XX (paternal)
- Partial mole: Triploid
- hCG markedly elevated
- Risk of GTN

**Ectopic Pregnancy:**
- 2% of pregnancies
- 95% tubal
- Risk factors: Prior PID, ectopic, surgery
- Treatment: Methotrexate or surgery`,
      keyTerms: [
        { term: 'syncytiotrophoblast', definition: 'Multinucleated placental layer producing hCG' },
        { term: 'GTN', definition: 'Gestational trophoblastic neoplasia - complication of molar pregnancy' },
      ],
      clinicalNotes: 'First trimester is critical for organogenesis - counsel on teratogen avoidance. Cell-free DNA screening has largely replaced combined screening at many centers. Early pregnancy bleeding requires ultrasound to determine viability and location.',
    },
  },

  media: [],

  citations: [
    {
      id: 'williams-first',
      type: 'textbook',
      title: 'Embryology and Fetal Development',
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
    structures: ['embryo'],
    topics: ['pregnancy', 'embryology'],
    keywords: ['first trimester', 'embryo', 'organogenesis', 'early pregnancy'],
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
