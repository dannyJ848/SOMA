/**
 * Prenatal Fetal Monitoring Content
 *
 * Coverage of fetal monitoring techniques including NST, BPP, and Doppler studies.
 */

import { EducationalContent } from '../../../types';

export const prenatalMonitoringContent: EducationalContent = {
  id: 'obgyn-prenatal-fetal-monitoring',
  type: 'topic',
  name: 'Fetal Monitoring',
  alternateNames: ['Antenatal testing', 'Fetal surveillance'],
  fmaId: undefined,

  levels: {
    1: {
      level: 1,
      summary: 'Fetal monitoring checks that the baby is healthy during pregnancy.',
      explanation: `Fetal monitoring tests make sure your baby is doing well.

**Types of monitoring:**
- **Kick counts**: Counting baby's movements at home
- **Non-stress test (NST)**: Monitors heart rate and movement
- **Ultrasound**: Looks at baby and fluid levels

**When it is used:**
- High-risk pregnancies
- Past due date
- Concerning symptoms`,
      keyTerms: [
        { term: 'kick counts', definition: 'Counting how often baby moves' },
        { term: 'non-stress test', definition: 'Test checking babys heart rate response to movement' },
      ],
    },
    2: {
      level: 2,
      summary: 'Antenatal fetal surveillance includes NST, biophysical profile, and Doppler studies to assess fetal well-being in high-risk pregnancies.',
      explanation: `**Non-Stress Test (NST):**
- External fetal heart rate monitoring
- Reactive: 2 accelerations (15bpm x 15sec) in 20 min
- Non-reactive: Requires further evaluation

**Biophysical Profile (BPP):**
- 5 components, 2 points each (max 10)
- NST (reactive = 2)
- Fetal breathing (30 sec in 30 min = 2)
- Fetal movement (3 movements = 2)
- Fetal tone (extension/flexion = 2)
- Amniotic fluid (pocket >2cm = 2)

**Modified BPP:**
- NST + amniotic fluid index (AFI)
- Quicker than full BPP
- Commonly used for routine surveillance

**Indications:**
- Decreased fetal movement
- Post-dates pregnancy
- Diabetes, hypertension
- Growth restriction
- Multiple gestation`,
      keyTerms: [
        { term: 'reactive NST', definition: 'Normal test with adequate heart rate accelerations' },
        { term: 'biophysical profile', definition: 'Ultrasound assessment of fetal well-being' },
      ],
    },
    3: {
      level: 3,
      summary: 'Fetal surveillance interpretation requires understanding of test characteristics, timing protocols, and integration with clinical context.',
      explanation: `**NST Interpretation:**
- Baseline: 110-160 bpm
- Variability: Moderate (6-25 bpm)
- Accelerations: 15 bpm x 15 sec (10 x 10 if <32 weeks)
- Decelerations: None concerning

**BPP Scoring:**
| Score | Interpretation | Management |
|-------|---------------|------------|
| 8-10 | Normal | Continue surveillance |
| 6 | Equivocal | Repeat or deliver if term |
| 4 | Abnormal | Consider delivery |
| 0-2 | Abnormal | Delivery usually indicated |

**Testing Frequency:**
- Depends on indication
- Typically weekly or twice weekly
- More frequent if concerning findings

**Contraction Stress Test (CST):**
- Less commonly used
- Negative: No late decelerations with contractions
- Positive: Late decelerations = concerning

**Umbilical Artery Doppler:**
- Used in growth restriction
- Absent/reversed end-diastolic flow = concerning`,
      keyTerms: [
        { term: 'late deceleration', definition: 'Heart rate drop after contraction, concerning for placental insufficiency' },
        { term: 'end-diastolic flow', definition: 'Blood flow between heartbeats, absence suggests high resistance' },
      ],
    },
    4: {
      level: 4,
      summary: 'Advanced fetal surveillance includes Doppler assessment of multiple vessels, computerized analysis, and integration for clinical decision-making.',
      explanation: `**Doppler Studies:**

**Umbilical Artery:**
- S/D ratio, PI (pulsatility index)
- Absent EDF: High risk
- Reversed EDF: Immediate concern

**Middle Cerebral Artery (MCA):**
- Brain sparing in hypoxia
- Low PI = redistribution
- Peak systolic velocity for anemia

**Ductus Venosus:**
- Reflects cardiac function
- Reversed a-wave very concerning
- Used in severe FGR

**Cerebroplacental Ratio (CPR):**
- MCA PI / UA PI
- Low CPR = redistribution
- Predictive of adverse outcome

**Computerized CTG:**
- Objective analysis
- Short-term variability (STV)
- DAWES/REDMAN criteria

**Clinical Integration:**
- No single test perfect
- Serial testing for trends
- Gestational age influences management
- Balance risks of prematurity vs. stillbirth`,
      keyTerms: [
        { term: 'brain sparing', definition: 'Fetal blood flow preferentially directed to brain when stressed' },
        { term: 'cerebroplacental ratio', definition: 'Ratio comparing brain and umbilical blood flow' },
      ],
    },
    5: {
      level: 5,
      summary: 'Comprehensive surveillance knowledge encompasses evidence for testing regimens, limitations of current methods, and emerging technologies.',
      explanation: `**Evidence Base:**
- Meta-analyses show reduced stillbirth with testing
- Optimal frequency uncertain
- False positive rate leads to interventions
- Number needed to treat/harm analyses

**Limitations:**
- Cannot predict acute events
- Normal test reassures only short-term
- Gestational age affects interpretation
- Maternal conditions affect tests

**Emerging Technologies:**
- Fetal ECG analysis (STAN)
- Fetal pulse oximetry (research)
- Continuous home monitoring devices
- AI-assisted pattern recognition

**Integration with Management:**
- Delivery timing decisions
- Antenatal corticosteroids if preterm
- Magnesium for neuroprotection
- NICU consultation

**Quality Considerations:**
- Standardized interpretation
- Provider training
- Equipment maintenance
- Documentation standards

**Research Directions:**
- Biomarkers of fetal distress
- Improved detection of acidemia
- Personalized surveillance protocols`,
      keyTerms: [
        { term: 'stillbirth prediction', definition: 'Goal of surveillance but imperfect with current tools' },
        { term: 'STAN', definition: 'ST-segment analysis of fetal ECG' },
      ],
      clinicalNotes: 'Antenatal testing cannot prevent all stillbirths but reduces risk in high-risk pregnancies. Abnormal testing requires prompt evaluation. Consider gestational age and overall clinical picture in decision-making. Serial testing is more informative than single assessments.',
    },
  },

  media: [],

  citations: [
    {
      id: 'acog-monitoring',
      type: 'article',
      title: 'Antepartum Fetal Surveillance',
      source: 'ACOG Practice Bulletin',
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'obgyn-prenatal-care-overview', targetType: 'topic', relationship: 'parent', label: 'Prenatal Care' },
    { targetId: 'obgyn-pregnancy-third-trimester', targetType: 'pathway', relationship: 'related', label: 'Third Trimester' },
  ],

  tags: {
    systems: ['reproductive'],
    structures: ['fetus'],
    topics: ['prenatal care', 'fetal monitoring'],
    keywords: ['NST', 'BPP', 'fetal monitoring', 'Doppler', 'antenatal testing'],
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
