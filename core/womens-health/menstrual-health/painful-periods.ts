/**
 * Painful Periods (Dysmenorrhea) - Comprehensive Educational Content
 *
 * Period pain is common but should not be dismissed. Understanding the
 * difference between normal cramps and concerning pain empowers women
 * to seek appropriate care.
 */

import { EducationalContent } from '../../content/types';

export const PAINFUL_PERIODS: EducationalContent = {
  id: 'painful-periods-dysmenorrhea',
  type: 'condition',
  name: 'Painful Periods (Dysmenorrhea)',
  alternateNames: ['Dysmenorrhea', 'Menstrual cramps', 'Period pain', 'Menstrual pain'],

  levels: {
    1: {
      level: 1,
      summary: 'Period cramps are caused by your uterus squeezing to shed its lining. Some pain is normal, but pain that stops you from doing everyday activities is not okay.',
      explanation: `Almost everyone who has periods experiences some cramping. But there is a difference between mild discomfort and pain that takes over your life.

**Why Periods Can Hurt:**
During your period, your uterus squeezes (contracts) to push out its lining. These squeezes can cause cramping pain, usually in your lower belly. It is similar to a muscle cramp anywhere else in your body.

**Normal Period Pain:**
- Mild to moderate cramping
- Happens on the first 1-2 days of your period
- Responds to over-the-counter pain medicine
- Does not prevent you from going to school, work, or activities

**Pain That Deserves Attention:**
- So bad you cannot do normal activities
- Does not get better with ibuprofen or similar medicines
- Gets worse over time
- Happens at other times besides your period
- Comes with very heavy bleeding
- Started suddenly after years of manageable periods

**What Can Help:**

**At Home:**
- Heat (heating pad, warm bath)
- Over-the-counter pain medicine (ibuprofen works best, taken before pain gets severe)
- Gentle exercise (even though it is the last thing you want to do)
- Rest when needed

**Medical Options:**
- Birth control pills or other hormonal options (even if you do not need contraception)
- Prescription pain medicine
- Investigation for underlying causes if pain is severe

**The Bottom Line:**
Some period pain is normal. But if pain controls your life, you deserve help. Do not let anyone tell you to just "deal with it."`,
      keyTerms: [
        { term: 'cramps', definition: 'Pain caused by your uterus muscle squeezing' },
        { term: 'uterus', definition: 'The organ where the period blood comes from (also where babies grow)' },
        { term: 'ibuprofen', definition: 'A common pain medicine that works well for period cramps (brand names: Advil, Motrin)' },
      ],
      analogies: [
        'Period cramps are like a charley horse in your uterus - the muscle squeezes too hard.',
        'Think of your uterus like wringing out a wet towel. The squeezing helps push out the lining.',
      ],
      examples: [
        'Having to lie down with a heating pad for an hour on day 1 of your period is normal. Missing school every month because of pain is not.',
        'Taking ibuprofen and feeling better is typical. Ibuprofen not touching the pain is a sign to talk to a doctor.',
      ],
    },
    2: {
      level: 2,
      summary: 'Dysmenorrhea is menstrual pain caused by uterine contractions. Primary dysmenorrhea has no underlying disease; secondary dysmenorrhea is caused by conditions like endometriosis.',
      explanation: `**Two Types of Period Pain:**

**Primary Dysmenorrhea:**
- No underlying disease - it is "just" painful periods
- Caused by prostaglandins (hormone-like chemicals) released during menstruation
- Usually starts 1-2 years after first period
- Pain begins with period and lasts 1-3 days
- Very common (up to 90% experience some degree)

**Secondary Dysmenorrhea:**
- Pain caused by an underlying condition
- Tends to start later in life or get worse over time
- Often associated with other symptoms
- Common causes:
  - Endometriosis (tissue growing outside the uterus)
  - Adenomyosis (tissue growing into the uterine muscle)
  - Fibroids
  - Pelvic infections

**The Prostaglandin Connection:**
Prostaglandins are chemicals that cause the uterus to contract. Higher prostaglandin levels = stronger contractions = more pain. They can also cause:
- Nausea and vomiting
- Diarrhea
- Headaches
- Fatigue

This is why NSAIDs (like ibuprofen) work - they block prostaglandin production.

**When to Investigate Further:**
- Pain that does not respond to NSAIDs and/or hormonal therapy
- Pain that has gotten progressively worse
- Pain between periods or during sex
- Very heavy periods along with pain
- Family history of endometriosis
- Difficulty getting pregnant

**Treatment Approach:**

**First-Line:**
- NSAIDs (start before or at the onset of pain)
- Hormonal contraceptives (reduce prostaglandin production)
- Heat therapy

**If First-Line Fails:**
- Extended-cycle hormonal contraception
- Different NSAID
- Investigation for secondary causes

**Investigation:**
- Pelvic exam
- Ultrasound
- Sometimes laparoscopy (surgery to look inside)`,
      keyTerms: [
        { term: 'dysmenorrhea', definition: 'The medical term for painful periods', pronunciation: 'dis-men-or-EE-ah' },
        { term: 'primary dysmenorrhea', definition: 'Period pain without an underlying disease' },
        { term: 'secondary dysmenorrhea', definition: 'Period pain caused by a condition like endometriosis' },
        { term: 'prostaglandins', definition: 'Chemicals that cause uterine contractions and pain', pronunciation: 'pros-ta-GLAN-dins' },
        { term: 'NSAIDs', definition: 'Non-steroidal anti-inflammatory drugs like ibuprofen' },
      ],
    },
    3: {
      level: 3,
      summary: 'Dysmenorrhea pathophysiology involves prostaglandin-mediated uterine hypercontractility and ischemia. Secondary causes require systematic evaluation.',
      explanation: `**Pathophysiology of Primary Dysmenorrhea:**

**Prostaglandin Mechanism:**
- Progesterone withdrawal at menstruation triggers phospholipase A2
- Arachidonic acid is released from cell membranes
- Cyclooxygenase (COX) converts arachidonic acid to prostaglandins
- PGF2α and PGE2 levels are elevated in menstrual fluid
- PGF2α causes intense uterine contractions

**Uterine Ischemia:**
- Contractions compress blood vessels
- Creates relative hypoxia
- Anaerobic metabolism produces pain-causing substances
- Similar mechanism to cardiac ischemia/angina

**Vasopressin Role:**
- Elevated in women with dysmenorrhea
- Causes vasoconstriction and additional contraction
- May explain some NSAID-resistant cases

**Associated Symptoms:**
- Prostaglandins enter systemic circulation
- GI effects: Nausea, vomiting, diarrhea (PGE2)
- Headache, fatigue, dizziness

**Secondary Dysmenorrhea Causes:**

**Endometriosis:**
- Ectopic endometrial tissue with nerve involvement
- Chronic inflammation
- Pain often extends beyond menstruation
- Deep dyspareunia common

**Adenomyosis:**
- Endometrial glands within myometrium
- Enlarged, tender uterus
- Heavy bleeding often coexists
- More common in parous women

**Other Causes:**
- Pelvic inflammatory disease (PID)
- Obstructive mullerian anomalies
- Cervical stenosis
- Ovarian cysts
- Intrauterine adhesions (Asherman syndrome)

**Clinical Evaluation:**

**History:**
- Age of onset (primary: 1-2 years post-menarche; secondary: often later)
- Timing (primary: with menses; secondary: may extend beyond)
- Progression (primary: stable or improves; secondary: often worsens)
- Associated symptoms
- Response to NSAIDs/hormonal therapy
- Sexual and reproductive history

**Physical Exam:**
- Abdomen: masses, tenderness
- Speculum: discharge, cervical lesions
- Bimanual: uterine size, mobility, adnexal masses, tenderness
- Rectovaginal (if deep endometriosis suspected)

**Diagnostic Testing:**
- Pelvic ultrasound (first-line imaging)
- MRI (for adenomyosis, deep endometriosis mapping)
- Laparoscopy (gold standard for endometriosis)

**Treatment Ladder:**

**Step 1: NSAIDs**
- Ibuprofen, naproxen, mefenamic acid
- Start 1-2 days before expected menses or at pain onset
- Continue for 2-3 days

**Step 2: Hormonal Suppression**
- Combined hormonal contraceptives (cyclic or extended)
- Progestin-only methods (pill, injection, implant, LNG-IUD)
- Suppress ovulation and/or thin endometrium

**Step 3: Further Investigation/Treatment**
- Laparoscopy for diagnosis and treatment
- GnRH agonists/antagonists
- Surgery for specific pathology`,
      keyTerms: [
        { term: 'PGF2α', definition: 'Prostaglandin F2-alpha - primary mediator of uterine contractions in dysmenorrhea' },
        { term: 'cyclooxygenase', definition: 'Enzyme that produces prostaglandins; target of NSAIDs' },
        { term: 'uterine ischemia', definition: 'Reduced blood flow to uterus from intense contractions' },
        { term: 'dyspareunia', definition: 'Pain during intercourse' },
        { term: 'laparoscopy', definition: 'Minimally invasive surgery to visualize pelvic organs' },
      ],
      clinicalNotes: 'Primary dysmenorrhea should improve with NSAIDs and/or hormonal therapy. Failure to respond or progressive pain should prompt evaluation for secondary causes. Delay in endometriosis diagnosis averages 7-10 years from symptom onset.',
    },
    4: {
      level: 4,
      summary: 'Dysmenorrhea management requires phenotype-based treatment selection with escalation for refractory cases and systematic investigation when secondary causes are suspected.',
      explanation: `**Advanced Pathophysiology:**

**Prostaglandin Synthesis Pathway:**
Membrane phospholipids
   ↓ (Phospholipase A2)
Arachidonic acid
   ↓ (COX-1, COX-2)
PGH2
   ↓ (Isomerases)
PGE2, PGF2α, PGI2, TXA2

**Quantitative Findings:**
- Women with dysmenorrhea have 2-7x higher PGF2α levels
- Intrauterine pressure: normal 50-80 mmHg; dysmenorrhea >150 mmHg
- Resting uterine tone elevated

**Neurobiological Considerations:**
- Central sensitization in chronic pelvic pain
- Altered pain processing in CNS
- Cross-sensitization with bladder, bowel
- May explain pain persistence even after treating source

**Endometriosis Pain Mechanisms:**
- Neurotrophin expression (NGF, BDNF)
- Ectopic lesion innervation
- Altered peritoneal environment
- Prostaglandins, cytokines, chemokines
- Estrogen-dependent growth

**Medical Management:**

**NSAIDs - Comparative Efficacy:**
- Mefenamic acid: May be superior (also inhibits prostaglandin action)
- Ibuprofen, naproxen: Well-studied, effective
- COX-2 selective: Similar efficacy, different side effect profile
- Start before pain onset for best effect

**Hormonal Options:**
| Method | Mechanism | Efficacy Data |
|--------|-----------|---------------|
| Combined pill (cyclic) | Suppress ovulation, thin endometrium | ~50% reduction |
| Combined pill (extended) | Eliminate menstruation | Better than cyclic |
| LNG-IUD | Local progestin effect | Very effective |
| DMPA | Suppress ovulation | Effective but BMD concerns |
| Etonogestrel implant | Suppress ovulation | Less studied for pain |
| GnRH agonists | Medical menopause | Highly effective, time-limited |

**Adjunctive Therapies:**
- Vitamin B1 (thiamine): Some evidence
- Magnesium: May reduce prostaglandins
- Exercise: Reduces pain in multiple studies
- Acupuncture: Mixed evidence
- TENS: Some benefit

**Secondary Dysmenorrhea Management:**

**Endometriosis:**
- Medical: COCs, progestins, GnRH agonists/antagonists, danazol
- Surgical: Excision/ablation of lesions
- Combined approach often needed
- Dienogest and GnRH antagonists (elagolix, relugolix) newer options

**Adenomyosis:**
- LNG-IUD very effective
- GnRH agonists (short-term or pre-surgery)
- Uterine artery embolization
- Hysterectomy (definitive)

**Refractory Dysmenorrhea Approach:**

1. Confirm diagnosis (re-evaluate for secondary causes)
2. Optimize current therapy (adequate dose, timing)
3. Try different NSAID or hormonal method
4. Consider continuous hormonal therapy
5. Laparoscopy if endometriosis suspected
6. Multidisciplinary pain management
7. Address central sensitization

**Surgical Considerations:**
- Diagnostic laparoscopy: When clinical suspicion high
- Conservative surgery: Excision of endometriosis
- Presacral neurectomy: For midline pain
- Hysterectomy: Definitive for adenomyosis, last resort for dysmenorrhea

**Outcomes and Prognosis:**

**Primary Dysmenorrhea:**
- Often improves with age
- May improve after pregnancy
- Responsive to treatment in most cases

**Secondary Dysmenorrhea:**
- Dependent on underlying cause
- Endometriosis: Chronic, requires ongoing management
- Adenomyosis: Progressive until menopause or hysterectomy`,
      keyTerms: [
        { term: 'central sensitization', definition: 'Increased CNS sensitivity to pain signals' },
        { term: 'TENS', definition: 'Transcutaneous electrical nerve stimulation' },
        { term: 'dienogest', definition: 'Progestin specifically studied for endometriosis' },
        { term: 'presacral neurectomy', definition: 'Surgical interruption of pain nerves from uterus' },
        { term: 'neurotrophin', definition: 'Growth factor for nerve cells, involved in pain signaling' },
      ],
      clinicalNotes: 'Consider empiric treatment with hormonal suppression before laparoscopy if presentation is consistent with endometriosis. The delay in diagnosis is harmful; early treatment may prevent disease progression and central sensitization.',
    },
    5: {
      level: 5,
      summary: 'Evidence-based dysmenorrhea management integrates guideline-directed pharmacotherapy, surgical options for refractory cases, and recognition of chronic pelvic pain as a distinct entity requiring multidisciplinary care.',
      explanation: `**Current Evidence and Guidelines:**

**ACOG Committee Opinion (2018):**
- NSAIDs first-line for primary dysmenorrhea
- Hormonal contraception first-line or second-line
- Empiric treatment of suspected endometriosis appropriate
- Surgical diagnosis not always required before treatment

**ESHRE Endometriosis Guideline (2022):**
- Empiric treatment before surgical diagnosis acceptable
- Combined hormonal contraceptives or progestins first-line
- GnRH agonists with add-back or GnRH antagonists for refractory cases
- Surgery for symptom relief and/or fertility

**Systematic Review Evidence:**

**NSAIDs for Dysmenorrhea (Cochrane 2015):**
- Effective for pain relief (OR 4.37 vs placebo)
- No one NSAID clearly superior
- GI side effects main concern

**Hormonal Contraceptives (Cochrane 2019):**
- Moderate evidence for pain reduction
- Limited high-quality trials
- Extended regimens may be superior

**Emerging Therapies:**

**GnRH Antagonists:**
- Elagolix: FDA-approved for endometriosis, under study for dysmenorrhea
- Relugolix: Combined with add-back estrogen/progestin
- Advantages: Oral, dose-dependent suppression, no initial flare

**Dienogest:**
- 2mg daily, not available in US
- Studied specifically for endometriosis
- Comparable efficacy to GnRH agonists with fewer side effects

**Novel Targets:**
- EP2/EP4 receptor antagonists (prostaglandin receptors)
- Selective progesterone receptor modulators
- Anti-angiogenic therapies (for endometriosis)

**Chronic Pelvic Pain Paradigm:**

**Recognition:**
- Pain persisting >6 months
- May become independent of original source
- Central sensitization plays major role
- Requires different treatment approach

**Management:**
- Multidisciplinary team (GYN, pain specialist, PT, psychology)
- Address peripheral and central components
- Cognitive behavioral therapy
- Physical therapy (pelvic floor)
- Neuromodulators (amitriptyline, gabapentin)

**Quality Metrics:**

**Process Measures:**
- Documentation of pain severity (VAS, pain diaries)
- Trial of first-line therapy before escalation
- Timely investigation of treatment failures
- Multidisciplinary referral for chronic pain

**Outcome Measures:**
- Pain reduction
- Quality of life improvement
- Functional status
- Medication side effects

**Special Populations:**

**Adolescents:**
- Primary dysmenorrhea common (up to 90%)
- Hormonal therapy safe and effective
- Consider secondary causes if severe or refractory
- Avoid delayed diagnosis of endometriosis

**Endometriosis-Related Pain:**
- Chronic condition requiring long-term strategy
- Fertility considerations influence treatment choice
- Surgery for fertility often needed but pain may recur
- Post-surgical medical therapy to prevent recurrence

**Perimenopause:**
- Adenomyosis may worsen
- Consider definitive treatment if near menopause
- Natural resolution expected post-menopause

**Documentation and Coding:**

**ICD-10 Codes:**
- N94.4 - Primary dysmenorrhea
- N94.5 - Secondary dysmenorrhea
- N94.6 - Dysmenorrhea, unspecified
- N80.x - Endometriosis
- N80.0 - Adenomyosis

**Documentation Elements:**
- Pain severity (quantified)
- Impact on function
- Previous treatments and response
- Physical exam findings
- Imaging results
- Rationale for treatment plan`,
      keyTerms: [
        { term: 'add-back therapy', definition: 'Low-dose estrogen/progestin given with GnRH therapy to prevent bone loss' },
        { term: 'empiric treatment', definition: 'Treatment based on clinical suspicion without surgical confirmation' },
        { term: 'neuromodulators', definition: 'Medications affecting nerve signal transmission (e.g., amitriptyline, gabapentin)' },
        { term: 'chronic pelvic pain', definition: 'Pain lasting >6 months, often requiring multidisciplinary approach' },
      ],
      clinicalNotes: `Clinical pearls:
- "Pain out of proportion" to exam findings should trigger endometriosis evaluation
- Average delay in endometriosis diagnosis is 7-10 years - advocate for earlier recognition
- NSAID + hormonal therapy combination more effective than either alone
- Central sensitization explains why some patients have persistent pain after definitive treatment
- Physical therapy, particularly pelvic floor PT, underutilized for dysmenorrhea
- Patient education about treatment goals important - complete pain relief not always achievable
- Document response to treatment; failure of standard therapy supports more aggressive investigation`,
    },
  },

  media: [],

  citations: [
    {
      id: 'acog-dysmenorrhea-2018',
      type: 'article',
      title: 'Dysmenorrhea and Endometriosis in the Adolescent',
      source: 'ACOG Committee Opinion No. 760',
      license: 'Proprietary - Referenced',
    },
    {
      id: 'eshre-endo-2022',
      type: 'article',
      title: 'ESHRE guideline: endometriosis',
      source: 'Human Reproduction Open',
      url: 'https://www.eshre.eu/Guidelines-and-Legal/Guidelines/Endometriosis-guideline',
      license: 'Open Access',
    },
  ],

  crossReferences: [
    { targetId: 'normal-menstrual-cycle', targetType: 'topic', relationship: 'parent', label: 'Normal Menstrual Cycle' },
    { targetId: 'endometriosis', targetType: 'condition', relationship: 'related', label: 'Endometriosis' },
    { targetId: 'heavy-periods', targetType: 'condition', relationship: 'related', label: 'Heavy Periods' },
    { targetId: 'contraception', targetType: 'topic', relationship: 'related', label: 'Contraception' },
  ],

  tags: {
    systems: ['reproductive', 'nervous'],
    topics: ['womens-health', 'menstrual-health', 'pain-management'],
    clinicalRelevance: 'high',
    examRelevance: {
      usmle: true,
      shelf: ['obstetrics-gynecology'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
};

export default PAINFUL_PERIODS;
