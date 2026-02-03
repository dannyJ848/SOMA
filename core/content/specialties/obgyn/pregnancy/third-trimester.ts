/**
 * Third Trimester Development
 *
 * Coverage of fetal development and maternal changes during weeks 28-40.
 */

import { EducationalContent } from '../../../types';

export const thirdTrimesterDevelopment: EducationalContent = {
  id: 'obgyn-pregnancy-third-trimester',
  type: 'pathway',
  name: 'Third Trimester Development',
  alternateNames: ['Weeks 28-40', 'Late pregnancy'],
  fmaId: undefined,

  levels: {
    1: {
      level: 1,
      summary: 'The third trimester covers weeks 28-40 when the baby gains weight and prepares for birth.',
      explanation: `During the third trimester, the baby grows rapidly and gets ready to be born.

**What happens:**
- Baby gains most of its weight
- Lungs mature for breathing
- Baby moves into head-down position
- Brain develops rapidly

**Mom may experience:**
- Shortness of breath
- Back pain
- Trouble sleeping
- Braxton Hicks contractions
- Nesting urge`,
      keyTerms: [
        { term: 'full term', definition: 'Pregnancy at 39-40 weeks when baby is ready for birth' },
        { term: 'Braxton Hicks', definition: 'Practice contractions that are not real labor' },
      ],
    },
    2: {
      level: 2,
      summary: 'Third trimester includes final organ maturation, fetal growth, and increased prenatal monitoring as delivery approaches.',
      explanation: `**Fetal Development:**
- **Week 28**: Eyes open, brain growing rapidly
- **Week 32**: Bones hardening, movements strong
- **Week 34**: Lung maturity approaching
- **Week 37**: Early term
- **Week 39-40**: Full term, ready for delivery

**Prenatal Care:**
- Visits every 2 weeks until 36 weeks
- Weekly visits after 36 weeks
- Group B strep screening (35-37 weeks)
- Non-stress tests if indicated

**Fetal Monitoring:**
- Kick counts
- Non-stress test (NST)
- Biophysical profile (BPP)
- Contraction stress test

**Preparing for Delivery:**
- Signs of labor education
- Birth preferences
- When to go to hospital`,
      keyTerms: [
        { term: 'non-stress test', definition: 'Monitor checking fetal heart rate response to movement' },
        { term: 'Group B strep', definition: 'Bacteria that can be passed to baby during delivery' },
      ],
    },
    3: {
      level: 3,
      summary: 'Third trimester involves final lung maturation, brain myelination, and maternal physiological changes reaching their peak.',
      explanation: `**Lung Maturation:**
- Surfactant production accelerates
- Lecithin/sphingomyelin (L/S) ratio indicates maturity
- Phosphatidylglycerol (PG) confirms lung maturity
- Corticosteroids given 24-34 weeks if preterm birth risk

**Brain Development:**
- Rapid growth and gyration
- Myelination begins
- Critical for neurodevelopment
- Vulnerable to hypoxia

**Maternal Physiology Peak:**
- Maximum blood volume at 32 weeks
- Cardiac output 30-50% above baseline
- Respiratory compromise from uterine size
- Edema common

**Third Trimester Complications:**
- Preeclampsia
- Gestational diabetes management
- Placental abruption
- Preterm labor
- PPROM`,
      keyTerms: [
        { term: 'surfactant', definition: 'Lung substance preventing alveolar collapse' },
        { term: 'PPROM', definition: 'Preterm premature rupture of membranes' },
      ],
    },
    4: {
      level: 4,
      summary: 'Advanced third trimester management includes antenatal testing protocols, recognition of preeclampsia, and timing of delivery decisions.',
      explanation: `**Antenatal Testing:**
- Non-stress test: Reactive = 2 accelerations in 20 min
- BPP: 5 components (NST, movement, tone, breathing, AFI)
- Modified BPP: NST + AFI
- Contraction stress test: No late decelerations

**Preeclampsia Recognition:**
- New hypertension + proteinuria after 20 weeks
- Or new HTN + end-organ dysfunction
- Severe features: BP ≥160/110, symptoms, labs
- Management: Delivery timing based on severity

**Timing of Delivery:**
- 39 weeks: Full term, lowest risk
- Early term (37-38): Only if indicated
- Late term (41): Consider induction
- Post-term (42+): Induction recommended

**Fetal Presentation:**
- Cephalic: Head down (normal)
- Breech: Buttocks or feet first
- External cephalic version (ECV) option
- Cesarean for breech common`,
      keyTerms: [
        { term: 'biophysical profile', definition: 'Ultrasound assessment of fetal well-being' },
        { term: 'external cephalic version', definition: 'Turning a breech baby head-down externally' },
      ],
    },
    5: {
      level: 5,
      summary: 'Comprehensive third trimester knowledge encompasses parturition physiology, preterm birth mechanisms, and evidence-based delivery timing.',
      explanation: `**Parturition Physiology:**
- Progesterone functional withdrawal
- Estrogen/progesterone ratio increases
- Oxytocin receptor upregulation
- Prostaglandin synthesis
- Gap junction formation
- CRH increase

**Preterm Birth Mechanisms:**
- Infection/inflammation pathway
- Decidual hemorrhage/abruption
- Cervical disease
- Uterine overdistension
- Stress-mediated

**Lung Maturity Testing:**
- Rarely used now (advanced NICU care)
- L/S ratio ≥2.0 mature
- Presence of PG
- Lamellar body count
- Surfactant/albumin ratio

**Evidence-Based Timing:**
- ARRIVE trial: Induction at 39 weeks reduces cesarean
- Postdates: Induction at 41 weeks standard
- Growth restriction: Depends on severity
- Twins: 37-38 weeks (uncomplicated)

**Delivery Planning:**
- Optimize fetal position
- Group B strep prophylaxis
- Cord blood banking decision
- Immediate postpartum care planning`,
      keyTerms: [
        { term: 'progesterone withdrawal', definition: 'Functional decrease in progesterone effect triggering labor' },
        { term: 'ARRIVE trial', definition: 'Study showing 39-week induction may reduce cesarean risk' },
      ],
      clinicalNotes: 'Antenatal corticosteroids accelerate lung maturity between 24-34 weeks. GBS prophylaxis is given in labor if positive. Most low-risk pregnancies can safely deliver at 39+ weeks. Antenatal testing is used for high-risk pregnancies to assess fetal well-being.',
    },
  },

  media: [],

  citations: [
    {
      id: 'williams-third',
      type: 'textbook',
      title: 'Fetal Development',
      source: 'Williams Obstetrics, 26th Edition',
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'obgyn-pregnancy-overview', targetType: 'pathway', relationship: 'parent', label: 'Pregnancy Overview' },
    { targetId: 'obgyn-labor-delivery-overview', targetType: 'pathway', relationship: 'related', label: 'Labor and Delivery' },
  ],

  tags: {
    systems: ['reproductive'],
    structures: ['fetus'],
    topics: ['pregnancy', 'fetal development'],
    keywords: ['third trimester', 'fetal development', 'term pregnancy', 'antenatal testing'],
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
