/**
 * Pregnancy Overview
 *
 * Comprehensive overview of pregnancy including stages, physiological changes, and key milestones.
 */

import { EducationalContent } from '../../../types';

export const pregnancyOverview: EducationalContent = {
  id: 'obgyn-pregnancy-overview',
  type: 'pathway',
  name: 'Pregnancy Overview',
  alternateNames: ['Gestation', 'Prenatal period'],
  fmaId: undefined,

  levels: {
    1: {
      level: 1,
      summary: 'Pregnancy is the 40-week period during which a baby develops inside the uterus.',
      explanation: `Pregnancy begins when a fertilized egg implants in the uterus and lasts about 40 weeks.

**Three trimesters:**
- **First trimester (weeks 1-12)**: Baby's organs start forming
- **Second trimester (weeks 13-27)**: Baby grows and moves
- **Third trimester (weeks 28-40)**: Baby prepares for birth

**Key changes:**
- Body changes to support the baby
- Regular checkups monitor health
- Ends with labor and delivery`,
      keyTerms: [
        { term: 'pregnancy', definition: 'Period when a baby develops inside the mother' },
        { term: 'trimester', definition: 'One of three stages of pregnancy, each about 3 months' },
      ],
    },
    2: {
      level: 2,
      summary: 'Pregnancy involves fertilization, implantation, embryonic development, and fetal growth with maternal physiological adaptations.',
      explanation: `**Conception and Early Development:**
- Fertilization: Sperm meets egg in fallopian tube
- Implantation: Embryo attaches to uterine lining (day 6-12)
- Embryonic period: Weeks 1-8 (organ formation)
- Fetal period: Week 9 to birth (growth and maturation)

**Dating Pregnancy:**
- Last menstrual period (LMP) dating
- Due date: 40 weeks from LMP
- Ultrasound dating most accurate in first trimester

**Maternal Adaptations:**
- Blood volume increases 50%
- Heart rate increases
- Respiratory changes
- Hormonal shifts

**Prenatal Care:**
- Regular visits: Monthly, then biweekly, then weekly
- Labs, screening tests, ultrasounds
- Monitoring for complications`,
      keyTerms: [
        { term: 'gestational age', definition: 'Pregnancy age counted from last menstrual period' },
        { term: 'embryo', definition: 'Developing baby from weeks 1-8' },
        { term: 'fetus', definition: 'Developing baby from week 9 to birth' },
      ],
    },
    3: {
      level: 3,
      summary: 'Pregnancy physiology involves hormonal maintenance, placental function, and multisystem maternal adaptations supporting fetal development.',
      explanation: `**Hormonal Maintenance:**
- hCG: From trophoblast, maintains corpus luteum
- Progesterone: Initially from corpus luteum, then placenta
- Estrogen: Supports uterine growth
- Human placental lactogen: Metabolic effects

**Placental Development:**
- Fully functional by week 12
- Provides nutrition, gas exchange, waste removal
- Produces hormones
- Immunologic barrier

**Cardiovascular Changes:**
- Cardiac output increases 30-50%
- Blood volume increases 50%
- Systemic vascular resistance decreases
- Blood pressure nadirs in second trimester

**Other System Changes:**
- Respiratory: Increased tidal volume
- Renal: GFR increases 50%
- GI: Relaxed sphincters, constipation
- Hematologic: Physiologic anemia`,
      keyTerms: [
        { term: 'hCG', definition: 'Human chorionic gonadotropin - pregnancy hormone detected in tests' },
        { term: 'placenta', definition: 'Organ connecting mother and fetus for nutrient/oxygen exchange' },
      ],
    },
    4: {
      level: 4,
      summary: 'Advanced understanding includes immunology of pregnancy, metabolic adaptations, and recognition of pathological deviations from normal.',
      explanation: `**Immunology of Pregnancy:**
- Semi-allogeneic fetus tolerated
- Th2 shift in maternal immunity
- Regulatory T cells expanded
- HLA-G expression at interface
- Decidual NK cells unique phenotype

**Metabolic Adaptations:**
- Early: Anabolic (fat storage)
- Late: Catabolic (fetal glucose supply)
- Insulin resistance increases
- Diabetogenic state (HPL effect)

**Recognizing Pathology:**
- Hypertension: >140/90 after 20 weeks concerning
- Proteinuria: May indicate preeclampsia
- Excessive weight gain: Risk factor
- Decreased fetal movement: Warrants evaluation

**High-Risk Conditions:**
- Preeclampsia/eclampsia
- Gestational diabetes
- Preterm labor
- Placental abnormalities
- Fetal growth restriction`,
      keyTerms: [
        { term: 'HLA-G', definition: 'Molecule helping fetus avoid maternal immune rejection' },
        { term: 'HPL', definition: 'Human placental lactogen - causes insulin resistance' },
      ],
    },
    5: {
      level: 5,
      summary: 'Comprehensive pregnancy knowledge encompasses molecular mechanisms of implantation, placentation, and the complex orchestration of parturition.',
      explanation: `**Implantation Molecular Biology:**
- Adhesion: Integrins, selectins
- Invasion: Matrix metalloproteinases
- Decidualization: HOXA10, HOXA11
- Angiogenesis: VEGF, PlGF

**Placentation:**
- Extravillous trophoblast invasion
- Spiral artery remodeling
- Failure → preeclampsia, FGR
- First trimester critical period

**Parturition Initiation:**
- Progesterone functional withdrawal
- Estrogen/progesterone ratio increases
- Prostaglandins upregulated
- Oxytocin receptor expression increases
- CRH from placenta

**Fetal Programming:**
- Developmental origins of adult disease
- Epigenetic modifications
- Nutritional influences
- Stress effects

**Research Frontiers:**
- Preeclampsia prediction (sFlt-1/PlGF)
- Cell-free DNA for multiple applications
- Microbiome in pregnancy
- Immunotherapy for recurrent loss`,
      keyTerms: [
        { term: 'trophoblast invasion', definition: 'Placental cells invading uterine wall to establish blood supply' },
        { term: 'fetal programming', definition: 'Intrauterine environment affecting lifelong health' },
      ],
      clinicalNotes: 'Understanding normal pregnancy physiology is essential for recognizing pathology. First trimester is critical for organogenesis (teratogen exposure risk) and placentation (affects later complications). Prenatal care aims to optimize outcomes through screening, education, and early intervention.',
    },
  },

  media: [],

  citations: [
    {
      id: 'williams-obstetrics',
      type: 'textbook',
      title: 'Maternal Physiology',
      source: 'Williams Obstetrics, 26th Edition',
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'obgyn-pregnancy-first-trimester', targetType: 'pathway', relationship: 'child', label: 'First Trimester' },
    { targetId: 'obgyn-pregnancy-fetal-development', targetType: 'pathway', relationship: 'related', label: 'Fetal Development' },
  ],

  tags: {
    systems: ['reproductive'],
    structures: ['uterus', 'placenta'],
    topics: ['pregnancy', 'obstetrics'],
    keywords: ['pregnancy', 'gestation', 'prenatal', 'fetal development'],
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
