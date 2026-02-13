/**
 * Uterine Cycle Content
 *
 * Detailed physiology of the uterine/endometrial cycle including
 * proliferative, secretory, and menstrual phases.
 */

import { EducationalContent } from '../../../types';

export const uterineCycleContent: EducationalContent = {
  id: 'obgyn-physiology-uterine-cycle',
  type: 'pathway',
  name: 'Uterine Cycle',
  alternateNames: ['Endometrial cycle', 'Uterine lining cycle'],
  fmaId: undefined,

  levels: {
    1: {
      level: 1,
      summary: 'The uterine cycle is the monthly changes in the uterus lining that prepare for pregnancy.',
      explanation: `Each month, the lining of the uterus (called the endometrium) goes through changes to prepare for a possible pregnancy.

**Three phases:**
1. **Menstrual phase**: The lining sheds (your period)
2. **Building phase**: The lining grows thicker
3. **Secretory phase**: The lining becomes rich and ready for a fertilized egg

If pregnancy does not occur, the cycle starts over with another period.`,
      keyTerms: [
        { term: 'endometrium', definition: 'The inner lining of the uterus that changes each month' },
        { term: 'period', definition: 'Monthly bleeding when the uterus lining sheds' },
      ],
    },
    2: {
      level: 2,
      summary: 'The uterine cycle consists of menstrual, proliferative, and secretory phases coordinated with ovarian hormone production.',
      explanation: `**Phases of the Uterine Cycle:**

**1. Menstrual Phase (Days 1-5)**
- Functional layer of endometrium sheds
- Blood loss averages 30-40 mL
- Triggered by progesterone withdrawal

**2. Proliferative Phase (Days 5-14)**
- Estrogen stimulates endometrial growth
- Glands elongate and become tubular
- Thickness increases from 1-2mm to 8-10mm
- Spiral arteries develop

**3. Secretory Phase (Days 15-28)**
- Progesterone from corpus luteum
- Glands become coiled and secretory
- Glycogen accumulates
- Stromal cells prepare for implantation

**Hormone Control:**
- Estrogen: Drives proliferation
- Progesterone: Induces secretory changes`,
      keyTerms: [
        { term: 'proliferative phase', definition: 'Growth phase of the endometrium driven by estrogen' },
        { term: 'secretory phase', definition: 'Phase when endometrium produces nutrients for potential embryo' },
        { term: 'spiral arteries', definition: 'Coiled blood vessels in the endometrium' },
      ],
    },
    3: {
      level: 3,
      summary: 'The uterine cycle involves distinct histological changes with specific molecular markers characterizing endometrial receptivity during the implantation window.',
      explanation: `**Detailed Phase Histology:**

**Proliferative Phase:**
- Early: Thin, straight glands, compact stroma
- Mid: Glands elongate, pseudostratified epithelium
- Late: Tortuous glands, mitotic activity peaks

**Secretory Phase:**
- Early (Days 15-19): Subnuclear vacuoles, glycogen accumulation
- Mid (Days 20-22): Peak secretory activity, predecidual changes
- Late (Days 23-28): Exhausted glands, decidualization, spiral artery coiling

**Implantation Window (Days 20-24):**
- Pinopode development
- Expression of integrins (αvβ3)
- LIF and glycodelin secretion
- Maximum endometrial receptivity

**Menstrual Cascade:**
1. Progesterone withdrawal
2. MMP activation (matrix metalloproteinases)
3. Spiral artery constriction
4. Tissue ischemia and necrosis
5. Prostaglandin-mediated shedding`,
      keyTerms: [
        { term: 'decidualization', definition: 'Transformation of stromal cells to support implantation' },
        { term: 'pinopodes', definition: 'Apical projections marking endometrial receptivity' },
        { term: 'MMPs', definition: 'Matrix metalloproteinases that break down endometrial tissue' },
      ],
    },
    4: {
      level: 4,
      summary: 'Advanced understanding includes molecular regulation of endometrial receptivity, steroid receptor dynamics, and the role of local mediators in menstruation.',
      explanation: `**Molecular Regulation:**

**Estrogen Action:**
- ERα predominates in proliferative phase
- Upregulates progesterone receptors
- Activates proliferative genes: cyclin D1, IGF-1

**Progesterone Action:**
- Downregulates ERα
- Induces secretory differentiation
- Activates IGFBP-1, glycodelin
- HOXA10/11 expression for receptivity

**Local Mediators:**

**Prostaglandins:**
- PGE2: Vasodilation, angiogenesis
- PGF2α: Vasoconstriction, myometrial contraction
- Balance shifts toward PGF2α at menstruation

**Cytokines:**
- IL-1, IL-6: Inflammatory response
- LIF: Essential for implantation
- TNF-α: Tissue remodeling

**Hemostasis:**
- Initial hemorrhage from spiral arteries
- Platelet aggregation
- Tissue factor activation
- Resolution by re-epithelialization`,
      keyTerms: [
        { term: 'LIF', definition: 'Leukemia inhibitory factor, essential for embryo implantation' },
        { term: 'HOXA10', definition: 'Homeobox gene critical for endometrial receptivity' },
      ],
    },
    5: {
      level: 5,
      summary: 'Comprehensive understanding encompasses epigenetic regulation, stem cell biology of endometrial regeneration, and clinical implications for implantation failure and abnormal uterine bleeding.',
      explanation: `**Epigenetic Regulation:**
- DNA methylation patterns cycle-dependent
- Histone acetylation regulates gene accessibility
- microRNAs modulate receptor expression
- Dysregulation linked to endometriosis, cancer

**Endometrial Stem Cells:**
- Basal layer contains progenitor cells
- Regeneration after each menstruation
- CD146+/PDGFRβ+ mesenchymal stem cells
- Epithelial progenitors in gland bases

**Clinical Correlations:**

**Implantation Failure:**
- Aberrant integrin expression
- Thin endometrium (<7mm)
- Chronic endometritis
- Altered microbiome

**Abnormal Uterine Bleeding:**
- Anovulation: Unopposed estrogen
- Fibroids: Vascular abnormalities
- Adenomyosis: Disrupted junctional zone
- Coagulopathy: Impaired hemostasis

**Therapeutic Targets:**
- Progestins: Stabilize endometrium
- Tranexamic acid: Antifibrinolytic
- NSAIDs: Reduce prostaglandins
- GnRH agonists: Induce amenorrhea`,
      keyTerms: [
        { term: 'junctional zone', definition: 'Inner myometrium, abnormalities associated with adenomyosis' },
        { term: 'endometrial progenitor cells', definition: 'Stem cells enabling monthly endometrial regeneration' },
      ],
      clinicalNotes: 'Endometrial dating by histology was once standard but now recognized as unreliable. Molecular markers of receptivity (ERA test) may guide embryo transfer timing in IVF.',
    },
  },

  media: [],

  citations: [
    {
      id: 'williams-uterine',
      type: 'textbook',
      title: 'Reproductive Endocrinology',
      source: 'Williams Gynecology, 4th Edition',
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'obgyn-physiology-menstrual-cycle', targetType: 'pathway', relationship: 'parent', label: 'Menstrual Cycle' },
    { targetId: 'obgyn-anatomy-uterus', targetType: 'structure', relationship: 'related', label: 'Uterus Anatomy' },
  ],

  tags: {
    systems: ['reproductive'],
    structures: ['uterus', 'endometrium'],
    topics: ['physiology'],
    keywords: ['uterine cycle', 'endometrium', 'menstruation', 'implantation'],
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
