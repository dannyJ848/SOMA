import { WomensHealthContent, LegacyWomensHealthContent } from '../types';

export const endometriosisContent: LegacyWomensHealthContent = {
  id: 'condition-endometriosis',
  type: 'condition',
  name: 'Endometriosis',
  alternateNames: ['Endo', 'Endometrial implants'],

  levels: {
    1: {
      level: 1,
      summary: 'Endometriosis is when tissue similar to the lining of your uterus grows outside the uterus, causing pain and sometimes fertility problems.',
      explanation: `**What is Endometriosis?**
Normally, the tissue lining your uterus (endometrium) stays inside the uterus. In endometriosis, similar tissue grows in places it shouldn't - like on your ovaries, fallopian tubes, or pelvis.

**Common Symptoms:**
- **Painful periods:** Cramps that are much worse than normal
- **Pain during sex**
- **Chronic pelvic pain:** Even when not having your period
- **Painful bowel movements or urination:** Especially during your period
- **Trouble getting pregnant**
- **Heavy periods**

**How Common is It?**
- Affects about 10% of women of reproductive age
- Often starts in teens but may not be diagnosed for years

**Treatment Options:**
- Pain medications
- Hormonal treatments (birth control pills, IUDs)
- Surgery to remove the tissue
- Fertility treatments if trying to conceive

**Living with Endometriosis:**
- Symptoms can be managed
- Finding the right treatment may take time
- Support groups can help
- You are not alone`,
      keyTerms: [
        { term: 'endometriosis', definition: 'When tissue similar to the uterus lining grows outside the uterus' },
        { term: 'endometrium', definition: 'The tissue that lines the inside of the uterus' },
        { term: 'chronic pain', definition: 'Pain that lasts for a long time, not just during your period' },
      ],
      analogies: ['Think of endometriosis like tissue that got lost - instead of staying in the uterus, it ended up in the wrong places and causes problems there.'],
      examples: ['Period cramps so bad you can\'t go to school or work', 'Needing to plan your life around your painful periods'],
    },
    2: {
      level: 2,
      summary: 'Endometriosis is characterized by estrogen-dependent ectopic endometrial-like tissue causing inflammation, pain, and infertility, with diagnosis often delayed and requiring laparoscopy for confirmation.',
      explanation: `**Clinical Presentation:**

*Pain Symptoms:*
- Dysmenorrhea (progressive, severe)
- Dyspareunia (deep)
- Chronic pelvic pain
- Dyschezia (painful defecation)
- Dysuria (painful urination)

*Associated Symptoms:*
- Infertility (30-50% of patients)
- Heavy menstrual bleeding
- Fatigue
- GI and bladder symptoms

**Locations:**
- Ovaries (endometriomas, "chocolate cysts")
- Uterosacral ligaments
- Pouch of Douglas
- Bladder, bowel
- Rare: Diaphragm, lungs, surgical scars

**Staging (ASRM Classification):**
- Stage I (Minimal): Isolated implants
- Stage II (Mild): More implants, mild adhesions
- Stage III (Moderate): Endometriomas, adhesions
- Stage IV (Severe): Large endometriomas, dense adhesions
- Note: Staging doesn't correlate well with symptoms

**Evaluation:**
- History: Characteristic pain pattern, family history
- Physical exam: Tenderness, nodularity, fixed uterus
- Imaging: Transvaginal US for endometriomas; MRI for deep disease
- Definitive diagnosis: Laparoscopy with biopsy

**Treatment Approaches:**

*Medical:*
- NSAIDs for pain
- Hormonal suppression: CHC, progestins, GnRH agonists
- Continuous hormonal therapy (skip periods)

*Surgical:*
- Laparoscopic excision or ablation
- Cystectomy for endometriomas
- May improve fertility

*Fertility:*
- Conservative surgery may help
- Assisted reproduction often needed`,
      keyTerms: [
        { term: 'endometrioma', definition: 'Ovarian cyst containing endometriotic tissue ("chocolate cyst")', pronunciation: 'en-doh-mee-tree-OH-mah' },
        { term: 'dyspareunia', definition: 'Pain during sexual intercourse' },
        { term: 'dyschezia', definition: 'Painful bowel movements' },
        { term: 'uterosacral ligaments', definition: 'Ligaments supporting the uterus, common endometriosis location' },
      ],
    },
    3: {
      level: 3,
      summary: 'Endometriosis pathogenesis involves retrograde menstruation with impaired clearance, establishing estrogen-dependent lesions with neurogenic and inflammatory components causing pain and infertility.',
      explanation: `**Pathogenesis Theories:**

*Retrograde Menstruation (Sampson):*
- Menstrual tissue refluxes through fallopian tubes
- Implants on peritoneal surfaces
- Occurs in 90% of women but not all develop disease

*Why Only Some Women:*
- Impaired immune clearance
- Altered peritoneal environment
- Lesion establishment and vascularization
- Genetic predisposition

*Other Mechanisms:*
- Coelomic metaplasia (peritoneal cells transform)
- Lymphatic/hematogenous spread (distant lesions)
- Mullerian remnants

**Molecular Features:**

*Estrogen Dependence:*
- Lesions produce local estrogen (aromatase expression)
- Progesterone resistance
- Creates self-sustaining hormonal environment

*Inflammation:*
- Cytokines, prostaglandins
- Immune cell infiltration
- Pro-inflammatory peritoneal environment

*Neurogenesis:*
- Nerve fiber growth into lesions
- Sensory nerve involvement
- Contributes to pain

**Pain Mechanisms:**

*Nociceptive:*
- Direct tissue invasion
- Inflammation

*Neurogenic:*
- Nerve fiber proliferation
- Central sensitization
- Poor correlation with lesion extent

**Infertility Mechanisms:**
- Distorted pelvic anatomy
- Peritoneal inflammation affecting gametes
- Endometrial receptivity impaired
- Ovarian reserve reduced with endometriomas

**Diagnosis:**

*Non-Invasive Markers:*
- CA-125: Low sensitivity and specificity
- No reliable biomarker yet
- Symptom-based empiric treatment often reasonable

*Imaging:*
- Transvaginal US: Good for endometriomas
- MRI: Deep infiltrating disease
- Normal imaging doesn't exclude superficial disease

*Laparoscopy:*
- Gold standard for diagnosis
- Allows staging and treatment
- May proceed with empiric treatment without surgery in some cases`,
      keyTerms: [
        { term: 'retrograde menstruation', definition: 'Backflow of menstrual blood through fallopian tubes into pelvis' },
        { term: 'aromatase', definition: 'Enzyme converting androgens to estrogens; expressed in endometriotic lesions' },
        { term: 'central sensitization', definition: 'Amplified pain processing in nervous system' },
        { term: 'deep infiltrating endometriosis', definition: 'Lesions >5mm beneath peritoneal surface, often involving bowel, bladder' },
      ],
      clinicalNotes: 'Empiric hormonal treatment without laparoscopy is appropriate when history is classic and imaging suggests or supports diagnosis. Stage of disease on surgery does not predict pain severity - a few lesions can cause severe pain.',
    },
    4: {
      level: 4,
      summary: 'Advanced endometriosis management requires surgical expertise for deep disease, fertility preservation strategies, multimodal pain management, and understanding of disease recurrence and long-term outcomes.',
      explanation: `**Surgical Management:**

*Approach:*
- Laparoscopic preferred
- Excision vs. ablation: Excision may be more durable for deep disease
- Complete excision of all visible disease when possible
- Balance surgical extent with ovarian reserve

*Endometriomas:*
- Cystectomy preferred (lower recurrence)
- Strip technique
- Risk to ovarian reserve
- May defer in fertility patients planning IVF

*Deep Infiltrating Endometriosis:*
- Multidisciplinary team (colorectal, urology)
- Bowel involvement: Shaving, disc excision, segmental resection
- Bladder involvement: Partial cystectomy
- Specialized centers

**Fertility Considerations:**

*Impact:*
- Stage III/IV: Reduced fecundity
- Endometriomas: Ovarian reserve concerns
- Surgery may help or harm fertility

*Decision-Making:*
- Expectant management if mild disease, young, short duration
- Surgery may improve spontaneous conception
- Proceed to IVF if significant other factors or failed treatment
- GnRH agonist pretreatment before IVF may help

*Ovarian Reserve:*
- Endometrioma surgery can reduce AMH
- Consider size and symptoms before surgery
- Discuss fertility implications pre-operatively

**Medical Management:**

*Hormonal Options:*
- Continuous CHC (no placebo week)
- Progestins: Norethindrone, dienogest, depot MPA
- LNG-IUD (may help pain, less effect on deep disease)
- GnRH agonists with add-back (limits duration otherwise)
- GnRH antagonists (elagolix): Oral, dose-dependent

*Second-Line:*
- Aromatase inhibitors (investigational, off-label)

**Recurrence:**

*After Surgery:*
- 40-50% symptom recurrence at 5 years
- Post-operative hormonal therapy reduces recurrence
- Balance symptom control with fertility goals

*After Medical Therapy:*
- Symptoms often return when stopped
- May need long-term or indefinite treatment

**Pain Management Adjuncts:**
- Pelvic floor physical therapy
- Neuromodulators (for central sensitization)
- Psychology/CBT
- Multidisciplinary chronic pain approach`,
      keyTerms: [
        { term: 'cystectomy', definition: 'Surgical removal of cyst while preserving ovary' },
        { term: 'dienogest', definition: 'Progestin with specific indication for endometriosis' },
        { term: 'elagolix', definition: 'Oral GnRH antagonist for endometriosis pain' },
        { term: 'add-back therapy', definition: 'Low-dose hormone given with GnRH agonists to prevent bone loss and symptoms' },
      ],
      clinicalNotes: 'Surgery for endometriomas may harm ovarian reserve - weigh fertility plans against symptom severity. Post-operative hormonal suppression should be discussed. GnRH antagonists allow dose titration with quicker onset and offset than agonists.',
    },
    5: {
      level: 5,
      summary: 'Expert endometriosis care involves addressing diagnostic delays, implementing evidence-based surgical techniques, understanding emerging therapies, and managing complex patients with multidisciplinary approaches.',
      explanation: `**Addressing Diagnostic Delay:**

*Average Delay: 7-10 Years*

*Causes:*
- Normalization of period pain
- Lack of non-invasive diagnostic test
- Variable presentation
- Symptom overlap with other conditions

*Solutions:*
- Education of primary care providers
- Validate patient symptoms
- Earlier empiric treatment without requiring surgery
- Advocacy for research funding

**Surgical Quality:**

*Excision vs. Ablation Debate:*
- Excision: Better for deep disease, allows histology
- Ablation: May be adequate for superficial disease
- Incomplete excision leads to recurrence

*Center of Excellence Concept:*
- Specialized surgeons for complex disease
- Multidisciplinary team
- Better outcomes documented
- Referral pathways important

**Emerging Therapies:**

*Medical:*
- Relugolix combination (GnRH antagonist + estrogen/progestin)
- Novel progestins
- Immunomodulators (research)
- Anti-angiogenic agents (research)

*Biomarkers:*
- microRNAs
- Proteomics
- Multi-marker panels
- Goal: Non-invasive diagnosis

**Special Populations:**

*Adolescents:*
- Often present with cyclic pain
- May have atypical lesion appearance
- Long-term hormonal suppression considerations
- Preserve fertility while managing symptoms

*Endometriosis and Menopause:*
- Most improves with menopause
- HRT may reactivate symptoms
- Low-dose, short-term HRT usually okay
- Rare malignant transformation of lesions

*Recurrent Disease:*
- Repeat surgery has diminishing returns
- Focus on medical management
- Consider specialized centers
- Hysterectomy with BSO (last resort for completed fertility)

**Patient-Centered Care:**

*Validation:*
- Long journey to diagnosis common
- "I believe you" is powerful
- Acknowledge uncertainty

*Shared Decision-Making:*
- Goals differ (pain control vs. fertility)
- Surgery vs. medical management
- Time-limited treatment trials
- Document patient preferences

*Support Resources:*
- Patient advocacy organizations
- Online communities
- Mental health support
- Workplace accommodations

**Research Priorities:**
- Non-invasive diagnosis
- Personalized treatment selection
- Prevention strategies
- Understanding pain phenotypes`,
      keyTerms: [
        { term: 'center of excellence', definition: 'Specialized facility with expertise and outcomes in complex endometriosis' },
        { term: 'diagnostic delay', definition: 'Time from symptom onset to correct diagnosis; average 7-10 years for endometriosis' },
        { term: 'relugolix', definition: 'Oral GnRH antagonist in combination with estrogen/progestin for endometriosis' },
        { term: 'BSO', definition: 'Bilateral salpingo-oophorectomy; removes both ovaries and tubes' },
      ],
      clinicalNotes: 'Document that patients have been heard and believed - many have been dismissed for years. Complex cases benefit from referral to specialized centers. HRT after surgical menopause for endometriosis is generally safe, especially if uterus removed.',
    },
  },
  media: [],
  citations: [
    {
      id: 'acog-endometriosis-pb',
      type: 'article',
      title: 'ACOG Practice Bulletin: Endometriosis',
      source: 'American College of Obstetricians and Gynecologists',
      license: 'Copyright ACOG',
    },
  ],
  crossReferences: [
    { targetId: 'condition-pelvic-pain', targetType: 'condition', relationship: 'related', label: 'Pelvic Pain' },
    { targetId: 'concept-fertility-basics', targetType: 'concept', relationship: 'related', label: 'Fertility Basics' },
    { targetId: 'condition-menstrual-disorders', targetType: 'condition', relationship: 'related', label: 'Menstrual Disorders' },
  ],
  tags: {
    systems: ['reproductive'],
    topics: ['gynecology', 'patient-education', 'womens-health', 'pain-management'],
    keywords: ['endometriosis', 'dysmenorrhea', 'pelvic pain', 'infertility', 'endometrioma'],
    clinicalRelevance: 'high',
    examRelevance: { usmle: true, shelf: ['obgyn'] },
  },
  createdAt: '2026-01-24T00:00:00.000Z',
  updatedAt: '2026-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};
