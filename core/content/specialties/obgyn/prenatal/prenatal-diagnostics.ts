/**
 * Prenatal Diagnostics Content
 *
 * Coverage of diagnostic procedures including amniocentesis and CVS.
 */

import { EducationalContent } from '../../../types';

export const prenatalDiagnosticsContent: EducationalContent = {
  id: 'obgyn-prenatal-diagnostics',
  type: 'topic',
  name: 'Prenatal Diagnostic Testing',
  alternateNames: ['Invasive testing', 'Amniocentesis', 'CVS'],
  fmaId: undefined,

  levels: {
    1: {
      level: 1,
      summary: 'Diagnostic tests can definitively determine if a baby has certain genetic conditions.',
      explanation: `Diagnostic tests give definite answers about genetic conditions in the baby.

**Two main procedures:**
- **CVS (Chorionic Villus Sampling)**: Sample from placenta (10-13 weeks)
- **Amniocentesis**: Sample of fluid around baby (15+ weeks)

**Why they are done:**
- Positive screening test
- Family history of genetic condition
- Previous affected pregnancy
- Maternal age (optional indication)`,
      keyTerms: [
        { term: 'amniocentesis', definition: 'Procedure taking sample of fluid around baby' },
        { term: 'CVS', definition: 'Procedure taking sample from the placenta' },
      ],
    },
    2: {
      level: 2,
      summary: 'CVS and amniocentesis are invasive procedures that provide definitive diagnosis of chromosomal and genetic conditions.',
      explanation: `**Chorionic Villus Sampling (CVS):**
- Timing: 10-13 weeks
- Sample: Placental tissue
- Approach: Transabdominal or transcervical
- Results: Karyotype, microarray, targeted testing
- Risk: ~0.2% pregnancy loss

**Amniocentesis:**
- Timing: 15+ weeks (typically 15-20)
- Sample: Amniotic fluid
- Approach: Transabdominal
- Results: Karyotype, microarray, AFP, targeted testing
- Risk: ~0.1-0.3% pregnancy loss

**What They Diagnose:**
- Chromosomal abnormalities (trisomies, etc.)
- Microdeletions/duplications (with microarray)
- Single gene disorders (if tested specifically)
- Neural tube defects (amnio AFP)

**Results Timing:**
- Rapid FISH: 24-48 hours
- Karyotype: 7-14 days
- Microarray: 7-14 days`,
      keyTerms: [
        { term: 'karyotype', definition: 'Analysis of chromosome number and structure' },
        { term: 'microarray', definition: 'Test detecting small chromosomal deletions/duplications' },
      ],
    },
    3: {
      level: 3,
      summary: 'Diagnostic testing indications include positive screening, structural anomalies, and family history, with procedural risks and limitations to discuss.',
      explanation: `**Indications:**
- Positive aneuploidy screening
- Fetal structural anomaly on ultrasound
- Family history of genetic condition
- Prior affected pregnancy
- Parental chromosomal rearrangement
- Patient request (no indication required)

**Counseling Points:**
- Procedure description
- Risks: Loss, bleeding, infection, cramping
- Results timing
- Limitations: Not all conditions detected
- Options based on results

**CVS-Specific Considerations:**
- Earlier results = earlier decision-making
- Cannot detect neural tube defects
- Risk of confined placental mosaicism (~1%)
- Limb reduction risk if <10 weeks

**Amniocentesis-Specific:**
- Later timing may be challenging
- AFP for neural tube defects
- More amniocytes may improve culture
- Can assess fetal lung maturity (rarely done now)`,
      keyTerms: [
        { term: 'FISH', definition: 'Fluorescence in situ hybridization - rapid targeted chromosomal analysis' },
        { term: 'confined placental mosaicism', definition: 'Chromosomal difference between placenta and fetus' },
      ],
    },
    4: {
      level: 4,
      summary: 'Advanced diagnostic considerations include microarray interpretation, exome sequencing, and management of complex results.',
      explanation: `**Chromosomal Microarray:**
- Detects copy number variants (CNVs)
- Resolution: 50-100kb (much higher than karyotype)
- Detects ~6% more abnormalities than karyotype
- Limitation: Balanced rearrangements not detected
- Challenge: Variants of uncertain significance (VUS)

**Exome Sequencing:**
- Sequences all protein-coding genes
- Indicated for multiple anomalies, normal array
- Diagnostic yield: 25-35% with anomalies
- Trio analysis (parents + fetus) most informative
- Turnaround improving (2-3 weeks possible)

**Complex Results Management:**
- VUS: May need parental testing
- Mosaicism: Confirm in additional cell lines
- Incidental findings: Follow ACMG guidelines
- Discordant ultrasound/genetics: Reanalysis

**Procedural Complications:**
- Post-procedure cramping: Common, self-limited
- Fluid leakage: Usually self-seals
- Chorioamnionitis: Rare, may require delivery
- Fetal injury: Extremely rare`,
      keyTerms: [
        { term: 'variant of uncertain significance', definition: 'Genetic change whose impact is unknown' },
        { term: 'copy number variant', definition: 'Deletion or duplication of chromosomal segment' },
      ],
    },
    5: {
      level: 5,
      summary: 'Comprehensive diagnostic knowledge includes genome sequencing applications, ethical considerations, and evolving practice patterns.',
      explanation: `**Genome Sequencing:**
- Whole genome vs. whole exome
- Research settings transitioning to clinical
- Higher diagnostic yield
- Interpretation challenges
- Cost considerations

**Ethical Considerations:**
- Right not to know
- Incidental findings disclosure
- Adult-onset conditions
- Reproductive decisions
- Access and equity

**Evolving Practice:**
- First-tier microarray replaces karyotype
- Exome for specific indications
- Prenatal genome sequencing emerging
- cfDNA reducing invasive testing rates
- Rapid results improving timelines

**Multidisciplinary Care:**
- Genetic counseling essential
- Maternal-fetal medicine
- Pediatric subspecialists
- Social work support
- Ethics consultation available

**Quality Metrics:**
- Procedure success rates
- Complication rates
- Diagnostic yield
- Follow-up completion`,
      keyTerms: [
        { term: 'whole exome sequencing', definition: 'Sequencing all ~20,000 protein-coding genes' },
        { term: 'diagnostic yield', definition: 'Percentage of tests providing definitive diagnosis' },
      ],
      clinicalNotes: 'Invasive testing remains the gold standard for definitive prenatal diagnosis. Microarray is now first-line over karyotype. Exome sequencing is indicated when ultrasound shows anomalies with normal array. Shared decision-making is essential given personal values around testing.',
    },
  },

  media: [],

  citations: [
    {
      id: 'acog-diagnostics',
      type: 'article',
      title: 'Prenatal Diagnostic Testing',
      source: 'ACOG Practice Bulletin',
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'obgyn-prenatal-screening', targetType: 'topic', relationship: 'related', label: 'Prenatal Screening' },
    { targetId: 'obgyn-prenatal-care-overview', targetType: 'topic', relationship: 'parent', label: 'Prenatal Care' },
  ],

  tags: {
    systems: ['reproductive'],
    structures: [],
    topics: ['prenatal care', 'genetics', 'procedures'],
    keywords: ['amniocentesis', 'CVS', 'prenatal diagnosis', 'microarray', 'karyotype'],
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
