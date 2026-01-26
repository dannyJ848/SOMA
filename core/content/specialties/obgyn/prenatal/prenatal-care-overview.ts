/**
 * Prenatal Care Overview
 *
 * Comprehensive coverage of prenatal care including visit schedules, screenings, and counseling.
 */

import { EducationalContent } from '../../../types';

export const prenatalCareOverview: EducationalContent = {
  id: 'obgyn-prenatal-care-overview',
  type: 'topic',
  name: 'Prenatal Care Overview',
  alternateNames: ['Antenatal care', 'Pregnancy care'],
  fmaId: undefined,

  levels: {
    1: {
      level: 1,
      summary: 'Prenatal care includes regular checkups during pregnancy to keep mother and baby healthy.',
      explanation: `Prenatal care is healthcare you receive while pregnant.

**What happens at visits:**
- Check your blood pressure and weight
- Listen to baby's heartbeat
- Measure your belly
- Answer your questions

**Visit schedule:**
- Monthly until 28 weeks
- Every 2 weeks from 28-36 weeks
- Weekly from 36 weeks until delivery`,
      keyTerms: [
        { term: 'prenatal care', definition: 'Medical care during pregnancy' },
        { term: 'checkup', definition: 'Regular visit to monitor pregnancy health' },
      ],
    },
    2: {
      level: 2,
      summary: 'Prenatal care involves scheduled visits with specific assessments, laboratory tests, and counseling at each stage of pregnancy.',
      explanation: `**First Visit (8-12 weeks):**
- Complete history and physical
- Confirm pregnancy and dating
- Labs: Blood type, CBC, rubella, hepatitis, HIV, syphilis, urinalysis
- Genetic screening discussion

**First Trimester:**
- Cell-free DNA or combined screening offered
- Ultrasound for dating
- Nutrition and lifestyle counseling

**Second Trimester:**
- Anatomy ultrasound (18-22 weeks)
- Quad screen if not using cfDNA
- Glucose screening (24-28 weeks)

**Third Trimester:**
- GBS screening (35-37 weeks)
- Weekly visits near term
- Fetal monitoring if indicated

**Each Visit:**
- Blood pressure
- Weight
- Fundal height
- Fetal heart tones
- Urine dipstick`,
      keyTerms: [
        { term: 'fundal height', definition: 'Distance from pubic bone to top of uterus in centimeters' },
        { term: 'GBS screening', definition: 'Test for Group B Streptococcus bacteria' },
      ],
    },
    3: {
      level: 3,
      summary: 'Evidence-based prenatal care includes standardized screening protocols, risk stratification, and patient education to optimize outcomes.',
      explanation: `**Risk Stratification:**
- Low-risk: Standard care schedule
- High-risk: More frequent visits, additional testing
- Risk factors: Age, prior complications, medical conditions

**Standardized Screening:**
| Timing | Screening | Purpose |
|--------|-----------|---------|
| First visit | Blood type, Rh, antibody screen | Alloimmunization risk |
| First trimester | cfDNA or NT/labs | Aneuploidy |
| 18-22 weeks | Anatomy ultrasound | Structural defects |
| 24-28 weeks | Glucose tolerance | Gestational diabetes |
| 35-37 weeks | GBS culture | Perinatal infection |

**Patient Education:**
- Warning signs (bleeding, decreased movement, headache)
- Nutrition and weight gain goals
- Exercise recommendations
- Substance avoidance
- Medication safety

**Immunizations:**
- Tdap: 27-36 weeks each pregnancy
- Influenza: Any trimester during flu season
- COVID-19: As recommended`,
      keyTerms: [
        { term: 'cfDNA', definition: 'Cell-free DNA screening for chromosomal abnormalities' },
        { term: 'Tdap', definition: 'Tetanus, diphtheria, pertussis vaccine given in pregnancy' },
      ],
    },
    4: {
      level: 4,
      summary: 'Advanced prenatal care includes management of common pregnancy complaints, recognition of complications, and shared decision-making.',
      explanation: `**Common Complaints Management:**
- Nausea: Ginger, vitamin B6, doxylamine
- Heartburn: Antacids, H2 blockers, PPIs
- Constipation: Fiber, fluids, stool softeners
- Back pain: Physical therapy, support
- Edema: Elevation, compression

**Red Flags Requiring Evaluation:**
- Vaginal bleeding
- Severe headache or visual changes
- Epigastric pain
- Decreased fetal movement
- Signs of preterm labor
- Rupture of membranes

**Shared Decision-Making:**
- Genetic testing options
- Mode of delivery preferences
- Pain management choices
- Cord blood banking
- Breastfeeding plans

**Documentation Standards:**
- Problem list maintained
- Ultrasound reports
- Lab results tracked
- Risk factors documented
- Patient education confirmed`,
      keyTerms: [
        { term: 'shared decision-making', definition: 'Collaborative approach where patient and provider make decisions together' },
      ],
    },
    5: {
      level: 5,
      summary: 'Comprehensive prenatal care encompasses quality metrics, addressing disparities, and emerging care models.',
      explanation: `**Quality Metrics:**
- Prenatal visit initiation (<14 weeks)
- Number of visits (ACOG/AAP recommendations)
- Screening completion rates
- Immunization rates
- Birth outcomes

**Addressing Disparities:**
- Racial/ethnic disparities in maternal outcomes
- Access barriers: Cost, transportation, time
- Implicit bias training
- Culturally competent care
- Community health workers

**Emerging Care Models:**
- Group prenatal care (CenteringPregnancy)
- Telehealth for routine visits
- Home-based monitoring
- Midwifery-led care
- Collaborative practice

**Special Populations:**
- Adolescents: Confidentiality, support
- Advanced maternal age: Enhanced screening
- Multiple gestation: More intensive monitoring
- Substance use disorder: Integrated care

**Global Considerations:**
- WHO focused antenatal care
- Skilled birth attendants
- Emergency obstetric care access
- Maternal mortality reduction`,
      keyTerms: [
        { term: 'CenteringPregnancy', definition: 'Group prenatal care model with peer support' },
        { term: 'skilled birth attendant', definition: 'Trained professional for delivery care' },
      ],
      clinicalNotes: 'Prenatal care reduces maternal and infant morbidity/mortality. Early entry to care allows timely screening. Address barriers to care to reduce disparities. Group care models show improved outcomes and satisfaction.',
    },
  },

  media: [],

  citations: [
    {
      id: 'acog-prenatal',
      type: 'article',
      title: 'Routine Prenatal Care',
      source: 'ACOG',
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'obgyn-prenatal-screening', targetType: 'topic', relationship: 'child', label: 'Prenatal Screening' },
    { targetId: 'obgyn-pregnancy-overview', targetType: 'pathway', relationship: 'related', label: 'Pregnancy Overview' },
  ],

  tags: {
    systems: ['reproductive'],
    structures: [],
    topics: ['prenatal care', 'obstetrics'],
    keywords: ['prenatal care', 'antenatal', 'pregnancy checkup', 'screening'],
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
