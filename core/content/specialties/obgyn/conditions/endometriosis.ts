/**
 * Endometriosis
 *
 * Comprehensive coverage of endometriosis including pathophysiology,
 * symptoms, diagnosis, and treatment options.
 */

import { EducationalContent } from '../../../types';

export const endometriosis: EducationalContent = {
  id: 'obgyn-conditions-endometriosis',
  type: 'condition',
  name: 'Endometriosis',
  alternateNames: ['Endo', 'Endometriotic Disease'],

  levels: {
    1: {
      level: 1,
      summary: 'Endometriosis is when tissue similar to the uterus lining grows outside the uterus, causing pain and sometimes fertility problems.',
      explanation: `Normally, tissue lines the inside of the uterus. In endometriosis, similar tissue grows in places where it should not be.

**Where can it grow?**
- On the ovaries
- On the fallopian tubes
- On the outside of the uterus
- On the bowel or bladder
- Other places in the pelvis

**What happens:**
- This tissue acts like normal uterine lining
- It bleeds with each period
- But the blood has nowhere to go
- This causes inflammation, pain, and scar tissue

**Common symptoms:**
- Painful periods (often severe)
- Pain with sex
- Pain with bowel movements
- Pelvic pain even between periods
- Difficulty getting pregnant
- Heavy periods

**Treatment:**
- Pain medication
- Hormonal birth control
- Surgery to remove the tissue
- Fertility treatments if trying to conceive`,
      keyTerms: [
        { term: 'endometriosis', definition: 'A condition where tissue like the uterus lining grows outside the uterus' },
        { term: 'implants', definition: 'Patches of endometriosis tissue outside the uterus' },
        { term: 'inflammation', definition: 'The body\'s response that causes swelling, redness, and pain' },
      ],
      analogies: [
        'Endometriosis is like having garden plants that escaped and started growing where they shouldn\'t - they still try to grow and bloom but cause problems in the wrong location.',
      ],
      examples: [
        'A woman with endometriosis might have period cramps so severe she cannot go to work or school.',
      ],
    },
    2: {
      level: 2,
      summary: 'Endometriosis is characterized by estrogen-dependent endometrial-like tissue outside the uterus, causing chronic pelvic pain, dysmenorrhea, dyspareunia, and infertility.',
      explanation: `**Definition:**
Presence of endometrial glands and stroma outside the uterine cavity, most commonly in the pelvis.

**Common Locations:**
- Ovaries (endometriomas/"chocolate cysts")
- Uterosacral ligaments
- Posterior cul-de-sac
- Bladder
- Bowel (rectosigmoid)
- Fallopian tubes

**Classic Symptoms (3 D's + Infertility):**
- **D**ysmenorrhea (painful periods)
- **D**yspareunia (painful intercourse)
- **D**yschezia (painful bowel movements)
- Infertility (30-50% of affected women)

**Diagnosis:**
- Clinical history and exam
- Imaging (ultrasound, MRI for endometriomas)
- Definitive diagnosis: Laparoscopy with biopsy
- CA-125 may be elevated (not diagnostic)

**Staging (rASRM):**
- Stage I: Minimal
- Stage II: Mild
- Stage III: Moderate
- Stage IV: Severe
*Note: Stage does not correlate with pain severity*

**Treatment Goals:**
- Pain relief
- Prevent progression
- Improve fertility
- Improve quality of life`,
      keyTerms: [
        { term: 'endometrioma', definition: 'Ovarian cyst filled with old blood ("chocolate cyst"); common in endometriosis' },
        { term: 'dyspareunia', definition: 'Pain during sexual intercourse', pronunciation: 'dis-pah-ROO-nee-ah' },
        { term: 'laparoscopy', definition: 'Minimally invasive surgery using a camera; gold standard for diagnosis' },
      ],
    },
    3: {
      level: 3,
      summary: 'Endometriosis involves ectopic endometrial-like tissue with local estrogen production, inflammation, and neuroangiogenesis, requiring multimodal management addressing pain, fertility, and disease progression.',
      explanation: `**Pathophysiology Theories:**

*Retrograde Menstruation (Sampson):*
- Menstrual tissue flows backward through tubes
- Implants and grows in pelvis
- Most accepted theory
- But most women have retrograde flow; few develop disease

*Coelomic Metaplasia:*
- Peritoneal cells transform into endometrial tissue
- May explain rare cases (men, premenarchal girls)

*Stem Cell Theory:*
- Endometrial stem cells disseminate
- Via lymphatics or blood
- May explain distant disease

**Disease Characteristics:**

*Estrogen Dependence:*
- Local aromatase expression
- Creates estrogen-rich microenvironment
- Progesterone resistance
- Basis for hormonal therapy

*Inflammation:*
- Elevated peritoneal cytokines (IL-1, IL-6, TNF-α)
- Altered immune function
- Contributes to pain and infertility
- Oxidative stress

*Neuroangiogenesis:*
- New nerve fiber growth
- Increased pain sensitivity
- Central sensitization
- Explains chronic pain

**Clinical Phenotypes:**

| Type | Location | Characteristics |
|------|----------|-----------------|
| Superficial | Peritoneum | Red, white, black lesions |
| Ovarian | Ovaries | Endometriomas |
| Deep infiltrating | >5mm depth | Nodules, bowel/bladder involvement |

**Diagnostic Approach:**

*Clinical:*
- History: Progressive dysmenorrhea, family history
- Exam: Nodularity of uterosacral ligaments, fixed uterus

*Imaging:*
- Transvaginal US: Endometriomas (ground glass appearance)
- MRI: Deep infiltrating disease mapping

*Surgical:*
- Laparoscopy: Visualization and biopsy
- Histology: Endometrial glands/stroma + hemosiderin

**Medical Management:**

*First-line:*
- NSAIDs
- Combined hormonal contraceptives (continuous)
- Progestins (oral, depot, IUD)

*Second-line:*
- GnRH agonists with add-back
- GnRH antagonists (elagolix, relugolix)
- Aromatase inhibitors (off-label)

*Surgical:*
- Excision > ablation for deep disease
- Endometrioma cystectomy
- Hysterectomy with BSO (last resort)`,
      keyTerms: [
        { term: 'deep infiltrating endometriosis', definition: 'Endometriosis penetrating >5mm beneath peritoneal surface; may involve bowel or bladder' },
        { term: 'central sensitization', definition: 'CNS changes causing heightened pain perception; contributes to chronic pain' },
        { term: 'progesterone resistance', definition: 'Reduced response to progesterone in endometriotic tissue' },
      ],
      clinicalNotes: 'Staging does not correlate with symptom severity. A woman with Stage I may have severe pain, while Stage IV may be asymptomatic. Endometrioma surgery may reduce ovarian reserve - counsel fertility patients carefully.',
    },
    4: {
      level: 4,
      summary: 'Endometriosis management requires individualized, multimodal approaches addressing pain mechanisms, fertility optimization, and disease phenotype, with emerging understanding of genetics and targeted therapeutics.',
      explanation: `**Advanced Pathophysiology:**

*Genetic Factors:*
- 50% heritability
- GWAS identified multiple loci
- Genes: ESR1, GREB1, WNT4
- Familial risk 7-10x

*Epigenetics:*
- Aberrant DNA methylation
- Altered histone modifications
- microRNA dysregulation
- Potential therapeutic targets

*Immune Dysfunction:*
- Impaired NK cell cytotoxicity
- Elevated regulatory T cells
- Peritoneal macrophage alterations
- Auto-antibody formation

**Fertility Considerations:**

*Mechanisms of Infertility:*
- Anatomic distortion
- Altered peritoneal environment
- Impaired oocyte quality
- Reduced implantation

*Management Approach:*
- Assess ovarian reserve (AMH, AFC)
- Consider age and duration of infertility
- Surgery may improve natural conception
- IVF often needed, especially with low reserve

*Surgery and Fertility:*
- Excision of minimal/mild may help
- Endometrioma surgery: Risk vs. benefit
- May reduce ovarian reserve
- Consider oocyte cryopreservation

**Pain Management:**

*Multimodal Approach:*
- Hormonal suppression
- Neuromodulators (amitriptyline, gabapentin)
- Pelvic physical therapy
- Psychological support
- Dietary modification (anti-inflammatory)

*Surgical Considerations:*
- Complete excision goal
- Multidisciplinary for bowel/bladder
- May recur (21-50% at 5 years)
- Presacral neurectomy for midline pain

*Central Sensitization Management:*
- Pain neuroscience education
- Cognitive behavioral therapy
- Mindfulness-based approaches
- May need pain specialist

**Special Populations:**

*Adolescents:*
- Often delayed diagnosis (7-10 years)
- High suspicion with severe dysmenorrhea
- Hormonal therapy first-line
- Laparoscopy if refractory

*Postmenopausal:*
- Rare de novo development
- HRT may reactivate disease
- Malignant transformation risk (0.7-1%)
- Endometrioid or clear cell ovarian cancer`,
      keyTerms: [
        { term: 'ovarian reserve', definition: 'Measure of remaining oocytes; assessed by AMH and antral follicle count' },
        { term: 'presacral neurectomy', definition: 'Surgical interruption of nerve pathways to treat midline pelvic pain' },
        { term: 'elagolix', definition: 'Oral GnRH antagonist FDA-approved for endometriosis pain' },
      ],
      clinicalNotes: 'Diagnostic delay averages 7-10 years. Maintain high clinical suspicion in young women with dysmenorrhea. Empiric hormonal therapy without surgical diagnosis is appropriate in many cases.',
    },
    5: {
      level: 5,
      summary: 'Contemporary endometriosis care emphasizes early diagnosis, phenotype-directed treatment, fertility preservation, and research into disease-modifying therapies targeting inflammation and local estrogen production.',
      explanation: `**Research Frontiers:**

*Biomarkers:*
- No validated non-invasive diagnostic
- microRNA panels under investigation
- Peripheral blood markers
- Menstrual effluent analysis
- Imaging biomarkers (MRI texture)

*Targeted Therapies:*
- Anti-angiogenic agents
- Anti-inflammatory biologics
- Selective estrogen modulators
- Dichloroacetate (metabolism)
- Immune modulators

*Novel Drug Delivery:*
- Local peritoneal delivery
- Slow-release implants
- Targeted nanoparticles
- Reduced systemic effects

**Guidelines and Quality:**

*ESHRE Guidelines:*
- Empiric medical therapy acceptable
- Surgery: Complete excision
- Fertility: Individualized approach
- Long-term management plan

*ACOG/ASRM Recommendations:*
- Hormonal contraceptives first-line
- Laparoscopy not required for diagnosis
- Centers of expertise for complex cases
- Multidisciplinary care

**Surgical Excellence:**

*Excision Principles:*
- Complete removal of disease
- Identify disease extent
- Nerve-sparing when possible
- Address all compartments

*Multidisciplinary Surgery:*
- Colorectal involvement: Shaving vs. disc vs. resection
- Bladder involvement: Partial cystectomy
- Ureteral involvement: Ureterolysis vs. reimplantation
- Coordination is critical

*Centers of Expertise:*
- Higher volume improves outcomes
- Complete excision rates higher
- Lower complication rates
- Better long-term outcomes

**Disparities and Access:**

*Diagnostic Delay:*
- Longer in Black women
- Longer in lower SES
- Symptom normalization by providers
- Limited specialist access

*Improving Outcomes:*
- Education on normal vs. abnormal
- Provider training
- Telemedicine for initial consult
- Advocacy for research funding

**Patient-Centered Care:**

*Shared Decision-Making:*
- Discuss all treatment options
- Address fertility goals
- Manage expectations
- Long-term planning

*Quality of Life:*
- Impact extends beyond physical
- Relationships, work, mental health
- Support groups valuable
- Chronic disease model

*Self-Management:*
- Dietary modifications
- Exercise within tolerance
- Stress management
- Pain tracking apps`,
      keyTerms: [
        { term: 'ESHRE', definition: 'European Society of Human Reproduction and Embryology; publishes endometriosis guidelines' },
        { term: 'disease-modifying therapy', definition: 'Treatment that alters disease course rather than just managing symptoms' },
        { term: 'centers of expertise', definition: 'High-volume specialized centers with improved outcomes for complex endometriosis' },
      ],
      clinicalNotes: 'Endometriosis is increasingly recognized as a chronic disease requiring long-term management rather than cure. Patient education about chronic disease management improves outcomes. Research into non-invasive diagnosis and disease-modifying therapies continues.',
    },
  },

  media: [
    {
      id: 'endometriosis-locations',
      type: 'diagram',
      filename: 'endometriosis-sites.svg',
      title: 'Common Endometriosis Locations',
      description: 'Illustration of typical sites of endometriosis in the pelvis',
    },
  ],

  citations: [
    {
      id: 'acog-endometriosis',
      type: 'article',
      title: 'Management of Endometriosis',
      source: 'ACOG Practice Bulletin No. 114',
      authors: ['American College of Obstetricians and Gynecologists'],
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'obgyn-physiology-menstrual-cycle', targetType: 'process', relationship: 'related', label: 'Menstrual Cycle' },
    { targetId: 'obgyn-conditions-pelvic-pain', targetType: 'condition', relationship: 'related', label: 'Chronic Pelvic Pain' },
  ],

  tags: {
    systems: ['reproductive'],
    topics: ['gynecology', 'endometriosis', 'chronic pain', 'infertility'],
    keywords: ['endometriosis', 'dysmenorrhea', 'chronic pelvic pain', 'infertility'],
    clinicalRelevance: 'high',
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
