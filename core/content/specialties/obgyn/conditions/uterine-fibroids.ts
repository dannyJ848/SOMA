/**
 * Uterine Fibroids
 *
 * Comprehensive coverage of uterine fibroids (leiomyomas) including
 * types, symptoms, diagnosis, and treatment options.
 */

import { EducationalContent } from '../../../types';

export const uterineFibroids: EducationalContent = {
  id: 'obgyn-conditions-fibroids',
  type: 'condition',
  name: 'Uterine Fibroids',
  alternateNames: ['Leiomyomas', 'Myomas', 'Fibroids'],

  levels: {
    1: {
      level: 1,
      summary: 'Uterine fibroids are non-cancerous growths in the uterus that are very common in women.',
      explanation: `Fibroids are lumps that grow in or on the uterus (womb). They are NOT cancer.

**Key facts:**
- Very common - up to 80% of women have them by age 50
- Most women have no symptoms
- They can range from tiny (like a seed) to large (like a grapefruit)
- They often shrink after menopause

**Symptoms (when they occur):**
- Heavy or painful periods
- Feeling full or bloated in the belly
- Needing to urinate often
- Pain during sex
- Back pain

**Treatment depends on symptoms:**
- No symptoms = no treatment needed
- Medications can help with symptoms
- Surgery can remove fibroids if needed
- After menopause, they usually shrink on their own`,
      keyTerms: [
        { term: 'fibroid', definition: 'A non-cancerous growth in the uterus made of muscle and tissue' },
        { term: 'benign', definition: 'Not cancer; not harmful in itself' },
        { term: 'uterus', definition: 'The womb; where a baby grows during pregnancy' },
      ],
      analogies: [
        'Fibroids are like knots in a muscle - they are part of the normal tissue but grow differently.',
      ],
      examples: [
        'A woman might have several small fibroids and not know it because she has no symptoms.',
      ],
    },
    2: {
      level: 2,
      summary: 'Uterine leiomyomas are benign smooth muscle tumors of the uterus, classified by location, that may cause heavy menstrual bleeding, pelvic pressure, or reproductive problems.',
      explanation: `**What Are Fibroids?**
Benign tumors arising from uterine smooth muscle (myometrium). They are:
- Hormone-responsive (estrogen/progesterone)
- More common in Black women
- Often multiple

**Types by Location:**

*Submucosal:*
- Grow into the uterine cavity
- Most likely to cause heavy bleeding
- Can affect fertility

*Intramural:*
- Within the uterine wall
- Most common type
- May enlarge uterus

*Subserosal:*
- Grow outward from uterus
- May cause pressure symptoms
- Less likely to cause bleeding

*Pedunculated:*
- Attached by a stalk
- Can be submucosal or subserosal

**Symptoms:**
- Heavy menstrual bleeding (menorrhagia)
- Prolonged periods
- Pelvic pressure or pain
- Urinary frequency
- Constipation
- Infertility (submucosal)

**Diagnosis:**
- Pelvic exam (enlarged uterus)
- Ultrasound (transvaginal)
- MRI (detailed mapping)
- Saline infusion sonography (cavity assessment)`,
      keyTerms: [
        { term: 'submucosal', definition: 'Fibroid location just under the uterine lining; most likely to cause bleeding' },
        { term: 'intramural', definition: 'Fibroid location within the muscle wall of the uterus' },
        { term: 'menorrhagia', definition: 'Heavy menstrual bleeding; common fibroid symptom' },
      ],
    },
    3: {
      level: 3,
      summary: 'Uterine leiomyomas are monoclonal smooth muscle neoplasms with MED12 mutations being most common, managed based on symptoms, location, size, and reproductive goals.',
      explanation: `**Pathophysiology:**

*Molecular Biology:*
- Monoclonal origin (single cell)
- MED12 mutations (70%)
- HMGA2 overexpression
- Estrogen and progesterone dependent
- ECM overproduction

*Risk Factors:*
- African ancestry (3x risk)
- Nulliparity
- Early menarche
- Obesity (adipose estrogen)
- Family history
- Hypertension

*Protective:*
- Parity
- Smoking (anti-estrogenic)
- OCP use (may be protective)

**Clinical Presentation:**

*FIGO Classification (Submucosal):*
- Type 0: Pedunculated intracavitary
- Type 1: <50% intramural
- Type 2: ≥50% intramural

*Symptom Patterns:*
- AUB-L: Abnormal uterine bleeding due to leiomyoma
- Bulk symptoms: Pressure, urinary frequency, constipation
- Pain: Degenerating fibroids, pedunculated torsion
- Reproductive: Infertility, pregnancy complications

**Imaging:**

*Transvaginal Ultrasound:*
- First-line imaging
- Hypoechoic, well-circumscribed masses
- May have calcifications
- Assess number, size, location

*MRI:*
- Detailed mapping for surgical planning
- T2 hypointense (dark)
- Differentiates from adenomyosis
- Assesses vascularity

**Management Options:**

*Medical:*
- NSAIDs (pain)
- Hormonal (OCPs, progestins)
- GnRH agonists (temporary shrinkage)
- GnRH antagonists (relugolix, elagolix)
- Tranexamic acid (bleeding)

*Surgical:*
- Myomectomy (fertility-sparing)
- Hysterectomy (definitive)
- Hysteroscopic resection (submucosal)

*Interventional:*
- Uterine artery embolization (UAE)
- MRI-guided focused ultrasound`,
      keyTerms: [
        { term: 'MED12 mutation', definition: 'Most common genetic alteration in fibroids; mediator complex subunit' },
        { term: 'uterine artery embolization', definition: 'Minimally invasive procedure blocking blood flow to fibroids' },
        { term: 'FIGO classification', definition: 'Standardized system for categorizing fibroid location' },
      ],
      clinicalNotes: 'Submucosal fibroids have the greatest impact on fertility. Hysteroscopic resection of type 0-1 fibroids improves fertility outcomes. Intramural fibroids >4-5 cm may also impact implantation.',
    },
    4: {
      level: 4,
      summary: 'Fibroid management requires individualized treatment selection based on symptom severity, reproductive goals, fibroid characteristics, and patient preferences, with emerging medical therapies expanding non-surgical options.',
      explanation: `**Medical Management Evolution:**

*GnRH Agonists (leuprolide):*
- Hypoestrogenic state
- 40-60% volume reduction
- Side effects: Hot flashes, bone loss
- Add-back therapy mitigates
- Preoperative use controversial

*Oral GnRH Antagonists:*
- Elagolix: Partial suppression
- Relugolix: Near-complete suppression
- Add-back therapy maintains estrogen
- Oral convenience
- FDA approved for fibroids

*Selective Progesterone Receptor Modulators:*
- Ulipristal acetate
- Reduces bleeding, shrinks fibroids
- Liver safety concerns (EU restriction)
- Not FDA approved for fibroids

**Surgical Decision-Making:**

*Myomectomy Approaches:*
- Hysteroscopic: Submucosal (FIGO 0-2)
- Laparoscopic: Limited number, accessible
- Robotic: Complex cases
- Abdominal: Large, multiple, difficult access

*Power Morcellation Controversy:*
- Occult leiomyosarcoma risk (~1:500)
- FDA boxed warning
- Contained extraction systems
- Specimen extraction bags
- Informed consent essential

*Hysterectomy Considerations:*
- Definitive treatment
- Route: Vaginal > laparoscopic > abdominal
- Consider BSO counseling
- Histopathology of specimen

**Uterine Artery Embolization:**

*Mechanism:*
- Selective catheterization
- Particle injection (500-900 μm)
- Fibroid infarction
- Uterus preserved

*Outcomes:*
- 85-90% symptom improvement
- 30-50% volume reduction
- May require reintervention (15-30%)
- Fertility: Controversial, some pregnancies

*Contraindications:*
- Desired pregnancy (relative)
- Active infection
- Pregnancy
- GnRH agonist pretreatment

**Pregnancy with Fibroids:**

*Complications:*
- Miscarriage (submucosal)
- Preterm birth
- Malpresentation
- Cesarean delivery
- Postpartum hemorrhage

*Red Degeneration:*
- Hemorrhagic infarction
- Severe pain, low-grade fever
- Second/third trimester
- Conservative management (NSAIDs contraindicated in 3rd tri)`,
      keyTerms: [
        { term: 'relugolix', definition: 'Oral GnRH antagonist FDA-approved for fibroid treatment with add-back therapy' },
        { term: 'power morcellation', definition: 'Technique for removing tissue through small incisions; concerns about spreading occult cancer' },
        { term: 'red degeneration', definition: 'Hemorrhagic infarction of fibroid during pregnancy; causes severe pain' },
      ],
      clinicalNotes: 'Discussion of morcellation risks and alternatives is essential for informed consent. For reproductive-age women, counsel on fibroid recurrence after myomectomy (15-30% at 5 years) and potential need for future procedures.',
    },
    5: {
      level: 5,
      summary: 'Contemporary fibroid management emphasizes shared decision-making, fertility preservation when desired, and evolving treatment algorithms incorporating new medical therapies and minimally invasive procedures.',
      explanation: `**Emerging Research:**

*Molecular Targets:*
- MED12 pathway inhibitors
- HMGA2-targeted therapy
- Vitamin D (potential protective)
- Epigallocatechin gallate (EGCG)

*Novel Therapies:*
- Vilaprisan (SPRM) - trials halted
- Linzagolix (GnRH antagonist)
- Anti-fibrotic agents
- Targeted drug delivery

**Treatment Algorithm:**

*Symptomatic Fibroids - Bleeding:*
1. Medical: GnRH antagonist + add-back, IUD, tranexamic acid
2. Procedural: Hysteroscopic resection (if submucosal)
3. UAE or myomectomy
4. Hysterectomy

*Symptomatic Fibroids - Bulk:*
1. GnRH antagonist (bridge to surgery or long-term)
2. Myomectomy or UAE
3. Hysterectomy

*Fertility Desired:*
1. Evaluate fibroid impact on cavity
2. Hysteroscopic resection of submucosal
3. Myomectomy if significant
4. UAE controversial (counsel)

**Racial Disparities:**

*Epidemiology:*
- Black women: Earlier onset, larger size, more symptomatic
- Higher rates of hysterectomy
- Lower rates of minimally invasive approaches
- Vitamin D deficiency may contribute

*Addressing Disparities:*
- Increase access to alternatives
- Patient education
- Implicit bias training
- Research inclusion
- Advocacy for coverage

**Quality Metrics:**

*Surgical Outcomes:*
- Minimally invasive rate
- Blood loss
- Complication rates
- Symptom improvement
- Fertility outcomes (myomectomy)

*Patient-Centered Outcomes:*
- Quality of life improvement
- Patient satisfaction
- Return to work
- Sexual function

**Shared Decision-Making:**

*Factors to Discuss:*
- Severity of symptoms
- Reproductive plans
- Fibroid characteristics
- Treatment options and outcomes
- Recovery time
- Risks of each approach
- Personal preferences
- Access and cost

*Decision Aids:*
- Visual representation of options
- Success rates
- Complication risks
- Quality of life impact
- Time to recovery

**Long-term Considerations:**

*After Myomectomy:*
- Recurrence rates 15-30% at 5 years
- Pregnancy management (scar considerations)
- Surveillance imaging not routine

*After UAE:*
- Long-term symptom control variable
- Reintervention rates 15-30%
- Ovarian function generally preserved
- Pregnancy outcomes data limited`,
      keyTerms: [
        { term: 'add-back therapy', definition: 'Low-dose estrogen/progestin given with GnRH therapy to prevent hypoestrogenic symptoms' },
        { term: 'HMGA2', definition: 'High mobility group AT-hook 2 protein; overexpressed in subset of fibroids' },
        { term: 'linzagolix', definition: 'Investigational GnRH antagonist for fibroid treatment' },
      ],
      clinicalNotes: 'The fibroid treatment landscape is rapidly evolving with new oral options. Shared decision-making tools can help patients navigate choices. Address disparities by ensuring all patients are aware of uterus-sparing options.',
    },
  },

  media: [
    {
      id: 'fibroid-types',
      type: 'diagram',
      filename: 'fibroid-locations.svg',
      title: 'Types of Uterine Fibroids',
      description: 'Illustration showing submucosal, intramural, and subserosal fibroid locations',
    },
  ],

  citations: [
    {
      id: 'acog-fibroids',
      type: 'article',
      title: 'Management of Symptomatic Uterine Leiomyomas',
      source: 'ACOG Practice Bulletin No. 228',
      authors: ['American College of Obstetricians and Gynecologists'],
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'obgyn-anatomy-uterus', targetType: 'structure', relationship: 'related', label: 'Uterus Anatomy' },
    { targetId: 'obgyn-conditions-aub', targetType: 'condition', relationship: 'related', label: 'Abnormal Uterine Bleeding' },
  ],

  tags: {
    systems: ['reproductive'],
    topics: ['gynecology', 'fibroids', 'surgery'],
    keywords: ['fibroids', 'leiomyomas', 'myomas', 'heavy bleeding', 'myomectomy'],
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
