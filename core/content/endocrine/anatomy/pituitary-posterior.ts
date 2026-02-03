/**
 * Posterior Pituitary (Neurohypophysis) - Anatomy
 *
 * Neural tissue extension storing and releasing ADH and oxytocin
 * synthesized in the hypothalamus.
 */

import { EducationalContent } from '../../types';

export const PITUITARY_POSTERIOR_ANATOMY: EducationalContent = {
  id: 'anatomy-pituitary-posterior',
  type: 'structure',
  name: 'Posterior Pituitary',
  alternateNames: ['Neurohypophysis', 'Posterior lobe of pituitary', 'Pars nervosa'],
  fmaId: 'FMA:74636',

  levels: {
    1: {
      level: 1,
      summary: 'The posterior pituitary is the back part of the pituitary gland that stores and releases hormones made by the brain to control water balance and help mothers during childbirth.',
      explanation: `The posterior pituitary is actually part of your brain that grew downward during development. It doesn't make its own hormones like the front part does. Instead, it stores hormones that are made in a brain area called the hypothalamus.

**Two Important Hormones:**

1. **ADH (Antidiuretic Hormone)**
   - Also called vasopressin
   - Tells your kidneys to hold onto water when you're thirsty
   - Without it, you would pee out all your water and get very dehydrated

2. **Oxytocin** (the "love hormone")
   - Helps mothers push the baby out during childbirth
   - Makes breast milk come out when a baby nurses
   - Also helps people feel bonded and close to others

Think of the posterior pituitary like a storage tank - hormones are made upstairs in the hypothalamus, travel down nerve fibers like water pipes, and are stored until needed.`,
      keyTerms: [
        { term: 'ADH', definition: 'A hormone that helps your kidneys save water so you don\'t get dehydrated' },
        { term: 'oxytocin', definition: 'A hormone that helps with childbirth, breastfeeding, and feeling close to others' },
        { term: 'dehydrated', definition: 'When your body doesn\'t have enough water' },
      ],
      analogies: [
        'The posterior pituitary is like a water tower - it stores water (hormones) that was pumped up from somewhere else and releases it when the town (body) needs it.',
        'Nerve fibers connecting the hypothalamus to the posterior pituitary are like pipes delivering the hormones to storage.',
      ],
      examples: [
        'When you\'re really thirsty or have lost blood, the posterior pituitary releases ADH to help your body hold onto water.',
        'When a mother nurses her baby, the suckling triggers oxytocin release, causing milk to flow.',
      ],
    },
    2: {
      level: 2,
      summary: 'The posterior pituitary (neurohypophysis) is composed of neural tissue that stores and releases antidiuretic hormone (ADH/vasopressin) and oxytocin, which are synthesized in hypothalamic neurons.',
      explanation: `Unlike the anterior pituitary, the posterior pituitary is an extension of the brain itself. It develops from the infundibulum of the hypothalamus and maintains a direct neural connection.

**Embryological Origin:**
- Derives from neural ectoderm (same as the brain)
- Grows downward from the floor of the third ventricle
- Maintains direct neural connection to hypothalamus

**Structure:**
- Composed of axon terminals from hypothalamic neurons
- Contains specialized glial cells called pituicytes
- Rich blood supply for hormone release into circulation

**Hormones (Made in Hypothalamus, Stored Here):**

| Hormone | Hypothalamic Source | Main Functions |
|---------|---------------------|----------------|
| ADH (AVP) | Supraoptic nucleus, Paraventricular nucleus | Water retention by kidneys, vasoconstriction |
| Oxytocin | Paraventricular nucleus, Supraoptic nucleus | Uterine contraction, milk ejection, social bonding |

**How Hormones Get There:**
1. Made in neuron cell bodies in hypothalamus
2. Packaged into vesicles
3. Transported down axons (hypothalamo-hypophyseal tract)
4. Stored in axon terminals in posterior pituitary
5. Released into capillaries when neurons fire

**Blood Supply:**
The inferior hypophyseal arteries (from internal carotid) supply the posterior pituitary directly, unlike the portal system of the anterior pituitary.`,
      keyTerms: [
        { term: 'neurohypophysis', definition: 'The posterior pituitary, composed of neural tissue rather than glandular tissue', pronunciation: 'noor-oh-hy-POF-ih-sis' },
        { term: 'ADH/AVP', definition: 'Antidiuretic hormone (also called arginine vasopressin); promotes water retention' },
        { term: 'hypothalamo-hypophyseal tract', definition: 'The bundle of nerve fibers connecting hypothalamus to posterior pituitary' },
        { term: 'pituicytes', definition: 'Specialized glial cells in the posterior pituitary that support hormone release' },
      ],
      analogies: [
        'The posterior pituitary is like the end of an extension cord - the power (hormones) is generated at the outlet (hypothalamus) but delivered at the plug end (posterior pituitary).',
      ],
    },
    3: {
      level: 3,
      summary: 'The neurohypophysis comprises the pars nervosa, infundibular stem, and median eminence, receiving magnocellular neurosecretory axons from the supraoptic and paraventricular nuclei that release ADH and oxytocin from Herring bodies in response to appropriate stimuli.',
      explanation: `**Anatomical Components:**

1. **Median Eminence**: At the base of hypothalamus; site of releasing hormone entry into portal vessels
2. **Infundibular Stem (Stalk)**: Contains the hypothalamo-hypophyseal tract
3. **Pars Nervosa (Infundibular Process)**: The main body of the posterior pituitary

**Cellular Components:**

*Magnocellular Neurons:*
- Large neuron cell bodies in SON and PVN
- Synthesize either ADH (AVP) or oxytocin (rarely both)
- Axons travel in hypothalamo-hypophyseal tract
- Terminate in posterior pituitary near fenestrated capillaries

*Herring Bodies:*
- Dilated axon terminals containing neurosecretory granules
- Visible on histology as eosinophilic globules
- Each contains thousands of hormone-containing vesicles

*Pituicytes:*
- Modified astrocytes unique to neurohypophysis
- Regulate hormone access to capillary space
- Retract processes during active secretion to facilitate release

**Hormone Synthesis and Processing:**

Both hormones are nonapeptides (9 amino acids) with a disulfide bridge:

\`\`\`
Preprohormone → Signal peptide removed → Prohormone
Prohormone = Hormone + Neurophysin + Copeptin (ADH) or copeptin equivalent (OXT)
\`\`\`

- ADH is packaged with Neurophysin II
- Oxytocin is packaged with Neurophysin I
- Cleavage occurs during axonal transport
- Copeptin is co-secreted with ADH (used clinically as ADH surrogate)

**Release Mechanisms:**

*ADH Release Triggers:*
- Increased plasma osmolality (detected by osmoreceptors in OVLT)
- Decreased blood volume/pressure (detected by baroreceptors)
- Angiotensin II, nausea, pain, stress

*Oxytocin Release Triggers:*
- Ferguson reflex: Cervical/vaginal distension
- Suckling: Neuroendocrine reflex from nipple stimulation
- Conditioned responses (baby crying)

**MRI Appearance:**
- T1 hyperintense "bright spot" due to stored neurosecretory material
- Absence suggests central diabetes insipidus`,
      keyTerms: [
        { term: 'Herring bodies', definition: 'Dilated axon terminals in the posterior pituitary containing neurosecretory granules' },
        { term: 'neurophysins', definition: 'Carrier proteins co-synthesized and co-secreted with ADH and oxytocin' },
        { term: 'copeptin', definition: 'C-terminal fragment of AVP precursor; clinically useful surrogate marker for ADH' },
        { term: 'Ferguson reflex', definition: 'Positive feedback loop where cervical distension triggers oxytocin release and uterine contractions' },
        { term: 'OVLT', definition: 'Organum vasculosum of the lamina terminalis; circumventricular organ sensing plasma osmolality' },
      ],
      clinicalNotes: 'The posterior pituitary bright spot on T1-weighted MRI represents stored ADH in Herring bodies. Its absence, combined with a thickened stalk and central DI, suggests infiltrative disease (LCH, germinoma, sarcoidosis) or congenital ADH deficiency. Copeptin has replaced direct ADH measurement in many centers due to ADH instability and assay challenges.',
    },
    4: {
      level: 4,
      summary: 'The neurohypophysis functions as a neurovascular interface where magnocellular neurosecretory terminals release nonapeptide hormones via calcium-dependent exocytosis, with pituicyte plasticity and fenestrated endothelium enabling rapid hormonal communication with systemic circulation.',
      explanation: `**Molecular Biology of ADH and Oxytocin:**

*Gene Structure:*
- AVP gene (chromosome 20): Encodes prepro-AVP-neurophysin II-copeptin
- OXT gene (chromosome 20): ~8 kb away from AVP gene, encodes prepro-OXT-neurophysin I
- Both genes have 3 exons with similar structure, suggesting gene duplication

*Hormone Structure (9 amino acids):*
\`\`\`
ADH (AVP): Cys-Tyr-Phe-Gln-Asn-Cys-Pro-Arg-Gly-NH2
Oxytocin: Cys-Tyr-Ile-Gln-Asn-Cys-Pro-Leu-Gly-NH2
                  ^^^                   ^^^
            (Phe vs Ile)          (Arg vs Leu)
\`\`\`
- Only 2 amino acid differences
- Both have 1-6 disulfide bridge forming ring structure
- C-terminal amidation essential for activity

*Receptor Pharmacology:*

| Receptor | Location | Gq/11 vs V2 | Function |
|----------|----------|-------------|----------|
| V1a | Vascular smooth muscle | Gq → IP3/DAG | Vasoconstriction |
| V1b | Anterior pituitary | Gq → IP3/DAG | Potentiates CRH for ACTH release |
| V2 | Renal collecting duct | Gs → cAMP | AQP2 insertion, water reabsorption |
| OXT-R | Uterus, breast, CNS | Gq → IP3/DAG | Contraction, milk ejection, bonding |

**Stimulus-Secretion Coupling:**

1. Action potential propagation down axon
2. Depolarization opens voltage-gated Ca²⁺ channels
3. Ca²⁺ influx triggers vesicle fusion with plasma membrane
4. Exocytosis of hormone + neurophysin + copeptin
5. Hormones enter fenestrated capillaries

*Modulation by Pituicytes:*
- Under basal conditions: pituicyte processes interposed between axon terminals and capillaries
- During active secretion: processes retract, exposing terminals to perivascular space
- Process retraction regulated by β-adrenergic signaling

**Dendrite Release:**
- ADH and oxytocin also released from magnocellular dendrites in hypothalamus
- Creates local positive feedback, synchronizing neuronal firing
- Contributes to pulsatile secretion patterns

**Clinical Applications of Hormone Structure:**

*ADH Analogs:*
- Desmopressin (DDAVP): 1-deamino-8-D-arginine vasopressin
  - Selective V2 agonist (minimal V1 effect)
  - Resistant to enzymatic degradation
  - Uses: Central DI, nocturnal enuresis, von Willebrand disease, hemophilia A

*Oxytocin Analogs:*
- Carbetocin: Long-acting oxytocin agonist for postpartum hemorrhage
- Atosiban: Oxytocin receptor antagonist for preterm labor

*V2 Receptor Antagonists (Vaptans):*
- Tolvaptan, conivaptan: Block V2 → aquaresis (free water excretion)
- Uses: SIADH, hyponatremia, ADPKD (tolvaptan)`,
      keyTerms: [
        { term: 'desmopressin (DDAVP)', definition: 'Synthetic ADH analog with V2 selectivity; used for central DI, enuresis, and bleeding disorders' },
        { term: 'aquaporin-2 (AQP2)', definition: 'Water channel inserted into collecting duct apical membrane in response to ADH via V2 receptor signaling' },
        { term: 'vaptans', definition: 'V2 receptor antagonists causing aquaresis; used for euvolemic/hypervolemic hyponatremia' },
        { term: 'magnocellular dendritic release', definition: 'Hormone release from dendrites providing local positive feedback in hypothalamus' },
      ],
      clinicalNotes: 'DDAVP is first-line treatment for central DI, with dosing titrated to symptom control and serum sodium. In bleeding disorders, DDAVP releases vWF and FVIII from endothelium via V2 receptors - works in mild hemophilia A and type 1 vWD but not severe deficiencies. Tolvaptan is used for SIADH-induced hyponatremia but requires careful monitoring due to overcorrection risk. In ADPKD, tolvaptan slows cyst growth by reducing cAMP-dependent fluid secretion.',
    },
    5: {
      level: 5,
      summary: 'The posterior pituitary represents a critical neurovascular secretory interface with complex pathophysiology encompassing genetic disorders of ADH synthesis, acquired neurohypophyseal dysfunction, receptor abnormalities, and targeted therapeutic interventions based on molecular understanding of vasopressin and oxytocin signaling.',
      explanation: `**Genetic Disorders of ADH/Oxytocin:**

*Familial Neurohypophyseal DI:*
- Autosomal dominant (most common genetic form)
- Mutations in AVP-NPII gene (signal peptide or neurophysin II)
- Misfolded protein accumulates in ER → gradual neuron death
- Progressive onset in childhood (not congenital)
- Typical mutations: C67X, A19T, G57S in neurophysin II

*Wolfram Syndrome (DIDMOAD):*
- WFS1 gene mutation (wolframin - ER protein)
- Diabetes Insipidus, Diabetes Mellitus, Optic Atrophy, Deafness
- Progressive neurodegeneration affecting AVP neurons

*Congenital Nephrogenic DI:*
- X-linked: AVPR2 (V2 receptor) mutations - 90% of hereditary cases
- Autosomal: AQP2 mutations - recessive or dominant forms
- Male infants present with failure to thrive, fever, hypernatremia

**Posterior Pituitary on Advanced Imaging:**

*T1 Bright Spot Assessment:*
- Present in >95% of normal individuals
- Absence + DI symptoms = concerning for central cause
- Size decreases with age and dehydration
- May be ectopic in septo-optic dysplasia

*Stalk Assessment:*
- Normal stalk diameter: ≤3 mm at optic chiasm, ≤2 mm at insertion
- Thickened stalk differential:
  - Inflammatory: LCH, sarcoidosis, hypophysitis
  - Neoplastic: Germinoma, metastasis, lymphoma
  - Infectious: TB, fungal

**Hyponatremia: ADH-Centric Approach:**

*SIADH Molecular Pathophysiology:*
1. Inappropriate ADH release (tumor, drugs, CNS, pulmonary)
2. Persistent V2 activation → AQP2 expression
3. Water retention → dilutional hyponatremia
4. Natriuresis from volume expansion (ANP effect)
5. Steady-state: Low sodium, concentrated urine, euvolemia

*Escape from ADH:*
- Chronic SIADH: Partial AQP2 downregulation
- Limits water retention, prevents progressive hyponatremia
- Mechanism: Decreased AQP2 transcription despite continued ADH

**Oxytocin: Beyond Reproduction:**

*Central Oxytocin Functions:*
- Social bonding and trust
- Reduced amygdala reactivity to threatening stimuli
- Autism spectrum: Trials of intranasal oxytocin (mixed results)
- Addiction: May reduce drug craving and withdrawal

*Peripheral Oxytocin:*
- Cardiomyocyte oxytocin receptors: Cardioprotective effects
- Adipocyte OXT-R: May influence metabolism
- Wound healing: Accelerated by oxytocin

**Clinical Protocols and Decision Trees:**

*Water Deprivation Test Protocol:*
1. Baseline: Weight, urine osmolality (Uosm), serum osmolality (Sosm), sodium
2. Deprive fluids, monitor hourly:
   - Weight (stop if >3% loss)
   - Uosm (stop if >600 or plateaus for 3 readings)
3. Once plateau or max dehydration:
   - Give DDAVP 2 μg subcutaneous
   - Measure Uosm at 1 and 2 hours

*Interpretation:*
| Condition | Pre-DDAVP Uosm | Post-DDAVP Response |
|-----------|---------------|---------------------|
| Normal | >600 | Minimal increase |
| Complete Central DI | <300 | >50% increase (>600) |
| Partial Central DI | 300-600 | >50% increase |
| Nephrogenic DI | <300 | <50% increase, <300 |
| Primary Polydipsia | >500 | Minimal increase |

*Copeptin-Based Protocol (New Standard):*
- Hypertonic saline stimulation to Sosm 150
- Copeptin <4.9 pmol/L = Central DI
- Copeptin >4.9 pmol/L at baseline = Excludes central DI
- Avoids prolonged dehydration, better discrimination

**Therapeutic Decision Making:**

*Central DI Management:*
- DDAVP: Intranasal, oral, or parenteral
- Avoid fixed-dose scheduling → water intoxication risk
- PRN dosing with intentional polyuria period preferred
- Monitor sodium frequently during dose titration

*Acute Hyponatremia in SIADH:*
- If symptomatic: 3% saline 100-150 mL boluses
- Target: 4-6 mEq/L rise in first 6 hours
- Do not exceed 8 mEq/L in any 24-hour period
- ODS risk: Chronic hyponatremia, hypokalemia, alcoholism, malnutrition

*Vaptan Use:*
- Tolvaptan (oral), conivaptan (IV)
- Initiate in hospital with close sodium monitoring
- Avoid in hypovolemic hyponatremia
- Contraindicated if serum sodium <120 and symptomatic (use hypertonic saline)`,
      keyTerms: [
        { term: 'Wolfram syndrome', definition: 'Autosomal recessive disorder (WFS1) with DI, DM, optic atrophy, and deafness (DIDMOAD)' },
        { term: 'copeptin', definition: 'Stable surrogate for ADH; now central to DI diagnostic protocols' },
        { term: 'osmotic demyelination syndrome (ODS)', definition: 'Central pontine/extrapontine myelinolysis from rapid sodium correction' },
        { term: 'aquaresis', definition: 'Electrolyte-free water excretion induced by vasopressin receptor antagonists' },
        { term: 'escape from ADH', definition: 'Downregulation of AQP2 during chronic SIADH limiting water retention' },
      ],
      clinicalNotes: 'The copeptin-based diagnostic approach for DI is gaining traction as it requires shorter testing time and avoids severe dehydration. In the ICU, copeptin levels also have prognostic value in sepsis and acute MI. For hyponatremia management, the European guidelines emphasize symptom-driven treatment: severe symptoms warrant hypertonic saline regardless of chronicity, while asymptomatic chronic hyponatremia requires slow correction. Overcorrection is managed with D5W and/or DDAVP "re-lowering" protocols. In pregnancy, placental vasopressinase can cause gestational DI, uniquely responsive to DDAVP but not native AVP.',
    },
  },

  media: [
    {
      id: 'posterior-pituitary-histology-1',
      type: 'histology',
      filename: 'posterior-pituitary-herring-bodies.jpg',
      title: 'Posterior Pituitary Histology',
      description: 'Herring bodies and pituicytes in the neurohypophysis',
    },
    {
      id: 'mri-bright-spot-1',
      type: 'image',
      filename: 'posterior-pituitary-bright-spot.jpg',
      title: 'Posterior Pituitary Bright Spot on MRI',
      description: 'T1-weighted MRI showing normal hyperintense posterior pituitary',
    },
  ],

  citations: [
    {
      id: 'robertson-di',
      type: 'article',
      title: 'Diabetes Insipidus',
      authors: ['Robertson, GL'],
      source: 'Endocrinology and Metabolism Clinics',
      license: 'Copyrighted',
    },
    {
      id: 'christ-crain-copeptin',
      type: 'article',
      title: 'Copeptin in the diagnosis of vasopressin-dependent disorders',
      authors: ['Christ-Crain, M'],
      source: 'Nature Reviews Endocrinology',
      license: 'Copyrighted',
    },
  ],

  crossReferences: [
    { targetId: 'anatomy-hypothalamus', targetType: 'structure', relationship: 'parent', label: 'Hypothalamus' },
    { targetId: 'anatomy-pituitary-anterior', targetType: 'structure', relationship: 'sibling', label: 'Anterior Pituitary' },
    { targetId: 'physiology-adh-oxytocin', targetType: 'pathway', relationship: 'related', label: 'ADH and Oxytocin Physiology' },
    { targetId: 'pathology-diabetes-insipidus', targetType: 'condition', relationship: 'see-also', label: 'Diabetes Insipidus' },
    { targetId: 'pathology-siadh', targetType: 'condition', relationship: 'see-also', label: 'SIADH' },
  ],

  tags: {
    systems: ['endocrine', 'nervous'],
    structures: ['FMA:74636', 'posterior pituitary', 'neurohypophysis'],
    topics: ['anatomy', 'neuroendocrinology'],
    keywords: ['ADH', 'vasopressin', 'oxytocin', 'neurohypophysis', 'water balance'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['endocrinology', 'medicine', 'nephrology'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
