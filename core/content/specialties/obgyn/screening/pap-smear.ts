/**
 * Pap Smear
 *
 * Comprehensive coverage of Pap smear testing including technique,
 * interpretation, and clinical significance.
 */

import { EducationalContent } from '../../../types';

export const papSmearContent: EducationalContent = {
  id: 'obgyn-screening-pap-smear',
  type: 'topic',
  name: 'Pap Smear',
  alternateNames: ['Papanicolaou Test', 'Pap Test', 'Cervical Cytology'],

  levels: {
    1: {
      level: 1,
      summary: 'A Pap smear is a test that collects cells from the cervix to look for abnormal changes that could lead to cancer.',
      explanation: `The Pap smear is named after Dr. George Papanicolaou who invented it. It's one of the most successful cancer screening tests ever developed.

**What happens during a Pap smear:**
- You lie on an exam table
- A speculum opens the vagina so the cervix can be seen
- A small brush or spatula gently collects cells from the cervix
- The cells are sent to a lab for examination
- The whole thing takes only a few minutes

**What the test looks for:**
- Abnormal cells that could become cancer
- Signs of HPV infection
- Sometimes infections

**Understanding your results:**

*Normal:*
- No abnormal cells found
- Come back for screening as recommended

*Abnormal:*
- Doesn't mean you have cancer
- Most abnormalities are minor
- May need more tests or follow-up
- Your doctor will explain next steps

**Tips for your appointment:**
- Avoid sex, douching, or vaginal medicines for 2 days before
- Best to schedule when not on your period`,
      keyTerms: [
        { term: 'Pap smear', definition: 'A test that collects and examines cells from the cervix' },
        { term: 'cervix', definition: 'The lower part of the uterus that opens into the vagina' },
        { term: 'speculum', definition: 'A medical tool used to open the vagina for examination' },
      ],
      analogies: [
        'A Pap smear is like checking the walls of a room for signs of water damage before it becomes a big problem.',
      ],
      examples: [
        'A 25-year-old woman has her first Pap smear at her annual exam. The cells are collected painlessly in less than a minute.',
      ],
    },
    2: {
      level: 2,
      summary: 'The Pap smear collects ectocervical and endocervical cells for cytologic evaluation, reported using the Bethesda System with categories ranging from normal to high-grade abnormalities.',
      explanation: `**Collection Technique:**

*Preparation:*
- Avoid intercourse, douching 24-48 hours prior
- Avoid vaginal medications
- Can collect during menses if necessary (less optimal)

*Procedure:*
1. Insert speculum, visualize cervix
2. Ectocervical sample: Spatula rotated 360 degrees
3. Endocervical sample: Cytobrush inserted and rotated
4. Transfer to liquid medium (ThinPrep, SurePath) or slide
5. Liquid-based allows reflex HPV testing

**Bethesda System Categories:**

*Specimen Adequacy:*
- Satisfactory
- Unsatisfactory (specify reason)

*Negative for Intraepithelial Lesion:*
- NILM (normal)
- May note organisms, reactive changes

*Epithelial Abnormalities:*

| Category | Meaning |
|----------|---------|
| ASC-US | Atypical squamous cells, undetermined significance |
| ASC-H | Atypical squamous cells, cannot exclude HSIL |
| LSIL | Low-grade squamous intraepithelial lesion |
| HSIL | High-grade squamous intraepithelial lesion |
| AGC | Atypical glandular cells |
| AIS | Adenocarcinoma in situ |
| Carcinoma | Squamous or adenocarcinoma |

**Understanding Results:**

*ASC-US:*
- Most common abnormal result
- Minor cellular changes
- Often due to HPV
- May resolve spontaneously

*LSIL:*
- Mild abnormality
- Usually HPV-related
- High regression rate

*HSIL:*
- More significant abnormality
- Corresponds to CIN 2/3
- Requires evaluation

*AGC:*
- Glandular cell abnormality
- Always requires colposcopy
- May need endometrial sampling`,
      keyTerms: [
        { term: 'Bethesda System', definition: 'Standardized terminology for reporting cervical cytology results' },
        { term: 'liquid-based cytology', definition: 'Modern Pap technique using liquid medium; allows reflex testing' },
        { term: 'transformation zone', definition: 'Area of cervix where columnar meets squamous cells; site of most abnormalities' },
      ],
    },
    3: {
      level: 3,
      summary: 'Pap smear cytology interpretation requires understanding of normal cytology, HPV-related changes, and the continuum from reactive changes through high-grade lesions, with liquid-based methods enabling ancillary testing.',
      explanation: `**Cytologic Features:**

*Normal Squamous Cells:*
- Superficial: Small pyknotic nuclei, abundant cytoplasm
- Intermediate: Vesicular nuclei, polygonal
- Parabasal: Larger nuclei, round, less mature (atrophy)

*HPV-Related Changes:*
- Koilocytosis: Perinuclear clearing (halo)
- Nuclear enlargement
- Binucleation
- Irregular nuclear membrane

*LSIL Features:*
- Koilocytes
- Nuclear enlargement (>3x intermediate cell nucleus)
- Hyperchromasia
- Normal N:C ratio preserved

*HSIL Features:*
- High nuclear:cytoplasmic ratio
- Marked nuclear abnormalities
- Abnormal chromatin
- Irregular nuclear contour
- May see single cells or syncytial groups

**Adequacy Assessment:**

*Satisfactory Criteria:*
- Minimum cellularity (liquid-based: 5000 cells)
- Transformation zone component (endocervical/metaplastic cells)
- Less than 75% obscured

*Unsatisfactory Reasons:*
- Insufficient cells
- Obscuring blood/inflammation
- Air drying artifact

*Management of Unsatisfactory:*
- If HPV co-tested and positive: Colposcopy
- If no HPV: Repeat in 2-4 months

**Glandular Abnormalities:**

*AGC Categories:*
- AGC-NOS (not otherwise specified)
- AGC favor neoplastic
- Endocervical vs. endometrial
- AIS

*AGC Significance:*
- 9-38% have significant pathology
- May represent cervical or endometrial abnormality
- Always requires colposcopy
- Endometrial sampling if ≥35 or AUB

**Laboratory Quality:**

*CLIA Requirements:*
- Cytotechnologist workload limits
- Pathologist review thresholds
- Proficiency testing
- Correlation with histology`,
      keyTerms: [
        { term: 'koilocyte', definition: 'Cell with perinuclear halo; hallmark of HPV infection' },
        { term: 'N:C ratio', definition: 'Nuclear to cytoplasmic ratio; increased in higher grade lesions' },
        { term: 'transformation zone component', definition: 'Presence of endocervical or metaplastic cells indicating adequate sampling' },
      ],
      clinicalNotes: 'The presence of endocervical cells indicates adequate transformation zone sampling but their absence doesn\'t make the specimen unsatisfactory. AGC is relatively rare but has significant implications - always warrants thorough evaluation.',
    },
    4: {
      level: 4,
      summary: 'Advanced Pap smear interpretation integrates cytology with HPV results, molecular markers, and clinical context to optimize triage decisions and patient management.',
      explanation: `**Cytology-HPV Integration:**

*ASC-US Triage:*
- Reflex HPV preferred approach
- HPV negative: Return to routine
- HPV positive: Colposcopy or 1-year follow-up
- HPV 16/18 positive: Colposcopy

*LSIL Management:*
- HPV testing less useful (most are HPV positive)
- Ages 21-24: 1-year repeat
- Ages ≥25: Colposcopy (HPV-positive) or 1-year (HPV-negative)

*HSIL:*
- Always colposcopy
- Consider expedited treatment if high immediate risk

**Cytology Limitations:**

*Sensitivity:*
- Single Pap: 50-70% for CIN 2+
- Improved with serial testing
- Lower for adenocarcinoma

*False Negatives:*
- Sampling error
- Interpretation error
- Small lesions
- Endocervical lesions

*False Positives:*
- Reactive/repair changes
- Atrophy
- Inflammation
- Radiation changes

**Adjunctive Testing:**

*P16/Ki-67 Dual Stain:*
- Objective biomarker
- Aids triage of ASC-US/LSIL
- May reduce colposcopy
- Not universally available

*HPV Genotyping:*
- HPV 16/18 higher risk
- Guides triage
- Extended genotyping for surveillance

**Special Situations:**

*Atrophic Cytology:*
- Parabasal cells predominate
- Can mimic HSIL
- May need estrogen treatment before repeat
- Evaluate in clinical context

*Post-Treatment Surveillance:*
- Cytology + HPV co-testing
- 6-month intervals initially
- Risk-based duration
- HPV negative: Very reassuring

*Immunocompromised:*
- Lower threshold for colposcopy
- More frequent surveillance
- Higher progression rates`,
      keyTerms: [
        { term: 'p16/Ki-67 dual stain', definition: 'Biomarker test indicating high-grade disease; aids cytology interpretation' },
        { term: 'reflex testing', definition: 'Additional test performed automatically on same specimen based on initial result' },
        { term: 'extended genotyping', definition: 'HPV testing beyond 16/18 to identify other high-risk types' },
      ],
      clinicalNotes: 'The sensitivity limitation of single Pap smears is why regular screening is important. Integration with HPV testing has improved detection. Biomarkers like p16/Ki-67 may further refine triage of equivocal results.',
    },
    5: {
      level: 5,
      summary: 'The evolution of cervical cytology includes AI-assisted screening, molecular augmentation, and the shifting landscape as HPV vaccination changes disease prevalence.',
      explanation: `**AI-Assisted Cytology:**

*Current Applications:*
- Automated screening of slides
- Location-guided screening
- Pre-screening to identify high-risk slides
- Quality control

*FDA-Approved Systems:*
- FocalPoint (liquid-based)
- ThinPrep Imaging System
- Reduces false negatives
- Improves efficiency

*Future Directions:*
- Deep learning algorithms
- Point-of-care analysis
- Integration with HPV results
- Resource-limited settings

**Molecular Evolution:**

*Current:*
- HPV DNA testing
- HPV 16/18 genotyping
- p16/Ki-67 immunocytochemistry

*Emerging:*
- HPV mRNA (E6/E7)
- Methylation markers (FAM19A4, CADM1)
- MicroRNA panels
- Cell-based biomarkers

*Future:*
- Multi-marker panels
- Liquid biopsy approaches
- Protein biomarkers
- Artificial intelligence integration

**Impact of Vaccination:**

*Changes in Cytology:*
- Declining abnormality rates
- Shift in HPV type distribution
- Lower positive predictive value
- Algorithm modifications needed

*Australia Experience:*
- Dramatic decline in high-grade abnormalities
- Moving to HPV-primary screening
- Considering longer intervals
- Model for other countries

**Quality Improvement:**

*Laboratory:*
- Cytology-histology correlation
- Proficiency testing
- Workload management
- Continuous education

*Clinical:*
- Adequate sample collection
- Follow-up of abnormals
- Communication of results
- Patient education

**Future of Cytology:**

*Potential Scenarios:*
- Primary HPV testing with cytology triage
- Molecular-only screening
- Risk-based personalized protocols
- Integration with self-collection

*Ongoing Role:*
- Triage of HPV-positive
- Post-treatment surveillance
- Clinical evaluation of symptomatic
- Glandular abnormality detection`,
      keyTerms: [
        { term: 'location-guided screening', definition: 'AI identifies suspicious areas on slide for cytotechnologist review' },
        { term: 'methylation markers', definition: 'Epigenetic changes that may help triage HPV-positive women' },
        { term: 'HPV mRNA testing', definition: 'Tests for HPV E6/E7 oncogene expression; may indicate active infection' },
      ],
      clinicalNotes: 'As vaccination reduces disease prevalence, the role of cytology is evolving. HPV testing is taking the lead, but cytology remains important for triage of HPV-positive results and specific clinical situations. AI will likely transform cytology practice.',
    },
  },

  media: [
    {
      id: 'pap-technique',
      type: 'diagram',
      filename: 'pap-smear-collection.svg',
      title: 'Pap Smear Collection Technique',
      description: 'Step-by-step illustration of Pap smear collection',
    },
  ],

  citations: [
    {
      id: 'bethesda-system',
      type: 'textbook',
      title: 'The Bethesda System for Reporting Cervical Cytology',
      source: 'Springer',
      authors: ['Nayar R', 'Wilbur DC'],
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'obgyn-screening-cervical', targetType: 'topic', relationship: 'parent', label: 'Cervical Cancer Screening' },
    { targetId: 'obgyn-screening-hpv-testing', targetType: 'topic', relationship: 'sibling', label: 'HPV Testing' },
  ],

  tags: {
    systems: ['reproductive'],
    topics: ['screening', 'cytology', 'cervical cancer'],
    keywords: ['Pap smear', 'cytology', 'Bethesda', 'cervical screening'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['obgyn', 'pathology'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
