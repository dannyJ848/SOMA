/**
 * Second Trimester Development
 *
 * Coverage of fetal development and maternal changes during weeks 13-27.
 */

import { EducationalContent } from '../../../types';

export const secondTrimesterDevelopment: EducationalContent = {
  id: 'obgyn-pregnancy-second-trimester',
  type: 'pathway',
  name: 'Second Trimester Development',
  alternateNames: ['Weeks 13-27', 'Mid-pregnancy'],
  fmaId: undefined,

  levels: {
    1: {
      level: 1,
      summary: 'The second trimester covers weeks 13-27 when the baby grows rapidly and mom starts feeling movements.',
      explanation: `During the second trimester, the baby grows quickly and many mothers feel better as nausea often improves.

**What happens:**
- Baby moves and kicks (usually felt around week 20)
- Sex can often be determined
- Baby's hearing develops
- By week 27, baby is about 14 inches long

**Mom may experience:**
- "Pregnancy glow"
- Feeling movements (quickening)
- Growing belly
- Fewer symptoms than first trimester`,
      keyTerms: [
        { term: 'quickening', definition: 'First movements felt by the mother' },
        { term: 'fetus', definition: 'Developing baby from week 9 until birth' },
      ],
    },
    2: {
      level: 2,
      summary: 'The second trimester features rapid fetal growth, organ maturation, and the anatomy ultrasound.',
      explanation: `**Fetal Development by Week:**
- **Week 13-14**: Fetus moves, fingerprints form
- **Week 16**: Hearing develops
- **Week 18-20**: Anatomy ultrasound, sex determination
- **Week 20**: Halfway point, vernix caseosa appears
- **Week 24**: Viability threshold
- **Week 27**: Eyes open, surfactant production begins

**Second Trimester Screening:**
- Anatomy ultrasound (18-22 weeks)
- Quad screen (if not using cfDNA)
- Glucose screening (24-28 weeks)

**Maternal Changes:**
- Fundal height measurable
- Uterus rises out of pelvis
- Round ligament pain common
- Braxton Hicks contractions may begin`,
      keyTerms: [
        { term: 'anatomy ultrasound', definition: 'Detailed scan checking fetal organs and structures' },
        { term: 'viability', definition: 'Point when fetus could survive outside the womb' },
      ],
    },
    3: {
      level: 3,
      summary: 'Second trimester fetal development includes CNS maturation, lung development initiation, and establishment of fetal movements assessed on ultrasound.',
      explanation: `**Organ Development:**
- Brain: Rapid neuronal proliferation and migration
- Lungs: Canalicular stage begins (weeks 16-26)
- Heart: Four-chamber structure, valves form
- Kidneys: Producing urine, contributing to amniotic fluid
- GI: Swallowing amniotic fluid

**Fetal Assessment:**
- Anatomy scan: 18-22 weeks
- Checks: Brain, heart, spine, kidneys, extremities
- Placental location
- Cervical length

**Second Trimester Complications:**
- Cervical insufficiency
- Second trimester loss
- Preterm labor warning signs
- Placenta previa (may resolve)

**Genetic Testing:**
- Amniocentesis: 15-20 weeks
- Diagnostic testing if screening positive
- Array CGH or karyotype`,
      keyTerms: [
        { term: 'amniocentesis', definition: 'Procedure sampling amniotic fluid for genetic testing' },
        { term: 'cervical insufficiency', definition: 'Painless cervical dilation leading to pregnancy loss' },
      ],
    },
    4: {
      level: 4,
      summary: 'Advanced understanding includes fetal circulation, surfactant development, and management of second trimester complications.',
      explanation: `**Fetal Circulation:**
- Three shunts: Ductus venosus, foramen ovale, ductus arteriosus
- Oxygenated blood from placenta
- Right-to-left shunting bypasses lungs
- Closes at birth

**Lung Development:**
- Pseudoglandular (5-16 weeks): Airway branching
- Canalicular (16-26 weeks): Vascularization, type II cells
- Saccular (26-36 weeks): Air sacs form
- Surfactant production begins ~24 weeks

**Cervical Insufficiency Management:**
- History-indicated cerclage
- Ultrasound-indicated cerclage
- Progesterone supplementation
- Serial cervical length monitoring

**Preterm Birth Prevention:**
- Risk factors: Prior PTB, short cervix, multiples
- Progesterone (17-OHPC or vaginal)
- Cerclage if indicated
- Fetal fibronectin testing`,
      keyTerms: [
        { term: 'surfactant', definition: 'Substance preventing lung collapse, produced by type II pneumocytes' },
        { term: 'cerclage', definition: 'Stitch placed in cervix to prevent preterm birth' },
      ],
    },
    5: {
      level: 5,
      summary: 'Comprehensive second trimester knowledge encompasses fetal programming, brain development milestones, and advanced imaging techniques.',
      explanation: `**Fetal Brain Development:**
- Neuronal proliferation peaks
- Migration to cortical plate
- Gyration begins ~24 weeks
- Synaptogenesis initiating
- Vulnerable to hypoxia, infection

**Fetal Programming:**
- Developmental origins of adult disease
- Nutritional influences
- Stress and cortisol effects
- Epigenetic modifications

**Advanced Imaging:**
- Fetal echocardiography for cardiac defects
- Fetal MRI for brain, body abnormalities
- 3D/4D ultrasound for facial defects
- Doppler for fetal well-being

**Periviable Counseling:**
- 22-25 weeks: Complex decisions
- Survival and morbidity data
- Family values and goals
- Resuscitation decisions

**Fetal Surgery:**
- Myelomeningocele repair
- Twin-twin transfusion laser ablation
- Congenital diaphragmatic hernia intervention`,
      keyTerms: [
        { term: 'periviable', definition: 'Gestational age at limits of viability (22-25 weeks)' },
        { term: 'fetal MRI', definition: 'Magnetic resonance imaging for detailed fetal evaluation' },
      ],
      clinicalNotes: 'The anatomy ultrasound is a key second trimester milestone. Viability threshold varies by institution but generally ~24 weeks. Antenatal corticosteroids given 24-34 weeks accelerate lung maturity. Cervical length screening identifies preterm birth risk.',
    },
  },

  media: [],

  citations: [
    {
      id: 'williams-second',
      type: 'textbook',
      title: 'Fetal Development',
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
    structures: ['fetus'],
    topics: ['pregnancy', 'fetal development'],
    keywords: ['second trimester', 'fetal development', 'anatomy scan', 'viability'],
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
