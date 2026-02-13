/**
 * Fetal Development Content
 *
 * Comprehensive coverage of fetal development from conception to birth.
 */

import { EducationalContent } from '../../../types';

export const fetalDevelopmentContent: EducationalContent = {
  id: 'obgyn-pregnancy-fetal-development',
  type: 'pathway',
  name: 'Fetal Development',
  alternateNames: ['Embryonic development', 'Prenatal development'],
  fmaId: undefined,

  levels: {
    1: {
      level: 1,
      summary: 'A baby develops from a single cell into a fully formed infant over 40 weeks.',
      explanation: `From the moment of fertilization, a single cell develops into a complete baby.

**Key milestones:**
- Heart begins beating at 6 weeks
- All organs formed by 12 weeks
- Can hear sounds by 18-20 weeks
- Eyes open at 28 weeks
- Ready for birth at 40 weeks

**Size comparison:**
- 4 weeks: Poppy seed
- 8 weeks: Raspberry
- 12 weeks: Lime
- 20 weeks: Banana
- 40 weeks: Watermelon`,
      keyTerms: [
        { term: 'embryo', definition: 'Developing baby during weeks 1-8' },
        { term: 'fetus', definition: 'Developing baby from week 9 to birth' },
      ],
    },
    2: {
      level: 2,
      summary: 'Fetal development progresses through defined stages with specific organ system development during predictable time windows.',
      explanation: `**Developmental Stages:**

**Embryonic Period (Weeks 1-8):**
- Fertilization and implantation
- Gastrulation: Three germ layers
- Organogenesis: All organs form
- Critical period for teratogens

**Fetal Period (Weeks 9-40):**
- Growth and maturation
- Organ systems become functional
- Viability achieved ~24 weeks
- Final lung and brain maturation

**Organ System Timeline:**
| System | Development Period | Functional |
|--------|-------------------|------------|
| Heart | Weeks 3-8 | Week 6 (beats) |
| Brain | Weeks 3-birth | Ongoing |
| Lungs | Weeks 4-36+ | Week 34+ |
| Kidneys | Weeks 5-12 | Week 12 |`,
      keyTerms: [
        { term: 'organogenesis', definition: 'Formation of organs, primarily weeks 3-8' },
        { term: 'germ layers', definition: 'Three cell layers that form all body tissues' },
      ],
    },
    3: {
      level: 3,
      summary: 'Fetal development involves coordinated molecular signaling, morphogenesis, and system maturation with defined critical periods.',
      explanation: `**Germ Layer Derivatives:**

**Ectoderm:**
- Nervous system (brain, spinal cord)
- Skin, hair, nails
- Sensory organs

**Mesoderm:**
- Cardiovascular system
- Musculoskeletal system
- Kidneys, gonads
- Blood cells

**Endoderm:**
- GI tract lining
- Respiratory tract lining
- Liver, pancreas
- Thyroid, parathyroid

**Critical Periods:**
- Neural tube: Days 17-30
- Heart: Days 20-50
- Eyes: Weeks 4-8
- Ears: Weeks 4-9
- Limbs: Weeks 4-8

**Teratogen Categories:**
- Drugs/medications
- Infections (TORCH)
- Radiation
- Metabolic (diabetes)`,
      keyTerms: [
        { term: 'morphogenesis', definition: 'Development of body form and structure' },
        { term: 'TORCH', definition: 'Toxoplasmosis, Others, Rubella, CMV, Herpes - infections affecting fetus' },
      ],
    },
    4: {
      level: 4,
      summary: 'Advanced understanding includes molecular signaling pathways, epigenetic regulation, and specific mechanisms of organ development.',
      explanation: `**Signaling Pathways:**
- Sonic hedgehog: Patterning (limbs, brain, spine)
- Wnt: Axis formation, organ development
- BMP: Bone, heart, limbs
- FGF: Limb and brain development
- Notch: Cell fate decisions
- Retinoic acid: Anteroposterior patterning

**Neurological Development:**
- Neural tube closure: Week 4
- Brain vesicle formation: Weeks 4-5
- Neuronal proliferation: Weeks 8-25
- Neuronal migration: Weeks 12-24
- Gyration: Weeks 24-40
- Myelination: Week 20-postnatal

**Cardiovascular Development:**
- Heart tube: Week 3
- Looping: Week 4
- Septation: Weeks 4-8
- Valve formation: Weeks 5-9

**Limb Development:**
- Limb buds: Week 4
- Apical ectodermal ridge (AER): Outgrowth
- Zone of polarizing activity (ZPA): Patterning
- Digit separation: Week 8`,
      keyTerms: [
        { term: 'sonic hedgehog', definition: 'Signaling molecule critical for patterning and development' },
        { term: 'AER', definition: 'Apical ectodermal ridge - controls limb outgrowth' },
      ],
    },
    5: {
      level: 5,
      summary: 'Comprehensive fetal development knowledge encompasses developmental origins of disease, advanced imaging correlates, and clinical implications of developmental timing.',
      explanation: `**Developmental Origins of Disease:**
- Barker hypothesis
- Intrauterine environment affects adult disease
- Nutritional programming
- Stress and cortisol effects
- Epigenetic modifications

**Fetal Imaging Correlates:**
- Ultrasound milestones by week
- MRI for brain, body abnormalities
- Doppler for circulation assessment
- Correlation with developmental stages

**Congenital Anomalies:**
- 3% of all births
- Genetic (chromosomal, single gene)
- Environmental (teratogens)
- Multifactorial
- Unknown cause (40%)

**Fetal Therapy:**
- Medical: Steroids for lung maturity, anti-arrhythmics
- Surgical: MMC repair, TTTS laser
- Gene therapy: Emerging

**Stem Cell Biology:**
- Pluripotency in early embryo
- Germ layer specification
- Organoid models of development
- Implications for regenerative medicine`,
      keyTerms: [
        { term: 'Barker hypothesis', definition: 'Fetal origins of adult disease - intrauterine programming' },
        { term: 'epigenetic', definition: 'Modifications affecting gene expression without changing DNA sequence' },
      ],
      clinicalNotes: 'Understanding critical periods is essential for teratogen counseling. First trimester is highest risk for structural defects. Third trimester insults more likely to affect growth and brain function. Fetal imaging should be interpreted with knowledge of expected developmental stage.',
    },
  },

  media: [],

  citations: [
    {
      id: 'langman-embryo',
      type: 'textbook',
      title: 'Langman Medical Embryology',
      source: 'Langmans Medical Embryology, 14th Edition',
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'obgyn-pregnancy-overview', targetType: 'pathway', relationship: 'parent', label: 'Pregnancy Overview' },
    { targetId: 'obgyn-pregnancy-first-trimester', targetType: 'pathway', relationship: 'related', label: 'First Trimester' },
  ],

  tags: {
    systems: ['reproductive'],
    structures: ['embryo', 'fetus'],
    topics: ['embryology', 'development'],
    keywords: ['fetal development', 'embryology', 'organogenesis', 'teratogen'],
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
