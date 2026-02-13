/**
 * Prenatal Screening Content
 *
 * Comprehensive coverage of prenatal screening tests for chromosomal and structural abnormalities.
 */

import { EducationalContent } from '../../../types';

export const prenatalScreeningContent: EducationalContent = {
  id: 'obgyn-prenatal-screening',
  type: 'topic',
  name: 'Prenatal Screening',
  alternateNames: ['Antenatal screening', 'Genetic screening'],
  fmaId: undefined,

  levels: {
    1: {
      level: 1,
      summary: 'Prenatal screening tests check for certain health conditions in the baby before birth.',
      explanation: `Screening tests during pregnancy can find out if your baby might have certain conditions.

**What screening can check for:**
- Down syndrome and other chromosome problems
- Neural tube defects (spina bifida)
- Heart defects

**Important to know:**
- Screening tests are not definitive
- A positive screen means more testing may be needed
- Most babies with positive screens are healthy`,
      keyTerms: [
        { term: 'screening', definition: 'Tests that show if more testing might be needed' },
        { term: 'Down syndrome', definition: 'Condition caused by an extra chromosome 21' },
      ],
    },
    2: {
      level: 2,
      summary: 'Prenatal screening includes blood tests and ultrasound to assess risk for chromosomal abnormalities and birth defects.',
      explanation: `**Screening Options:**

**First Trimester (11-13 weeks):**
- Nuchal translucency (NT) ultrasound
- PAPP-A and free β-hCG blood test
- Combined = 85% detection for Down syndrome

**Cell-Free DNA (>10 weeks):**
- Blood test analyzing fetal DNA in maternal blood
- 99% detection for Down syndrome
- Also screens for trisomy 18, 13, sex chromosomes

**Second Trimester (15-20 weeks):**
- Quad screen: AFP, hCG, estriol, inhibin A
- AFP alone for neural tube defects

**Anatomy Ultrasound (18-22 weeks):**
- Structural survey of all organs
- Detects many birth defects

**Screening vs. Diagnostic:**
- Screening: Assesses risk
- Diagnostic: Confirms diagnosis (CVS, amnio)`,
      keyTerms: [
        { term: 'nuchal translucency', definition: 'Fluid behind babys neck measured by ultrasound' },
        { term: 'cell-free DNA', definition: 'Fetal DNA in mothers blood used for screening' },
      ],
    },
    3: {
      level: 3,
      summary: 'Prenatal screening performance is characterized by detection rate, false-positive rate, and positive predictive value, varying by test and maternal age.',
      explanation: `**Screening Performance:**

| Test | Detection T21 | FPR | Timing |
|------|--------------|-----|--------|
| First trimester combined | 85% | 5% | 11-13 wk |
| Quad screen | 80% | 5% | 15-20 wk |
| Integrated | 95% | 1% | Both |
| cfDNA | 99% | 0.1% | >10 wk |

**Interpreting Results:**
- Screen positive: Increased risk, not diagnosis
- Positive predictive value varies by prevalence
- Younger mothers: Lower PPV despite positive screen
- Confirmatory testing recommended

**Counseling Components:**
- Detection rate vs. false positive rate
- No test is 100% sensitive
- Options if screening positive
- Patient values and preferences

**Special Considerations:**
- Multiple gestation: Limited cfDNA data
- Obesity: May affect AFP
- IVF: Slightly different marker levels
- Vanishing twin: Can affect cfDNA`,
      keyTerms: [
        { term: 'detection rate', definition: 'Percentage of affected pregnancies correctly identified' },
        { term: 'false positive rate', definition: 'Percentage of unaffected pregnancies with positive screen' },
      ],
    },
    4: {
      level: 4,
      summary: 'Advanced screening includes understanding cfDNA technology, microdeletions, and management of discordant results.',
      explanation: `**Cell-Free DNA Technology:**
- Circulating cell-free DNA in maternal plasma
- ~10-15% is fetal (from placenta)
- Fetal fraction affects accuracy
- Low fetal fraction may cause failure or false results

**Conditions Screened:**
- Trisomy 21, 18, 13 (standard)
- Sex chromosome aneuploidies (optional)
- Microdeletions (22q11.2, etc.) - limited data
- Triploidy

**Discordant Results:**
- cfDNA positive, amnio negative: Confined placental mosaicism
- cfDNA negative, affected fetus: Rare false negative
- Sex discordance: May indicate mosaicism, vanishing twin

**Expanded Screening:**
- Microdeletion panels available
- Lower PPV due to low prevalence
- Pre-test counseling important
- ACOG does not recommend routine microdeletion screening

**Carrier Screening:**
- Cystic fibrosis (universal recommendation)
- Spinal muscular atrophy (offered)
- Hemoglobinopathies
- Expanded panels available`,
      keyTerms: [
        { term: 'fetal fraction', definition: 'Percentage of cell-free DNA that is fetal in origin' },
        { term: 'confined placental mosaicism', definition: 'Chromosomal abnormality in placenta but not fetus' },
      ],
    },
    5: {
      level: 5,
      summary: 'Comprehensive screening knowledge encompasses evolving technologies, ethical considerations, and shared decision-making frameworks.',
      explanation: `**Evolving Technologies:**
- Genome-wide cfDNA analysis
- Exome sequencing of cell-free DNA
- Integration with AI for ultrasound
- Proteomics for preeclampsia prediction

**Ethical Considerations:**
- Disability rights perspectives
- Informed vs. routinized testing
- Incidental findings
- Direct-to-consumer testing
- Resource allocation

**Shared Decision-Making:**
- Elicit patient values
- Provide balanced information
- Discuss all options including no testing
- Support autonomous choice
- Decision aids available

**Quality Assurance:**
- Laboratory accreditation
- Reporting standards
- Audit of outcomes
- False positive/negative tracking

**Disparities:**
- Access to screening varies
- Counseling quality varies
- Follow-up completion gaps
- Interpreter availability

**Future Directions:**
- Earlier detection
- More conditions
- Lower cost
- Integration with routine care`,
      keyTerms: [
        { term: 'exome sequencing', definition: 'Sequencing all protein-coding genes' },
        { term: 'decision aid', definition: 'Tool helping patients make informed choices' },
      ],
      clinicalNotes: 'All pregnant patients should be offered aneuploidy screening. cfDNA has highest detection rate but all positives need diagnostic confirmation. Pretest counseling is essential to ensure informed consent. Screen-negative results do not guarantee unaffected pregnancy.',
    },
  },

  media: [],

  citations: [
    {
      id: 'acog-screening',
      type: 'article',
      title: 'Screening for Fetal Chromosomal Abnormalities',
      source: 'ACOG Practice Bulletin',
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'obgyn-prenatal-care-overview', targetType: 'topic', relationship: 'parent', label: 'Prenatal Care Overview' },
    { targetId: 'obgyn-prenatal-diagnostics', targetType: 'topic', relationship: 'related', label: 'Prenatal Diagnostics' },
  ],

  tags: {
    systems: ['reproductive'],
    structures: [],
    topics: ['prenatal care', 'genetics'],
    keywords: ['prenatal screening', 'cfDNA', 'NIPT', 'Down syndrome', 'aneuploidy'],
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
