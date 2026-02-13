/**
 * Thyroid Function - Endocrine Physiology
 *
 * Comprehensive coverage of thyroid physiology:
 * - Thyroid hormone synthesis and secretion
 * - T3/T4 transport and metabolism
 * - TSH regulation and HPT axis
 * - Metabolic effects of thyroid hormones
 * - Clinical thyroid disorders pathophysiology
 */

import { EducationalContent } from '../../types';

export const THYROID_FUNCTION: EducationalContent = {
  id: 'physiology-thyroid-function',
  type: 'concept',
  name: 'Thyroid Function and Metabolism Regulation',
  alternateNames: ['Thyroid Physiology', 'T3/T4 Regulation', 'HPT Axis'],

  levels: {
    1: {
      level: 1,
      summary: 'Your thyroid gland makes hormones that control how fast your body works, affecting your energy, weight, heart rate, and even how you think and feel.',
      explanation: `**What Does the Thyroid Do?**
Your thyroid is like a gas pedal for your whole body. The hormones it makes (called T3 and T4) tell every cell how fast to work.

**How It Works:**
1. Your brain senses how fast your body is running
2. If it's too slow, the brain sends a signal (TSH) to the thyroid
3. The thyroid makes more hormone to speed things up
4. When things are running right, the brain sends less signal

**What Thyroid Hormones Control:**
- **Energy**: How tired or energetic you feel
- **Weight**: How easily you gain or lose weight
- **Temperature**: Whether you feel hot or cold
- **Heart**: How fast your heart beats
- **Brain**: How clearly you think and your mood
- **Digestion**: How fast food moves through you
- **Growth**: How children develop (especially the brain)

**When Things Go Wrong:**

**Too Much Thyroid Hormone (Hyperthyroidism):**
- Feel anxious, nervous, shaky
- Heart races, feel hot all the time
- Lose weight even when eating more
- Can't sleep, lots of energy but exhausted

**Too Little Thyroid Hormone (Hypothyroidism):**
- Feel tired, sluggish, cold
- Gain weight, can't lose it
- Constipated, skin gets dry
- Brain feels foggy, mood is low

**Why Iodine Matters:**
Your thyroid needs iodine (found in seafood, dairy, and iodized salt) to make its hormones. Without enough iodine, the thyroid can't work properly.`,
      keyTerms: [
        { term: 'thyroid hormone', definition: 'Chemical messengers (T3 and T4) that control how fast your body runs' },
        { term: 'TSH', definition: 'Thyroid Stimulating Hormone - the signal from your brain telling the thyroid to work harder' },
        { term: 'hyperthyroidism', definition: 'When your thyroid is too active, making you feel revved up and hot' },
        { term: 'hypothyroidism', definition: 'When your thyroid is not active enough, making you feel tired and cold' },
        { term: 'metabolism', definition: 'All the chemical processes that keep your body running and use energy' },
      ],
      analogies: [
        'The thyroid is like a gas pedal - when it makes more hormone, everything speeds up; when it makes less, everything slows down.',
        'TSH from the brain is like your boss telling you to work harder when things are slow.',
        'Iodine for the thyroid is like gasoline for a car - without it, nothing runs.',
      ],
      examples: [
        'Someone with hypothyroidism might need a sweater when everyone else is comfortable.',
        'A person with hyperthyroidism might lose weight even though they are eating more than usual.',
        'Babies need enough thyroid hormone for their brains to develop properly.',
      ],
    },
    2: {
      level: 2,
      summary: 'The thyroid gland produces T4 (thyroxine) and T3 (triiodothyronine) hormones that regulate basal metabolic rate, controlled by the hypothalamic-pituitary-thyroid axis using negative feedback.',
      explanation: `**Thyroid Hormone Production:**

The thyroid makes two main hormones:
- **T4 (thyroxine)**: Contains 4 iodine atoms, main hormone released (~90%)
- **T3 (triiodothyronine)**: Contains 3 iodine atoms, more active form (~10%)

**How Hormones Are Made:**
1. Thyroid traps iodine from blood (iodine pump)
2. Iodine attaches to a protein called thyroglobulin
3. Two iodinated molecules combine to form T3 or T4
4. Hormones stored in colloid until needed
5. Released into blood when stimulated by TSH

**The HPT Axis (Control System):**

| Level | Gland | Hormone | Target |
|-------|-------|---------|--------|
| 1 | Hypothalamus | TRH | Pituitary |
| 2 | Pituitary | TSH | Thyroid |
| 3 | Thyroid | T4, T3 | All cells |

**Negative Feedback:**
- High T3/T4 → Stops TRH and TSH release
- Low T3/T4 → Increases TRH and TSH release
- This keeps hormone levels in the normal range

**Where T4 Becomes T3:**
Most T4 is converted to active T3 in tissues:
- Liver, kidney (for the whole body)
- Brain, pituitary (local effects)
- T4 is like a "storage form" that becomes active T3 when needed

**Effects on the Body:**

| System | Effect of Thyroid Hormones |
|--------|---------------------------|
| Metabolism | Increases oxygen use and heat production |
| Heart | Increases rate and contractility |
| Nervous | Speeds reflexes, affects mood |
| GI | Increases motility |
| Muscle | Maintains function, can cause weakness if abnormal |
| Bone | Needed for normal growth |

**Lab Tests:**
- **TSH**: Best screening test (high = hypothyroid, low = hyperthyroid)
- **Free T4**: Direct measure of hormone available to cells
- **Free T3**: Sometimes helpful in hyperthyroidism`,
      keyTerms: [
        { term: 'T4 (thyroxine)', definition: 'Main thyroid hormone with 4 iodine atoms, converted to T3 in tissues', pronunciation: 'thy-ROX-een' },
        { term: 'T3 (triiodothyronine)', definition: 'Active thyroid hormone with 3 iodine atoms', pronunciation: 'try-EYE-oh-doh-THY-roh-neen' },
        { term: 'TRH', definition: 'Thyrotropin Releasing Hormone from hypothalamus that stimulates TSH release' },
        { term: 'TSH', definition: 'Thyroid Stimulating Hormone from pituitary that makes thyroid produce hormones' },
        { term: 'thyroglobulin', definition: 'Protein in the thyroid where hormones are assembled and stored' },
      ],
      analogies: [
        'T4 is like a prepaid phone card - it has potential but needs to be "activated" to T3 to make calls.',
        'The HPT axis is like a three-level chain of command controlling thyroid function.',
        'Iodine trapping is like the thyroid having a special magnet that pulls iodine out of the blood.',
      ],
    },
    3: {
      level: 3,
      summary: 'Thyroid hormone synthesis involves iodide trapping by NIS, organification by TPO, coupling on thyroglobulin, and deiodinase-mediated peripheral conversion; regulation occurs through TRH-TSH stimulation and T3-mediated negative feedback at both hypothalamic and pituitary levels.',
      explanation: `**Thyroid Hormone Synthesis Steps:**

**1. Iodide Trapping:**
- Sodium-Iodide Symporter (NIS) on basolateral membrane
- Concentrates iodide 20-40x vs. plasma
- TSH-stimulated expression
- Blocked by: Perchlorate, thiocyanate

**2. Iodide Oxidation:**
- Pendrin exports iodide to colloid (apical)
- Thyroid peroxidase (TPO) oxidizes I⁻ to I⁺
- Requires H2O2 generated by DUOX enzymes

**3. Organification:**
- TPO attaches iodine to tyrosine residues on thyroglobulin
- Forms MIT (monoiodotyrosine) and DIT (diiodotyrosine)
- Blocked by: PTU, methimazole (antithyroid drugs)

**4. Coupling:**
- TPO couples iodotyrosines:
  - DIT + DIT = T4
  - DIT + MIT = T3
- Occurs while attached to thyroglobulin

**5. Storage and Release:**
- Colloid stores several months of hormone supply
- TSH stimulates endocytosis of colloid
- Lysosomal proteolysis releases T4 and T3
- MIT and DIT recycled (deiodinated, iodine reused)

**Transport and Metabolism:**

*Binding Proteins:*
| Protein | % Bound | Affinity |
|---------|---------|----------|
| TBG (thyroid-binding globulin) | 70% | Highest |
| Transthyretin | 15% | Medium |
| Albumin | 15% | Lowest |

Only 0.03% of T4 and 0.3% of T3 are free (active)

*Deiodinases:*
| Enzyme | Location | Function |
|--------|----------|----------|
| D1 | Liver, kidney, thyroid | T4→T3 (systemic) |
| D2 | Brain, pituitary, BAT, muscle | T4→T3 (local activation) |
| D3 | Placenta, brain, skin | T4→rT3, T3→T2 (inactivation) |

**Regulation:**

*TSH Effects on Thyroid:*
- Acute: Increased proteolysis and hormone release
- Chronic: Increased iodide uptake, synthesis, vascularity
- Growth: Thyrocyte hyperplasia and hypertrophy

*T3 Negative Feedback:*
- Pituitary: T3 binds TRβ2, suppresses TSH gene
- Hypothalamus: Reduces TRH secretion
- T3 is the active feedback signal (T4 converted locally by D2)

**Metabolic Effects:**

*Cellular Mechanisms:*
- Nuclear receptors (TRα, TRβ) regulate gene transcription
- Increase Na⁺/K⁺-ATPase activity (major O2 consumer)
- Enhance mitochondrial biogenesis and oxidative phosphorylation
- Increase β-adrenergic receptor expression

*System Effects:*
- BMR: Increased 60-100% in hyperthyroidism
- Thermogenesis: Obligatory and adaptive heat production
- Protein turnover: Both synthesis and degradation increased
- Lipid metabolism: Increased LDL receptor expression, lower cholesterol`,
      keyTerms: [
        { term: 'NIS', definition: 'Sodium-Iodide Symporter - membrane protein that concentrates iodide in thyroid cells' },
        { term: 'TPO', definition: 'Thyroid Peroxidase - enzyme that oxidizes iodide and attaches it to thyroglobulin' },
        { term: 'organification', definition: 'Process of attaching oxidized iodine to tyrosine residues on thyroglobulin' },
        { term: 'deiodinase', definition: 'Enzymes (D1, D2, D3) that remove iodine atoms to activate or inactivate thyroid hormones' },
        { term: 'TBG', definition: 'Thyroid-Binding Globulin - main transport protein for T4 and T3 in blood' },
      ],
      clinicalNotes: 'Antithyroid drugs work at specific synthesis steps: perchlorate blocks iodide uptake (NIS), while methimazole and PTU inhibit TPO-mediated organification. PTU also inhibits peripheral D1, reducing T4→T3 conversion. In pregnancy, TBG increases, raising total T4 but maintaining normal free T4 - this is not hyperthyroidism. Nonthyroidal illness ("sick euthyroid") shows low T3 due to decreased D1 and increased D3 - a protective response that should not be treated.',
    },
    4: {
      level: 4,
      summary: 'Thyroid hormone action involves tissue-specific receptor isoform expression, coregulator recruitment, and integration with deiodinase activity to achieve precise regulation of metabolic, cardiovascular, and developmental programs; dysregulation underlies thyrotoxicosis, myxedema, and congenital hypothyroidism.',
      explanation: `**Thyroid Hormone Receptors:**

*Receptor Isoforms:*
- TRα1: Heart, bone, brain - mediates cardiac and skeletal effects
- TRα2: Dominant negative (no T3 binding)
- TRβ1: Liver, kidney - metabolic effects
- TRβ2: Hypothalamus, pituitary - feedback regulation

*Mechanism of Action:*
1. T3 enters cell (via MCT8, MCT10, OATP1C1 transporters)
2. Binds nuclear TR (often as RXR heterodimer)
3. Receptor binds Thyroid Response Elements (TREs)
4. Without T3: Corepressor binding, transcriptional repression
5. With T3: Coactivator recruitment, gene activation

*Target Genes:*
- Metabolic: GLUT4, malic enzyme, lipogenic enzymes
- Cardiac: β1-AR, SERCA2a, MHCα
- Mitochondrial: PGC-1α, UCP1 (brown fat)
- Negative regulation: TSHβ, TRH

**Local T3 Regulation:**

*Tissue-Specific Deiodinase Activity:*

| Tissue | Primary Deiodinase | Effect |
|--------|-------------------|--------|
| Pituitary | D2 | Sensitive T3 for feedback |
| Brown adipose | D2 | Thermogenesis activation |
| Muscle | D2 | Exercise-induced T3 |
| Liver | D1 | Systemic T3 supply |
| Placenta | D3 | Fetal protection from maternal T4 |

*Regulation:*
- D2: Ubiquitin-proteasome degradation by T4
- D3: Hypoxia-inducible factor (HIF) activation
- Illness: D3↑, D1↓ → Low T3 syndrome

**Cardiovascular Effects:**

*Direct T3 Effects:*
- Increased SERCA2a → faster relaxation
- Increased MHCα/decreased MHCβ → faster contraction
- Increased Na⁺/K⁺-ATPase → membrane potential maintenance
- Decreased systemic vascular resistance

*Indirect Effects:*
- Enhanced β-adrenergic responsiveness
- Increased cardiac output
- Atrial arrhythmogenicity (AF in hyperthyroidism)

**Thermogenesis:**

*Obligatory Thermogenesis:*
- Na⁺/K⁺-ATPase accounts for ~20-40% of BMR
- T3 increases activity and expression

*Adaptive Thermogenesis (Brown Adipose Tissue):*
- T3 + norepinephrine → D2 activation → local T3
- T3 induces UCP1 (uncoupling protein)
- Proton leak → heat instead of ATP

**Clinical Correlations:**

*Hyperthyroidism Pathophysiology:*
- Graves disease: TSH receptor-stimulating antibodies
- Toxic nodule: Autonomous TSH receptor activation (mutations)
- Subacute thyroiditis: Thyroid destruction releasing stored hormone

*Hypothyroidism Pathophysiology:*
- Hashimoto's: TPO antibodies, lymphocytic infiltration
- Iodine deficiency: Substrate limitation
- Central: Pituitary/hypothalamic disease

*Amiodarone Thyroid Effects:*
- Contains 37% iodine by weight
- Type 1: Iodine-induced hyperthyroidism (Jod-Basedow)
- Type 2: Destructive thyroiditis
- Hypothyroidism: Wolff-Chaikoff effect

**Thyroid Storm:**
- Life-threatening thyrotoxicosis
- Precipitants: Surgery, infection, iodine load
- Adrenergic excess + direct metabolic effects
- Treatment: PTU (blocks synthesis and conversion), β-blockers, iodine (after PTU), steroids`,
      keyTerms: [
        { term: 'TRβ2', definition: 'Thyroid receptor isoform in pituitary/hypothalamus mediating negative feedback' },
        { term: 'MCT8', definition: 'Monocarboxylate transporter 8 - essential for T3 entry into neurons' },
        { term: 'UCP1', definition: 'Uncoupling Protein 1 in brown fat - dissipates proton gradient as heat' },
        { term: 'Wolff-Chaikoff effect', definition: 'Transient inhibition of thyroid hormone synthesis by high iodine' },
        { term: 'thyroid storm', definition: 'Life-threatening severe hyperthyroidism with decompensated organ function' },
      ],
      clinicalNotes: 'MCT8 mutations cause Allan-Herndon-Dudley syndrome - severe neurological impairment despite high T3 levels because brain cannot take up T3. Understanding type 1 vs type 2 amiodarone-induced thyrotoxicosis is crucial: type 1 (hyperfunctioning gland) may respond to antithyroid drugs; type 2 (thyroid destruction) responds to steroids. In thyroid storm, iodine must be given after PTU has blocked organification, otherwise iodine provides substrate for more hormone synthesis.',
    },
    5: {
      level: 5,
      summary: 'Thyroid physiology integrates central regulation via hypothalamic tanycytes and pituitary thyrotrophs, peripheral modulation through deiodinase networks responding to metabolic and illness states, genetic polymorphisms affecting hormone levels, and therapeutic implications for thyroid hormone replacement and suppression strategies.',
      explanation: `**Central Thyroid Regulation:**

*Hypothalamic TRH Neurons:*
- Location: Paraventricular nucleus (PVN)
- Hypophysiotropic TRH neurons → median eminence
- Regulated by:
  - T3 negative feedback (via D2 in tanycytes)
  - Leptin (stimulatory)
  - α-MSH (stimulatory)
  - Neuropeptide Y/AgRP (inhibitory)

*Tanycytes:*
- Specialized glia lining third ventricle
- Express D2: Converts circulating T4 to T3
- T3 accesses TRH neurons via retrograde transport
- Critical for feedback regulation
- Also express D3: Seasonal adaptation in some species

*Pituitary Thyrotrophs:*
- TRH binding → Gq → IP3/DAG → Ca2+ → TSH release
- TSH glycosylation affects bioactivity
- D2 provides local T3 for feedback
- TSH pulsatility: Low amplitude, high frequency

**Genetic Variation in Thyroid Physiology:**

*Common Polymorphisms:*

| Gene | Variant | Effect | Clinical Relevance |
|------|---------|--------|-------------------|
| DIO2 | Thr92Ala | Reduced D2 activity | May affect T4-only replacement response |
| DIO1 | Multiple | Altered T3/rT3 ratio | Modifies illness response |
| PDE8B | Multiple | Affects TSH | TSH setpoint variation |
| TSHR | Multiple | Receptor sensitivity | TSH variation in euthyroid subjects |

*GWAS Findings:*
- TSH levels: Highly heritable (65%)
- Multiple loci identified (TSHR, PDE8B, FOXE1)
- Explains population variation in "normal" TSH

**Nonthyroidal Illness (Low T3 Syndrome):**

*Adaptive Response:*

| Phase | T4 | T3 | rT3 | TSH | Mechanism |
|-------|----|----|-----|-----|-----------|
| Acute illness | N | ↓ | ↑ | N/↓ | D1↓, D3↑, cytokine effects |
| Chronic illness | ↓ | ↓ | ↑ | N/↓ | Reduced TRH, reduced TBG |
| Recovery | N | N | N | ↑ | Refeeding, TSH rebound |

*Proposed Benefits:*
- Protein sparing
- Reduced energy expenditure
- Matches reduced metabolic demands

*Treatment Controversy:*
- RCTs of T3/T4 replacement show no benefit
- May cause harm (increased mortality in some studies)
- Current recommendation: Do not treat

**Thyroid Hormone Resistance:**

*Resistance to Thyroid Hormone (RTH):*
- TRβ mutations (dominant negative)
- Generalized RTH: Elevated T4, T3 with inappropriately normal TSH
- Pituitary RTH: Same labs, but thyrotoxic symptoms
- Treatment: TRIAC in some cases

*MCT8 Deficiency (Allan-Herndon-Dudley):*
- X-linked, males affected
- Severe psychomotor retardation
- High T3, low T4 in serum
- Brain cannot import T3
- DITPA and TRIAC under investigation

**Advanced Thyroid Testing:**

*TSH Assays:*
- Third-generation: Functional sensitivity 0.01-0.02 mIU/L
- Fourth-generation: <0.01 mIU/L
- Important for distinguishing suppressed vs. normal-low TSH

*Free Hormone Measurement:*
- Equilibrium dialysis: Gold standard
- Analog immunoassays: Affected by binding protein abnormalities
- Calculated free T4 index: T4 × TBG ratio

*Dynamic Testing:*
- TRH stimulation: Rarely used now (TSH assays sufficient)
- T3 suppression test: Assesses TSH suppressibility

**Therapeutic Considerations:**

*T4 Replacement:*
- Levothyroxine: Narrow therapeutic index, bioequivalence issues
- Goals: Normalize TSH (or suppress in cancer)
- Absorption: 70-80%, reduced by food, calcium, iron, PPIs

*T4/T3 Combination Therapy:*
- Physiologic ratio: ~14:1 (T4:T3)
- Most trials show no benefit over T4 alone
- May benefit DIO2 Thr92Ala patients (under study)
- If used: Low-dose T3, divided dosing

*TSH Suppression in Thyroid Cancer:*
- Risk-stratified approach (ATA guidelines)
- High-risk: TSH <0.1 mIU/L
- Low-risk: TSH 0.5-2 mIU/L
- Balance: Cancer recurrence vs. atrial fibrillation/osteoporosis

*Subclinical Thyroid Disease:*
- Subclinical hypothyroidism: Elevated TSH, normal T4
  - Treat if TSH >10, symptomatic, or positive TPO antibodies
  - Young patients: Lower threshold to treat
  - Elderly: Higher threshold (TSH normally higher)
- Subclinical hyperthyroidism: Low TSH, normal T4/T3
  - Higher risk of AF and osteoporosis
  - Treat if TSH persistently <0.1`,
      keyTerms: [
        { term: 'tanycyte', definition: 'Specialized glial cell in hypothalamus that converts T4 to T3 for TRH neuron feedback' },
        { term: 'DIO2 Thr92Ala', definition: 'Common D2 polymorphism that may affect response to T4-only replacement' },
        { term: 'RTH', definition: 'Resistance to Thyroid Hormone - TR mutations causing elevated T4/T3 with normal TSH' },
        { term: 'euthyroid sick syndrome', definition: 'Alternative name for nonthyroidal illness syndrome - low T3 in systemic illness' },
        { term: 'TSH suppression', definition: 'Therapeutic goal in differentiated thyroid cancer to reduce recurrence risk' },
      ],
      clinicalNotes: 'The genetic basis of TSH setpoint variation explains why some patients feel better at different TSH levels within the "normal" range. In elderly patients, higher TSH (up to 7-8 mIU/L) may be normal and treating to lower TSH can cause harm. The DIO2 Thr92Ala polymorphism is being studied as a predictor of who might benefit from combination T4/T3 therapy, though current evidence is insufficient to guide practice. In thyroid cancer management, the paradigm has shifted toward less aggressive TSH suppression, recognizing the cardiovascular and skeletal risks of iatrogenic thyrotoxicosis.',
    },
  },

  media: [
    {
      id: 'thyroid-hormone-synthesis',
      type: 'diagram',
      filename: 'thyroid-hormone-synthesis.svg',
      title: 'Thyroid Hormone Synthesis',
      description: 'Steps from iodide trapping through T3/T4 release',
    },
    {
      id: 'hpt-axis',
      type: 'diagram',
      filename: 'hypothalamic-pituitary-thyroid-axis.svg',
      title: 'Hypothalamic-Pituitary-Thyroid Axis',
      description: 'Feedback regulation of thyroid function',
    },
    {
      id: 'deiodinase-pathways',
      type: 'diagram',
      filename: 'deiodinase-pathways.svg',
      title: 'Deiodinase Enzyme Pathways',
      description: 'D1, D2, D3 activation and inactivation of thyroid hormones',
    },
  ],

  citations: [
    {
      id: 'williams-thyroid',
      type: 'textbook',
      title: 'Thyroid Physiology and Diagnostic Evaluation of Patients with Thyroid Disorders',
      source: 'Williams Textbook of Endocrinology, 14th Edition',
      chapter: '11-12',
      license: 'Copyrighted',
    },
    {
      id: 'ata-guidelines',
      type: 'article',
      title: 'ATA Guidelines for the Management of Thyroid Disease',
      source: 'Thyroid (Journal)',
      url: 'https://www.thyroid.org/professionals/ata-professional-guidelines/',
      license: 'Open Access',
    },
  ],

  crossReferences: [
    { targetId: 'anatomy-thyroid-gland', targetType: 'structure', relationship: 'related', label: 'Thyroid Anatomy' },
    { targetId: 'physiology-hormone-basics', targetType: 'concept', relationship: 'parent', label: 'Hormone Basics' },
    { targetId: 'physiology-pituitary-function', targetType: 'topic', relationship: 'related', label: 'Pituitary Function' },
    { targetId: 'pathology-hyperthyroidism', targetType: 'condition', relationship: 'see-also', label: 'Hyperthyroidism' },
    { targetId: 'pathology-hypothyroidism', targetType: 'condition', relationship: 'see-also', label: 'Hypothyroidism' },
    { targetId: 'clinical-thyroid-testing', targetType: 'topic', relationship: 'related', label: 'Thyroid Testing' },
  ],

  tags: {
    systems: ['endocrine'],
    topics: ['physiology', 'thyroid', 'metabolism'],
    keywords: ['T3', 'T4', 'TSH', 'thyroid hormone', 'metabolism', 'deiodinase', 'HPT axis'],
    clinicalRelevance: 'critical',
    examRelevance: {
      usmle: true,
      nbme: true,
      shelf: ['endocrinology', 'medicine', 'surgery'],
    },
  },

  createdAt: '2025-01-24T00:00:00.000Z',
  updatedAt: '2025-01-24T00:00:00.000Z',
  version: 1,
  status: 'published',
  contributors: ['Biological Self Content Team'],
};
